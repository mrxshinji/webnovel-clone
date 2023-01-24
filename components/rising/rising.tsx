import stl from "./rising.module.scss";
import RisingLeft from "./risingLeft";
import RisingRight from "./risingRight";

import { LibData } from "../../store/type";

type Props = {
  titleLeft: string;
  titleRight: string;
  importDataLeft: LibData[];
  importDataRight: LibData[];
};

const Rising = ({titleLeft, titleRight, importDataLeft, importDataRight} : Props) => {
  return (
    <section id='rising' className={stl.container}>
      <div className={stl.left}>
        <RisingLeft title={titleLeft} importData={importDataLeft} />
      </div>
      <div className={stl.right}>
        <RisingRight title={titleRight} importData={importDataRight} />
      </div>
    </section>
  );
};

export default Rising;
