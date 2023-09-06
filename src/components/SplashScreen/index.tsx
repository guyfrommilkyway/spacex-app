// import packages below
import { Flex, Spinner } from '@chakra-ui/react';

const SplashScreen = () => {
  return (
    <Flex justify='center' alignItems='center' w='100%' minH='100vh' bg='white'>
      <Spinner size='lg' />
    </Flex>
  );
};

export default SplashScreen;
