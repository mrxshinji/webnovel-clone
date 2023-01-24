import stl from "./button.module.scss";

export const BUTTON_TYPE = {
  btnPrimary: "btnPrimary",
  btnSecondary: "btnSecondary",
  btnRounded: "btnRounded",
};

export type ButtonProps = {
  label: string;
  variant: string;
  btnType: string;
  customClass?: string;
};

const CustomButton = ({
  label,
  variant = BUTTON_TYPE.btnPrimary,
  btnType,
  customClass = "",
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`${stl.btn} ${stl[variant]} ${stl[btnType]} ${customClass}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default CustomButton;
