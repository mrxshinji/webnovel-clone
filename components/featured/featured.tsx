import stl from "./featured.module.scss";

import FeaturedLeft from "./left";

import weeklyData from "../../lib/weeklyFeatured2.json";
import RightCard from "./rightCard";

const Featured = ({}) => {
  return (
    <section id='featured' className={stl.container}>
      <div className={stl.titleWrapper}>
        <h3> Weekly Featured</h3>
      </div>
      <FeaturedLeft />
      <div className={stl.right}>
        <ul>
          {weeklyData.map((item, idx) => {
            return (
              <li key={idx}>
                <RightCard
                  title={item.title}
                  url='/'
                  imgLink={item.image}
                  genre={item.genre}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Featured;
