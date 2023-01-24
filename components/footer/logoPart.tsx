import stl from "./logoPart.module.scss";

import Link from "next/link";

import FacebookIcon from "../../public/icon/facebook.svg";
import PinterestIcon from "../../public/icon/pinterest.svg";
import InstagramIcon from "../../public/icon/instagram.svg";

const LogoPart = () => {
  return (
    <div className={stl.logoPart}>
      <div className={stl.logoContainer}>
        <Link href={"/"}>
          <h3>WEBNOVEL</h3>
        </Link>
      </div>
      <div className={stl.iconContainer}>
        <FacebookIcon />
        <PinterestIcon />
        <InstagramIcon />
      </div>
      <div className={stl.copyrightContainer}>
        <p>© 2023 Webnovel</p>
      </div>
    </div>
  );
};

export default LogoPart;