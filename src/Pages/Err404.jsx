import usePageTitle from "../Hooks/usePageTitle";

const Err404 = () => {
  usePageTitle("Error!");
  return <div>Error 404!</div>;
};

export default Err404;
