import PropTypes from 'prop-types';
import { ErrorWrapper } from './Error.styled';

const Error = ({ message }) => {
  return <ErrorWrapper>{message}</ErrorWrapper>;
};

export default Error;

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
