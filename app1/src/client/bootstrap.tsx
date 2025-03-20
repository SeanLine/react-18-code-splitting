import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const render = App => {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<App />);
};

render(App);
