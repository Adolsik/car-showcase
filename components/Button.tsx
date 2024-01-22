"use client";
import Image from "next/image"
import { MouseEventHandler } from "react";

const Button = (props: {title:string, handleClick?: MouseEventHandler<HTMLButtonElement>, containerStyles?: string, btnType?: 'button' | 'submit' }) => {
  return (
    <button
     disabled={false}
     type={"button"} 
     className={`custom-btn ${props.containerStyles}`}
     onClick={props.handleClick} >
        <span className={`flex-1`}>
            {props.title}
        </span>

    </button>
  )
}

export default Button