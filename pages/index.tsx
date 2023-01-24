import Head from "next/head";

import FrontLayout from "../components/layout/frontLayout";
import { ReactElement } from "react";
import WeeklyBook from "../components/weeklyBook/weeklyBook";
import Featured from "../components/featured/featured";
import Rankings from "../components/ranking/rankings";
import Potential from "../components/potential/potential";
import Rising from "../components/rising/rising";
import Original from "../components/original/original";

import data from "../lib/weeklyFeatured2.json";
import PopularTag from "../components/popularTags/popularTag";

const Home = () => {
  return (
    <>
      <WeeklyBook />
      <Featured />
      <Rankings />
      <Potential title="Potential Starlet" data={data} />
      <Rising
        titleLeft='Rising Fictions'
        importDataLeft={data}
        titleRight='Cheering Reads'
        importDataRight={data}
      />
      <Original />
      <Rising
        titleLeft='New Arrivals'
        importDataLeft={data}
        titleRight='Editor`s Choice'
        importDataRight={data}
      />
      <Potential title="Completed Novel" data={data} />
      <PopularTag />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};

export default Home;
