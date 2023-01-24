import stl from "./footer.module.scss";
import FooterLinks from "./footerLinks";
import LogoPart from "./logoPart";

import teamLinks from "../../lib/links/teamsLink.json";
import contactLinks from "../../lib/links/contacts.json";
import resourcesLinks from "../../lib/links/resources.json";
import referralLinks from "../../lib/links/referrals.json";

const Footer = () => {
  return (
    <div className={stl.container}>
      <div className={stl.innerContainer}>
        <LogoPart />
        <FooterLinks title='TEAMS' links={teamLinks} />
        <FooterLinks title='CONTACTS' links={contactLinks} />
        <FooterLinks title='RESOURCES' links={resourcesLinks} />
        <FooterLinks title='REFERRALS' links={referralLinks} />
      </div>
    </div>
  );
};

export default Footer;
