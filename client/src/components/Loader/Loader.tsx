import { LoaderWrapper } from "./Loader.style";

const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="lds-ripple"></div>
      <div></div>
      <div></div>
    </LoaderWrapper>
  );
};

export default Loader;
