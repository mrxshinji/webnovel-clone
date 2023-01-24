import stl from "./article.module.scss";

import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  banner: string;
};

const Article = ({ title, subtitle, banner }: Props) => {
  return (
    <Link href='/'>
      <div className={stl.articleContainer}>
        <div className={stl.articleText}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
        <div className={stl.articleImage}>
          <Image src={banner} alt={title} fill />
        </div>
      </div>
    </Link>
  );
};

export default Article;
