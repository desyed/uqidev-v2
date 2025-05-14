// Google Analytics event tracking utility
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore - gtag is added by the script but TypeScript doesn't know about it
    window.gtag('event', eventName, parameters);
  }
};

// Page view tracking for custom navigation
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('config', 'G-T5W7165PGS', {
      page_path: url,
      page_title: title
    });
  }
};

// Track user engagement - example implementation
export const trackEngagement = (engagement_type: string) => {
  trackEvent('engagement', {
    type: engagement_type,
    page: typeof window !== 'undefined' ? window.location.pathname : ''
  });
};

// Track outbound links
export const trackOutboundLink = (url: string, label: string = 'outbound link') => {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: label,
    link_url: url
  });
  
  // Still navigate to the link
  return true;
}; 