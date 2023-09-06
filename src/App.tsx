// import packages below
import React, { useState, useEffect, useCallback } from 'react';
import { Box } from '@chakra-ui/react';

// import components below
import SearchBar from '@/components/SearchBar';
import Launches from '@/components/Launches';
import LoadingScreen from '@/components/LoadingScreen';
import NoDataAvailable from '@/components/NoDataAvailable';
import InfiniteLoader from '@/components/InfiniteLoader';
import EndMessage from '@/components/EndMessage';

// import utils below
import useGetLaunches from '@/hooks/useGetLaunches';
import useSearch from '@/hooks/useSearch';

const App: React.FC = () => {
  // state
  const { launches, launchesHandler } = useGetLaunches();
  const { result, searchHandler, resetHandler } = useSearch();
  const [keyword, setKeyword] = useState<string>();
  const [count, setCount] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  // data
  const data = keyword ? result : launches;

  // fetch launches on initial page visit
  useEffect(() => {
    launchesHandler(setIsLoading);
  }, []);

  // search listener
  useEffect(() => {
    let timeout: any;

    if (keyword) {
      setIsLoading(true);

      timeout = setTimeout(() => {
        searchHandler(launches, keyword);
        setIsLoading(false);
        setIsSetting(false);
      }, 500);
    } else {
      resetHandler();
      setIsLoading(false);
      setIsSetting(false);
    }

    // clean up
    return () => clearTimeout(timeout);
  }, [launches, keyword]);

  // scroll handler
  const scrollHandler = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (count < data.length) {
        setIsSetting(true);
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
          setIsSetting(false);
          setCount(prev => prev + 10);
          document.body.removeAttribute('style');
        }, 500);
      } else {
        setIsEnd(true);
      }
    }
  }, [count, data]);

  // scroll listener
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    // clean up
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [count, data]);

  // conditional variables
  const showLoader = isLoading;
  const showLaunches = !isLoading && data.length > 0;
  const showNoDataAvailable = !isLoading && keyword && data.length === 0;
  const showInfiniteLoader = isSetting;
  const showEndMessage = isEnd;

  return (
    <Box
      w='100%'
      h='100%'
      minH='100vh'
      px={{ base: 4, md: 8, xl: 16 }}
      py={{ base: 2, md: 4, xl: 8 }}
      overflow='hidden'
    >
      <Box w='100%' h='100%' mx='auto' py={8} bg='blackAlpha.100'>
        <Box w='100%' maxW='920px' mx='auto'>
          <SearchBar onSearch={(key: string) => setKeyword(key)} />
          {showLoader && <LoadingScreen />}
          {showLaunches && <Launches data={data.slice(0, count)} />}
          {showNoDataAvailable && <NoDataAvailable />}
          {showInfiniteLoader && <InfiniteLoader />}
          {showEndMessage && <EndMessage />}
        </Box>
      </Box>
    </Box>
  );
};

export default App;
