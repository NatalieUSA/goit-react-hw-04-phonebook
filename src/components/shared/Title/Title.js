import PropTypes from 'prop-types';

export const Title = ({ children }) => {
  return <h2>{children}</h2>;
};

Title.protoTypes = {
  children: PropTypes.node.isRequired,
};
