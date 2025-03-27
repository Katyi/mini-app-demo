import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThirdwebProvider } from 'thirdweb/react';

if (window.Telegram?.WebApp) {
  window.Telegram.WebApp.expand(); // Делаем окно по всей высоте
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  </StrictMode>
);
