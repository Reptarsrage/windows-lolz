import { render } from '@testing-library/react';
import App from './App';

test('renders', () => {
  const renderResult = render(<App />);
  expect(renderResult).toBeDefined();
});
