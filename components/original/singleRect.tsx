import stl from "./singleRect.module.scss";

import Image from "next/image";
import Link from "next/link";

type Props = {
  linkTo?: string;
  imgLink: string;
  title: string;
  subtitle: string;
};

const SingleRect = ({ linkTo = "/", imgLink, title, subtitle }: Props) => {
  return (
    <Link href={linkTo}>
      <div className={stl.contentContainer}>
        <div className={stl.imgContainer}>
          <Image src={imgLink} alt='' fill />
        </div>
        <div className={stl.textContainer}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleRect;
