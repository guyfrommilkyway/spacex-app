// import packages below
import React, { useState, useEffect, useCallback } from 'react';
import { Box } from '@chakra-ui/react';

// import components below
import SearchBar from '@/components/SearchBar';
import Launches from '@/components/Launches';
const LoadingScreen = React.lazy(() => import('@/components/LoadingScreen'));
const NoDataAvailable = React.lazy(() => import('@/components/NoDataAvailable'));

// import utils below
import useGetLaunches from '@/hooks/useGetLaunches';
import useSearch from '@/hooks/useSearch';

const App: React.FC = () => {
  const { launches, launchesHandler } = useGetLaunches();
  const { result, searchHandler, resetHandler } = useSearch();
  const [keyword, setKeyword] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // final data
  const availableData = keyword ? result : launches;

  console.log(availableData);

  // scroll handler
  const scrollHandler = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      console.log('bottom reached');
    }
  }, []);

  // will run only once
  useEffect(() => {
    launchesHandler(setIsLoading);
  }, []);

  // search
  useEffect(() => {
    let timeout: any;

    if (keyword) {
      setIsLoading(true);
      timeout = setTimeout(() => {
        searchHandler(launches, keyword);
        setIsLoading(false);
      }, 1500);
    } else {
      resetHandler();
      setIsLoading(false);
    }

    // clean up
    return () => clearTimeout(timeout);
  }, [launches, keyword]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    // clean up
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <Box w='100%' h='100%' minH='100vh' px={{ base: 4, md: 8, xl: 16 }} py={{ base: 2, md: 4, xl: 8 }}>
      <Box w='100%' h='100%' mx='auto' py={8} bg='blackAlpha.100'>
        <Box w='100%' maxW='920px' mx='auto'>
          <SearchBar onSearch={(key: string) => setKeyword(key)} />
          {isLoading && <LoadingScreen />}
          {!isLoading && availableData.length > 0 && <Launches data={availableData} />}
          {!isLoading && keyword && availableData.length === 0 && <NoDataAvailable />}
        </Box>
      </Box>
    </Box>
  );
};

export default App;
