import { ThreeDots } from 'react-loader-spinner';
const Loader = () => (
  <div>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#303f9f"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </div>
);

export default Loader;
