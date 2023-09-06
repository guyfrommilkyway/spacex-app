import { Flex, Spinner } from '@chakra-ui/react';

const LoadingScreen = () => {
  return (
    <Flex justify='center' alignItems='center'>
      <Spinner size='lg' />
    </Flex>
  );
};

export default LoadingScreen;
