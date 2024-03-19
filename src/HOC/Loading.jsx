/* eslint-disable react/prop-types */
const Loading = ({ children, loading, error }) => {
  return loading ? (
    <p>loading...!</p>
  ) : error ? (
    <p>Error: {error.message}</p>
  ) : (
    children
  );
};

export default Loading;
