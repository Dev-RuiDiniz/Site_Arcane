import { describe, expect, it } from 'vitest';
import { trackEvent, trackLead } from './analytics.js';

describe('analytics events', () => {
  it('pushes events to the data layer without external IDs', () => {
    globalThis.window = { dataLayer: [] };

    trackEvent('whatsapp_click', { source: 'contact_form', page_path: '/contact' });

    expect(globalThis.window.dataLayer).toContainEqual({
      event: 'whatsapp_click',
      source: 'contact_form',
      page_path: '/contact',
    });

    delete globalThis.window;
  });

  it('records a lead event after a valid WhatsApp handoff', () => {
    globalThis.window = { dataLayer: [] };

    trackLead({ source: 'contact_form', page_path: '/contact' });

    expect(globalThis.window.dataLayer).toContainEqual({
      event: 'generate_lead',
      source: 'contact_form',
      page_path: '/contact',
    });

    delete globalThis.window;
  });
});
