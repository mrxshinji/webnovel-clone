import { ReactNode } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

type Props = {
  children: ReactNode;
};

const FrontLayout = ({ children }: Props) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default FrontLayout;
