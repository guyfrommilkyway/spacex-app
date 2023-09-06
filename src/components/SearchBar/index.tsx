import { Box, Input } from '@chakra-ui/react';
import React from 'react';

interface Props {
  onSearch: (key: string) => void;
}

const SearchBar: React.FC<Props> = props => {
  const { onSearch } = props;

  return (
    <Box mb={8} bg='gray.50'>
      <Input
        type='text'
        placeholder='Enter keywords'
        onChange={e => onSearch(e?.target?.value)}
        borderRadius='0'
        borderColor='RGBA(0, 0, 0, 0.16)'
        background='white'
      />
    </Box>
  );
};

export default SearchBar;
