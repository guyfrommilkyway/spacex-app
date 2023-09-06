// import packages below
import { Flex, Spinner } from '@chakra-ui/react';

const InfiniteLoader = () => {
  return (
    <Flex justify='center' alignItems='center' p={4}>
      <Spinner />
    </Flex>
  );
};

export default InfiniteLoader;
