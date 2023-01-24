import Link from "next/link";
import stl from "./singleTag.module.scss";

type Props = {
  linkTo: string;
  tagName: string;
};

const SingleTag = ({ linkTo, tagName }: Props) => {
  return (
    <Link href={linkTo} className={stl.container}>
      <p>{tagName}</p>
    </Link>
  );
};

export default SingleTag;
