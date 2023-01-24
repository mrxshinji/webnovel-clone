import Image from "next/image";
import stl from "./rankingMini.module.scss";

type Props = {
  image: string;
  title: string;
  genre: string;
  rating: number;
  idx: number;
};

const RankingMini = ({image, title, genre, rating, idx}: Props) => {
  return (
    <div className={stl.container}>
        <div className={stl.imgContainer}>
            <Image src={image} alt={title} fill />
        </div>
        <div className={stl.idxContainer}>
            {idx < 10 ? `0${idx}` : idx}
        </div>
        <div className={stl.textContainer}>
            <h5>{title.length > 30 ? `${title.substring(0,30)}...` : title}</h5>
            <p>{genre}</p>
            <p>*{rating}</p>
        </div>
    </div>
  );
};

export default RankingMini;
