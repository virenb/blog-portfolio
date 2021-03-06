import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const Toggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        // Don't render anything at compile time. Deferring rendering until we
        // know which theme to use on the client avoids incorrect initial
        // state being displayed.
        if (theme == null) {
          return null;
        }
        return (
          <label style={{ margin: '1rem 0 0 0' }}>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            <span role="img" aria-label="crescent-moon">
              &#127769;
            </span>
          </label>
        );
      }}
    </ThemeToggler>
  );
};

export default Toggle;
