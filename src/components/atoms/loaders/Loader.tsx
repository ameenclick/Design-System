import LoaderPropsType from "./type";
import getLoaderClasses from "./utility";

const Loader = (props: LoaderPropsType) => {
    const loaderClassess = getLoaderClasses(props);
  return (
    <div className={loaderClassess} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export default Loader
