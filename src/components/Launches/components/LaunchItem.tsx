import { Box, Flex, VStack, Heading, Text } from '@chakra-ui/react';

interface Props {
  key: string;
  item: any;
}

const LaunchItem: React.FC<Props> = props => {
  const { item } = props;

  const flightNumber = item.flight_number;
  const name = item.name;
  const year = new Date(item.date_utc).getUTCFullYear();
  const details = item.details;

  return (
    <Box mb={8}>
      <Flex alignItems='center' gap={4}>
        <Box w='120px' minW='120px' h='120px' minH='120px' bg='blackAlpha.300'></Box>
        {/* <Image src={item.links.patch.large} w='120px' minW='120px' h='120px' minH='120px' /> */}
        <VStack alignItems='flex-start' px={2} py={4}>
          <Heading as='h6' fontSize='lg'>
            {flightNumber}: {name} ({year})
          </Heading>
          {details ? (
            <Text as='p'>{details}</Text>
          ) : (
            <Text as='span' color='blackAlpha.600'>
              No description available
            </Text>
          )}
        </VStack>
      </Flex>
    </Box>
  );
};

export default LaunchItem;
