import Link from "next/link";
import stl from "./popularTag.module.scss";

import tagData from "../../lib/tag.json";
import SingleTag from "./singleTag";

const PopularTag = () => {
  return (
    <section id='popularTag' className={stl.container}>
      <div className={stl.titleWrapper}>
        <h3>Popular Tags</h3>
        <Link href='/'>MORE</Link>
      </div>
      <div className={stl.tagContainer}>
        <ul>
          {tagData.map((item, idx) => {
            return (
              <li key={idx}>
                <SingleTag linkTo='/' tagName={item.name} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PopularTag;
