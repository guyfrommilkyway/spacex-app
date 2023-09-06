import { Box, Text } from '@chakra-ui/react';

const NoDataAvailable = () => {
  return (
    <Box w='100%' px={4} py={8} border='1px solid RGBA(0, 0, 0, 0.16)' bg='white'>
      <Text color='blackAlpha.600' textAlign='center'>
        No data available.
      </Text>
    </Box>
  );
};

export default NoDataAvailable;
