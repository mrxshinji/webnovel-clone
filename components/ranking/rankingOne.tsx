import stl from "./rankingOne.module.scss";

import RankingMini from "./rankingMini";

import RankingBackIcon from "../../public/icon/rankingBack.svg";

import rankingData from "../../lib/weeklyFeatured2.json";

type Props = {
  width?: number;
  title: string;
};

const RankingOne = ({ width = 215, title }: Props) => {
  return (
    <div className={stl.container}>
      <div className={stl.title}>
        <div className={stl.subtitle} style={{ width: `${width}px` }}>
          <h4>{title}</h4>
          <RankingBackIcon className={stl.backImg} />
        </div>
      </div>
      <ul>
        {rankingData.map((item, idx) => {
          return (
            <li key={idx}>
              {" "}
              <RankingMini
                image={item.image}
                title={item.title}
                genre={item.genre}
                rating={item.rating}
                idx={idx + 1}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RankingOne;
