// import packages below
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

// import components below
import App from './App.tsx';
import SplashScreen from '@/components/SplashScreen';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Suspense fallback={<SplashScreen />}>
        <App />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
);
