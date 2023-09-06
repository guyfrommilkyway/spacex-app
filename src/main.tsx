// import packages below
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

// import components below
import App from './App.tsx';
import LoadingScreen from '@/components/LoadingScreen/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Suspense fallback={<LoadingScreen />}>
        <App renderLoading={<LoadingScreen />} />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
);
