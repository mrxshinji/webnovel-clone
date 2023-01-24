import stl from "./header.module.scss";

import Browse from "../../public/icon/browse.svg";
import Ranking from "../../public/icon/ranking.svg";
import Create from "../../public/icon/Create.svg";
import Contest from "../../public/icon/contest.svg";
import Search from "../../public/icon/search.svg";

import Image from "next/image";

import CustomButton, { BUTTON_TYPE } from "../button/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className={stl.container}>
      <div className={stl.navWrapper}>
        <div className={stl.fl}>
          <div className={stl.logoContainer}>
            <Image
              src='https://www.yueimg.com/en/images/logo2x.73b79370.png'
              width={40}
              height={40}
              alt='Webnovel logo'
            />
          </div>
          <nav className={stl.navMenu}>
            <ul>
              <li>
                <Link href='/browse'>
                  <Browse /> <strong>Browse</strong>
                </Link>
              </li>
              <li>
                <Ranking /> <strong>Ranking</strong>
              </li>
              <li>
                <Create /> <strong>Create</strong>
              </li>
              <li>
                <Contest /> <strong>Contest</strong>
              </li>
            </ul>
          </nav>
        </div>
        <div className={stl.fr}>
          <div className={stl.searchContainer}>
            <form>
              <label htmlFor='front_search'>
                <Search />
              </label>
              <input
                id='front_search'
                type='text'
                placeholder='Search...'
                autoComplete='true'
              />
            </form>
          </div>
          <nav className={stl.navMenu}>
            <ul>
              <li>Library</li>
              <li>Forum</li>
            </ul>
          </nav>
          <CustomButton
            label='SIGN IN'
            variant={BUTTON_TYPE.btnPrimary}
            btnType={BUTTON_TYPE.btnRounded}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
