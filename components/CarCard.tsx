"use client";

import { useState } from "react"
import Image from "next/image";
import Button from '@/components/Button'

const CarCard = (props: {city_mpg: number, class: string, combination_mpg: number, cylinders: number; drive: string, fuel_type: string, highway_mpg: number, make: string, model: string, transmission: string, year: number  }) => {
  return (
    <div className="car-card group ">
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {props.make} {props.model}
            </h2>
        </div>
        <div className="relative w-full h-40 my-3 object-contain">
            <Image src={"/public/hero.png"} alt="car model" fill priority className="object-contain" />
        </div>
        <div className="relative flex w-full mt-2">
            <div className="flex group:hover-invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={'/steering-wheel.svg'} width={20} height={20} alt="steering wheel" />
                    <p className="text-[14px]">{props.transmission === 'a' ? 'Automatic': 'Manual'}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={'/tire.svg'} width={20} height={20} alt="tire" />
                    <p className="text-[14px]">{props.drive.toUpperCase()}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={'/gas.svg'} width={20} height={20} alt="steering wheel" />
                    <p className="text-[14px]">{props.city_mpg} MPG</p>
                </div>
            </div>
            <div className="car-card__btn-container">
                <Button title="View More" containerStyles="w-full py-[16px] rounded-full bg-primary-blue hover:text-white hover:text-[14px] hover:leading-[17px] hover:font-bold" rightIcon='/right-arrow.svg' handleClick={()=>setIsOpen(true)}>

                </Button>
            </div>
        </div>
    </div>
  )
}

export default CarCard