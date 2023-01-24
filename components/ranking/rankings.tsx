import Link from "next/link";
import { useState } from "react";
import RankingOne from "./rankingOne";
import stl from "./rankings.module.scss";

const Rankings = ({}) => {
  const [rankingHeight, setRankingHeight] = useState(400);

  const handleHeight = () => {
    if (rankingHeight === 400) {
      setRankingHeight(800);
      return;
    } else {
      setRankingHeight(400);
    }
  };

  return (
    <section id='ranking' className={stl.sectionContainer}>
      <div className={stl.titleWrapper}>
        <h3> Ranking</h3>
        <Link href='/'>MORE</Link>
      </div>
      <div
        className={stl.rankingsContainer}
        style={{ height: `${rankingHeight}px` }}
      >
        <RankingOne title={"Power Ranking"} />
        <RankingOne title={"New"} width={100} />
        <RankingOne title={"Collection Ranking"} />
      </div>
      {rankingHeight === 400 && (
        <div className={stl.extendContainer}>
          <button type='button' onClick={handleHeight}>
            EXTEND MORE
          </button>
        </div>
      )}
    </section>
  );
};

export default Rankings;
