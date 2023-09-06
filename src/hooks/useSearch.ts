// import packages below
import { useState, useCallback } from 'react';

const useSearch = () => {
  const [result, setResult] = useState<object[]>([]);

  const searchHandler = useCallback((data: any[], key: string) => {
    const filteredData = data.filter(item => {
      const name = item?.name.toLowerCase();

      if (name.includes(key.toLowerCase())) return item;
    });

    setResult(filteredData);
  }, []);

  const resetHandler = useCallback(() => {
    setResult([]);
  }, []);

  return { result, searchHandler, resetHandler };
};

export default useSearch;
