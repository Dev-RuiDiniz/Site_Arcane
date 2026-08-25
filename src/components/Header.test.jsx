import { describe, expect, it } from 'vitest';
import { Header } from './Header.jsx';

describe('Header visibility', () => {
  it('adds the visible state when the page has been scrolled', () => {
    const header = Header({
      currentPath: '/',
      isVisible: true,
      menuOpen: false,
      onMenuToggle: () => {},
      onNavigate: () => {},
    });

    expect(header.props.className).toContain('is-visible');
  });
});
