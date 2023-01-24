import { MouseEvent, useState } from "react";
import { createImportSpecifier } from "typescript";
import stl from "./browseGenre.module.scss";

const BrowseGenre = ({}) => {
  const [dropdown, setDropdown] = useState(false);
  const [lead, setLead] = useState("female");

  const handleDropwdown = () => {
    setDropdown((prev) => !prev);
    return;
  };

  const handleLead = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setLead(value);
    return;
  };

  return (
    <div className={stl.container}>
      <button onClick={handleDropwdown}>
        <div className={stl.titleWrapper}>
          <h3>Genre of Novels</h3>
        </div>
      </button>
      {dropdown && (
        <div className={stl.dropdownContainer}>
          <div className={stl.categoriesContainer}>
            <button type='button' value='male' onClick={handleLead}>
              MALE LEAD
            </button>
            <button type='button' value='female' onClick={handleLead}>
              FEMALE LEAD
            </button>
          </div>
          <div className={stl.tagContainer}>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowseGenre;
