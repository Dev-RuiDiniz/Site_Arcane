import { describe, expect, it } from 'vitest';
import { siteContent } from './content.js';
import { ServiceList } from '../components/ServiceList.jsx';

describe('home hero content', () => {
  it('exposes the Arcane eyebrow for the editorial hero', () => {
    expect(siteContent.hero.eyebrow).toBe('ARCANE TECNOLOGIA');
  });

  it('assigns the Digital background video to the first service theme', () => {
    expect(siteContent.services[0].video).toBe('/assets/digital.mp4');
    expect(siteContent.services[1].video).toBe('/assets/labs.mp4');
    expect(siteContent.services[2].video).toBe('/assets/growth.mp4');
  });

  it('does not render service numbering in the theme rows', () => {
    const list = ServiceList({ services: siteContent.services, onNavigate: () => {} });
    const firstRowChildren = list.props.children[0].props.children;

    expect(firstRowChildren.some((child) => child?.props?.className === 'service-number')).toBe(false);
  });
});
