import { page } from '@vitest/browser/context';
import React from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import App from './app';

test('App component renders correctly', async () => {
  render(<App />);

  await expect.element(page.getByText('Hell, React!')).toBeInTheDocument();
});
