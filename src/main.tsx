// import packages below
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

// import components below
import App from './App.tsx';
const SplashScreen = React.lazy(() => {
  return Promise.all([
    import('@/components/SplashScreen/index.tsx'),
    new Promise(resolve => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Suspense fallback={<SplashScreen />}>
        <App />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
);
