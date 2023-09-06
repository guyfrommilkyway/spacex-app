// import packages below
import React from 'react';
import { Flex } from '@chakra-ui/react';

interface Props {
  render: any;
}

const LaunchesList: React.FC<Props> = props => {
  const { render } = props;

  return (
    <Flex flexDirection='column' p={8} border='1px solid RGBA(0, 0, 0, 0.16)' bg='white'>
      {render}
    </Flex>
  );
};

export default LaunchesList;
