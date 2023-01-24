import Image from "next/image";
import stl from "./miniCard.module.scss";

type Props = {
  imgLink: string;
  title: string;
  genre: string;
  link: string;
};

const MiniCard = ({ imgLink, title, genre, link }: Props) => {
  return (
    <div className={stl.container}>
      <div className={stl.imgContainer}>
        <Image src={imgLink} alt={title} fill />
      </div>
      <div className={stl.content}>
        <h3>{title.length < 32 ? title : `${title.substring(0, 32)}...`}</h3>
        <p>{genre}</p>
      </div>
    </div>
  );
};

export default MiniCard;
