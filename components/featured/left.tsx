import stl from "./left.module.scss";

import Image from "next/image";
import { CSSProperties, useEffect, useState } from "react";
import Link from "next/link";

import weeklyFeaturedData from "../../lib/weeklyFeatured.json";

const FeaturedLeft = () => {
  const [leftImg, setLeftImg] = useState(0);
  const [ctrImg, setCtrImg] = useState(1);
  const [rightImg, setRightImg] = useState(2);

  const [selectedImg, setSelectImg] = useState(0);

  const [timerCount, setTimerCount] = useState(0);

  useEffect(() => {
    const carouselMovement = () => {
      setLeftImg((prev) => handleBack(prev));
      setCtrImg((prev) => handleBack(prev));
      setRightImg((prev) => handleBack(prev));
      return;
    };

    const timer = setInterval(() => {
      setTimerCount((prev) => prev + 1);
    }, 1000);

    if (timerCount === 5) {
      carouselMovement();
      setTimerCount(0);
    }

    return () => clearInterval(timer);
  }, [timerCount, leftImg]);

  useEffect(() => {
    if (leftImg === 1) {
      setSelectImg(0);
    }
    if (ctrImg === 1) {
      setSelectImg(1);
    }
    if (rightImg === 1) {
      setSelectImg(2);
    }

    return () => setSelectImg(0);
  }, [leftImg, ctrImg, rightImg]);

  const backImg =
    "https://img.webnovel.com/bookcover/23119158205041105/150/150.jpg?coverUpdateTime=1672436689848&imageMogr2/quality/80";

  const transform = [
    {
      "--i": "40%",
      "--s": 0.8,
    } as CSSProperties,
    {
      "--i": "120%",
      "--s": 1,
      zIndex: 2,
    } as CSSProperties,
    {
      "--i": "260%",
      "--s": 0.8,
    } as CSSProperties,
  ];

  const handleBack = (state: number): number => {
    if (state === 0) {
      return 2;
    } else {
      return state - 1;
    }
  };
  const handleNext = (state: number): number => {
    if (state === 2) {
      return 0;
    } else {
      return state + 1;
    }
  };

  const handleMovement = (state: number): void => {
    if (state === 0) {
      setLeftImg((prev) => handleBack(prev));
      setCtrImg((prev) => handleBack(prev));
      setRightImg((prev) => handleBack(prev));
      return;
    }
    if (state === 2) {
      setLeftImg((prev) => handleNext(prev));
      setCtrImg((prev) => handleNext(prev));
      setRightImg((prev) => handleNext(prev));
      return;
    }
  };

  return (
    <div className={stl.left}>
      <div className={stl.featImgContainer}>
        <div
          className={stl.backImgContainer}
          style={{ backgroundImage: `url(${backImg})` }}
        />

        <div
          className={stl.leftImg}
          style={transform[leftImg]}
          onClick={() => handleMovement(leftImg)}
        >
          <Image
            className={stl.featuredImg}
            src={weeklyFeaturedData[0].image}
            alt={weeklyFeaturedData[0].title}
            fill
          />
        </div>

        <div
          className={stl.centerImg}
          style={transform[ctrImg]}
          onClick={() => handleMovement(ctrImg)}
        >
          <Image
            className={stl.featuredImg}
            src={weeklyFeaturedData[1].image}
            alt={weeklyFeaturedData[0].title}
            fill
          />
        </div>
        <div
          className={stl.rightImg}
          style={transform[rightImg]}
          onClick={() => handleMovement(rightImg)}
        >
          <Image
            className={stl.featuredImg}
            src={weeklyFeaturedData[2].image}
            alt={weeklyFeaturedData[0].title}
            fill
          />
        </div>
      </div>
      {weeklyFeaturedData
        .filter((item, idx) => idx === selectedImg)
        .map((item, idx) => {
          return (
            <div key={idx} className={stl.featText}>
              <h4>
                <Link href='/'>{item.title}</Link>
              </h4>
              <div className={stl.subText}>
                <p>
                  <Link href='/'>{item.genre}</Link>
                </p>
                <p className={stl.subTextDivider}>.</p>
                <strong>{item.author}</strong>
              </div>
              <div className={stl.sypnosis}>
                {item.sypnosis.substring(0, 340)}...
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FeaturedLeft;
