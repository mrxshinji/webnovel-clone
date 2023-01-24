import stl from "./weeklyBook.module.scss";

import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";

import data from "../../lib/book.json";
import articlesData from "../../lib/articles.json";

import Article from "./article";

const labelMap = [
  {
    value: 0,
    label: "first item",
  },
  {
    value: 1,
    label: "second item",
  },
  {
    value: 2,
    label: "third item",
  },
];

const WeeklyBook = ({}) => {
  const [itemCarousel, setItemCarousel] = useState(0);
  const [timerCount, setTimerCount] = useState(0);

  const handleItemCarousel = (e: MouseEvent<HTMLElement>) => {
    const { value } = e.target as HTMLInputElement;
    setItemCarousel(parseInt(value));
  };

  useEffect(() => {
    const nextItemCarousel = () => {
      if (itemCarousel < 2 && itemCarousel >= 0) {
        setItemCarousel((prev) => prev + 1);
      } else {
        setItemCarousel(0);
      }
    };

    const timer = setInterval(() => {
      setTimerCount((prev) => prev + 1);
    }, 1000);

    if (timerCount === 6) {
      nextItemCarousel();
      setTimerCount(0);
    }

    return () => clearInterval(timer);
  }, [itemCarousel, timerCount]);

  return (
    <section id='weeklyBook' className={stl.sectionContainer}>
      <div className={stl.sl}>
        <h1>Weekly Book</h1>
        <div className={stl.labelContainer}>
          {labelMap.map((item, idx) => {
            return (
              <button
                key={idx}
                className={itemCarousel === item.value ? `${stl.active}` : ""}
                type='button'
                value={item.value}
                onClick={handleItemCarousel}
                aria-label={item.label}
              ></button>
            );
          })}
        </div>
        {data
          .filter((item, idx) => idx === itemCarousel)
          .map((item, idx) => {
            return (
              <Link key={idx} href='/'>
                <div className={stl.itemContainer}>
                  <Image src={item.banner} alt={item.title} fill />
                </div>
              </Link>
            );
          })}
      </div>
      <div className={stl.sr}>
        <h1>Meet Webnovel</h1>
        <div className={stl.articlesContainer}>
          {articlesData.map((article, idx) => {
            return (
              <Article
                key={idx}
                title={article.title}
                subtitle={article.subtitle}
                banner={article.banner}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeeklyBook;
