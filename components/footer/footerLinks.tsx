import Link from "next/link";
import stl from "./footerLinks.module.scss";

type Links = {
  name: string;
  linkTo: string;
};

type Props = {
  title: string;
  links: Links[];
};

const FooterLinks = ({ title, links }: Props) => {
  return (
    <div className={stl.container}>
      <div className={stl.titleWrapper}>
        <h3>{title}</h3>
      </div>
      <div className={stl.linksContainer}>
        <ul>
          {links.map((item, idx) => {
            return (
              <li key={idx}>
                <Link href={item.linkTo}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
