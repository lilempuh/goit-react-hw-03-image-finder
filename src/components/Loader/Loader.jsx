import { MagnifyingGlass } from 'react-loader-spinner';
import React from 'react';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <MagnifyingGlass
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        visible={true}
      />
    </LoaderWrapper>
  );
};
export default Loader;
