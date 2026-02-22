/* eslint-disable @next/next/no-img-element */
import Script from "next/script"

/**
 * Retargeting Pixels Component
 * Loads Facebook Pixel, Google Ads Pixel, and other conversion tracking
 * Should be placed in layout.tsx <head>
 */
export default function RetargetingPixels() {
  return (
    <>
      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Facebook Pixel No Script */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      {/* Google Ads Conversion Tracking */}
      <Script
        id="google-ads-pixel"
        strategy="afterInteractive"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
      />
      <Script
        id="google-ads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
          `,
        }}
      />

      {/* Hotjar for Session Recording & Heatmaps */}
      <Script
        id="hotjar-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />

      {/* LinkedIn Insight Tag */}
      <Script
        id="linkedin-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            _linkedin_partner_id = "${process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `,
        }}
      />
      <Script
        id="linkedin-pixel-loader"
        strategy="afterInteractive"
        src="https://snap.licdn.com/li.lms-analytics/insight.js"
        async
      />

      {/* TikTok Pixel */}
      <Script
        id="tiktok-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["pageview","track","identify","instances","debug","page","share","cookie","set","identify"];ttq.setAndDefer=function(t,e){ttq[t]=e};for(var i=0;i<ttq.methods.length;i++){ttq[ttq.methods[i]]=function(){return ttq.push([ttq.methods[i].toString(),arguments]);};}ttq.instance=function(t){for(var e=ttq._i[t]||{},n=0;n<ttq.methods.length;n++){try{e[ttq.methods[n]]=ttq[ttq.methods[n]];}catch(t){}}return e;};ttq._i={};ttq.load=function(e,t){var n=d.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://analytics.tiktok.com/i/"+(e=t._k||e);d.getElementsByTagName("head")[0].appendChild(n);};ttq.pageview=function(){ttq.track("PageView");};ttq.load("${process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID}");ttq.identify();
            }(window, document, 'ttq');
          `,
        }}
      />
    </>
  )
}
