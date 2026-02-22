"use client"

import LeadMagnetModal from "@/components/lead-magnet-modal"
import ExitIntentPopup from "@/components/exit-intent-popup"
import { useLeadMagnetModal, useExitIntent } from "@/lib/hooks"

/**
 * Root client-side layout wrapper
 * Manages lead capture modals and popups
 */
export default function RootClientLayout() {
  const { showModal, handleClose } = useLeadMagnetModal()
  const exitIntentShown = useExitIntent()

  return (
    <>
      {/* Lead Magnet Modal - shows after 30 seconds of inactivity */}
      <LeadMagnetModal
        isOpen={showModal}
        onClose={handleClose}
      />

      {/* Exit Intent Popup - shows when user tries to leave */}
      {exitIntentShown && (
        <ExitIntentPopup
          onClose={() => {
            // Handle exits
          }}
        />
      )}
    </>
  )
}
