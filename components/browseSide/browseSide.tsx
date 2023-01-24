import BrowseGenre from "./browseGenre";
import stl from "./browseSide.module.scss";


const BrowseSide = ({}) => {
  return (
    <div className={stl.container}>
        <BrowseGenre />
    </div>
  );
};

export default BrowseSide;
