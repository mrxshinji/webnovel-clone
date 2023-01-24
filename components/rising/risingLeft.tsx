import stl from "./risingLeft.module.scss";

import Image from "next/image";
import { useState } from "react";
import { LibData } from "../../store/type";

import CustomButton, { BUTTON_TYPE } from "../button/button";

export type RisingLeftProps = {
  title: string;
  importData: LibData[];
};

const RisingLeft = ({ title, importData }: RisingLeftProps) => {
  const [selectFiction, setSelectFiction] = useState(0);

  return (
    <div className={stl.container}>
      <div className={stl.titleWrapper}>
        <h3>{title}</h3>
      </div>
      <div className={stl.content}>
        <div className={stl.selection}>
          <ul>
            {importData.map((item, idx) => {
              return (
                <li key={idx}>
                  <button
                    type='button'
                    aria-label={`Select ${item.title}`}
                    onClick={() => setSelectFiction(idx)}
                  >
                    <div className={stl.imgContainer}>
                      <Image src={item.image} alt={item.title} fill />
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={stl.selected}>
          {importData
            .filter((_, idx) => selectFiction === idx)
            .map((item, idx) => {
              return (
                <div className={stl.selectedContent} key={idx}>
                  <div className={stl.selectedImageContainer}>
                    <Image src={item.image} alt={item.title} fill />
                  </div>
                  <div className={stl.selectedTextContainer}>
                    <h3>{item.title}</h3>
                    <p>{item.genre}</p>
                    <div className={stl.selectedBtn}>
                      <CustomButton
                        label='READ NOW'
                        variant={BUTTON_TYPE.btnPrimary}
                        btnType={BUTTON_TYPE.btnRounded}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RisingLeft;
