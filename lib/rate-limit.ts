/**
 * In-memory sliding-window rate limiter.
 *
 * Tracks requests per key (typically IP) using a Map. Expired entries are
 * lazily cleaned on every `check()` call so the Map never grows unbounded.
 *
 * NOTE: This works per-instance — if the app runs on multiple serverless
 * isolates each one keeps its own window. For a single-region Vercel
 * deployment that is acceptable; for multi-region use an external store.
 */

interface RateLimitEntry {
  /** Timestamps (ms) of requests inside the current window. */
  timestamps: number[]
}

interface RateLimitResult {
  success: boolean
  /** How many requests the caller can still make in this window. */
  remaining: number
  /** Unix-epoch second when the oldest tracked request expires. */
  resetAt: number
}

interface RateLimiterOptions {
  /** Window size in seconds (default 60). */
  windowSec?: number
  /** Max requests per window (default 10). */
  maxRequests?: number
}

export function createRateLimiter(opts: RateLimiterOptions = {}) {
  const windowMs = (opts.windowSec ?? 60) * 1000
  const max = opts.maxRequests ?? 10
  const store = new Map<string, RateLimitEntry>()

  /** Remove entries whose entire window has elapsed. */
  function cleanup(now: number) {
    for (const [key, entry] of store) {
      // Drop timestamps outside the window
      entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs)
      if (entry.timestamps.length === 0) {
        store.delete(key)
      }
    }
  }

  /**
   * Check (and record) a request for the given key.
   * Returns whether the request is allowed.
   */
  function check(key: string): RateLimitResult {
    const now = Date.now()

    // Lazy cleanup — runs at most once per call, O(n) of map size
    cleanup(now)

    let entry = store.get(key)
    if (!entry) {
      entry = { timestamps: [] }
      store.set(key, entry)
    }

    // Filter to only timestamps inside the current window
    entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs)

    if (entry.timestamps.length >= max) {
      const oldest = entry.timestamps[0]
      const resetAt = Math.ceil((oldest + windowMs) / 1000)
      return { success: false, remaining: 0, resetAt }
    }

    entry.timestamps.push(now)
    const remaining = max - entry.timestamps.length
    const oldest = entry.timestamps[0]
    const resetAt = Math.ceil((oldest + windowMs) / 1000)

    return { success: true, remaining, resetAt }
  }

  return { check }
}

/**
 * Extract the client IP from a Next.js request.
 * Checks x-forwarded-for first (Vercel / reverse proxies), then
 * x-real-ip, and falls back to a constant.
 */
export function getClientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for')
  if (xff) {
    // x-forwarded-for can be a comma-separated list; take the first (client)
    return xff.split(',')[0].trim()
  }
  return req.headers.get('x-real-ip') ?? '127.0.0.1'
}
