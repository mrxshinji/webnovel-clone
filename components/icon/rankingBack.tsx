import { FC, HTMLAttributes } from "react";

type Props = {
  width: number;
  height?: number;
} & HTMLAttributes<HTMLOrSVGElement>;

const RankingBack: FC<Props> = ({ width, height = 44, ...otherProps }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox='0 0 215 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...otherProps}
    >
      <path d='M20 9h195l-12.037 35H20V9z' fill='#FFBC69' />
      <path d='M0 0h204l-12 36H0V0z' fill='url(#paint0_linear)' />
      <path
        d='M108.81 0H204l-12.108 36H90l18.81-36z'
        fill='url(#paint1_linear)'
      />
      <h4>asdsadasd</h4>
      <defs>
        <linearGradient
          id='paint0_linear'
          y1='15.3'
          x2='204'
          y2='15.3'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3B66F5' />
          <stop offset='1' stopColor='#163BCD' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1='199.969'
          y1='23'
          x2='75.027'
          y2='24.805'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3B66F5' />
          <stop offset='1' stopColor='#3B66F5' stopOpacity='.69' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RankingBack;
