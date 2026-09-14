import { describe, expect, it } from 'vitest';
import { siteContent } from './content.js';
import { ServiceList } from '../components/ServiceList.jsx';

describe('home hero content', () => {
  it('exposes the Arcane eyebrow for the editorial hero', () => {
    expect(siteContent.hero.eyebrow).toBe('ARCANE TECNOLOGIA');
    expect(siteContent.hero.title).toBe('Estratégia e tecnologia para transformar ideias em negócios.');
  });

  it('assigns the Digital background video to the first service theme', () => {
    expect(siteContent.services[0].video).toBe('/assets/digital.mp4');
    expect(siteContent.services[1].video).toBe('/assets/growth.mp4');
    expect(siteContent.services[2].video).toBe('/assets/rise.mp4');
  });

  it('renders the concept and numbering in the theme rows', () => {
    const list = ServiceList({ services: siteContent.services, onNavigate: () => {} });
    const firstRowChildren = list.props.children[0].props.children;

    expect(firstRowChildren.some((child) => child?.props?.className === 'service-index')).toBe(true);
  });

  it('does not expose superseded service language in current content', () => {
    const currentContent = JSON.stringify(siteContent);

    expect(currentContent).not.toContain('Arcane Labs');
    expect(currentContent).not.toContain('Labs');
    expect(currentContent).not.toContain('Construa');
    expect(currentContent).not.toContain('growth marketing');
  });
});
