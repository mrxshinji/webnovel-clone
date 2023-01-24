import stl from "./risingRight.module.scss";

import MiniCard from "./miniCard";
import { LibData } from "../../store/type";

export type RisingRightProps = {
  title: string;
  importData: LibData[];
};

const RisingRight = ({title, importData}: RisingRightProps) => {
  return (
    <div className={stl.container}>
      <div className={stl.titleWrapper}>
        <h4>{title}</h4>
        <button type='button'>SWITCH</button>
      </div>
      <div className={stl.contentWrapper}>
        <ul>
          {importData
            .filter((_, idx) => idx < 6)
            .map((item, idx) => {
              return (
                <li key={idx}>
                  <MiniCard
                    imgLink={item.image}
                    title={item.title}
                    genre={item.genre}
                    link='/'
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default RisingRight;
