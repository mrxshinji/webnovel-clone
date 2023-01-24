import stl from "./potential.module.scss";

import RightCard from "../featured/rightCard";
import { LibData } from "../../store/type";

type Props = {
  title: string;
  data: LibData[];
};

const Potential = ({title, data }: Props) => {
  return (
    <div className={stl.wideContainer}>
      <section id='potential' className={stl.container}>
        <div className={stl.titleWrapper}>
          <h3>{title}</h3>
        </div>

        <ul>
          {data
            .filter((item, idx) => idx < 8)
            .map((item, idx) => {
              return (
                <li key={idx}>
                  <RightCard
                    title={item.title}
                    url={"/"}
                    imgLink={item.image}
                    genre={item.genre}
                  />
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
};

export default Potential;
