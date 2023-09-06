// import packages below
import { useCallback, useState } from 'react';

// import api below
import { getLaunches } from '@/api/axios';

const useGetLaunches = () => {
  const [launches, setLaunches] = useState<object[]>([]);

  const launchesHandler = useCallback(async (loadingHandler: (param: boolean) => void) => {
    loadingHandler(true);

    const data = await getLaunches();

    if (data) {
      loadingHandler(false);
      setLaunches(data);
    }
  }, []);

  return { launches, launchesHandler };
};

export default useGetLaunches;
