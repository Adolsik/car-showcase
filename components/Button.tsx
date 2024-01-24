"use client";
import Image from "next/image";
import { MouseEventHandler } from "react";

const Button = (props: {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${props.containerStyles}`}
      onClick={props.handleClick}
    >
      <span className={`flex-1 ${props.textStyles}`}>{props.title}</span>
      {props.rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image
            src={props.rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
