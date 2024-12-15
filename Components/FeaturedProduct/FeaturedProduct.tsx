'use client'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';

import Image from "next/image";
import ProductData from "@/app/ProductData";



const FeaturedProduct = () => {
  useEffect(() => {
    AOS.init({ duration: 1000});
  }, []);
  return (
    <>
        <div
        className="w-full  h-auto pt-20 font-[700] px-4 xl:px-0"
      
      >
        <h1 className="font-josefin max-w:text-[32px] text-[42px] text-[#1A0B5B] text-center">
          Featured Products
        </h1>

        <div
          className="w-full h-full flex justify-center gap-x-[30px] md:gap-x-[45px] min3:gap-x-[35px] gap-y-[100px] lg:gap-[28px] flex-wrap lg:flex-nowrap pt-6"
          
          
        >
                    {/* box1 */}
          {ProductData.map(
            ({
              id,
              name,
              price,
              mainImage,
              cartIcon,
              heartIcon,
              colorImage1,
              colorImage2,
              searchIcon,
              imageCode,
              SearchName,
              HeartName,
              cartName,
              nameOfChair,
            }) => (
              <div
                key={id}
                className=" w-[350px]  min3:w-[300px] bg-[#F6F7FB] shadow-lg "
                 data-aos="fade-up"
                
                 
              >
                <div className="group relative  w-full h-[60%] flex justify-center items-center cursor-pointer ">
                  <Image
                    src={mainImage}
                    alt={name}
                    width={190}
                    height={180}
                     className='group-hover:scale-110 transition-all duration-300 ease-in-out'
                  ></Image>
                  <div className="absolute top-2 left-2 flex object-cover">
                    <Image
                      src={heartIcon}
                      alt={cartName}
                      className="mr-2"
                      width={15}
                      height={40}
                    ></Image>
                    <Image
                      src={searchIcon}
                      alt={HeartName}
                      className="mr-2"
                      width={15}
                      height={40}
                    ></Image>
                    <Image
                      src={cartIcon}
                      alt={SearchName}
                      className="mr-2"
                      width={25}
                      height={40}
                    ></Image>
                  </div>
                </div>

                <div className="group pb-6 p-4 h-[150px] w-full  bg-white hover:bg-[#1A0B5B] hover:text-[#ffff]  cursor-pointer flex flex-col mt-1 mb-1 items-center gap-2 shadow-lg ">
                  <h1 className="font-poppins text-[#FB2E86] text-inherit font-lato text-[18px] font-[700]">
                    {nameOfChair}
                  </h1>

                  <div className="mt-1 mb-1 inline-block group-hover:hidden">
                    <Image
                      src={colorImage1}
                      alt="div colors"
                      width={50}
                      height={50}
                    ></Image>
                  </div>

                  <div className="hidden group-hover:inline">
                    <Image
                      src={colorImage2}
                      alt="div colors"
                      width={50}
                      height={50}
                    ></Image>
                  </div>

                  <div className="flex flex-col items-center w-full">
                    <h3 className=" text-[#1A0B5B] text-inherit  font-[400] font-josefin">
                      {imageCode}
                    </h3>
                    <h3 className=" text-[#1A0B5B] text-inherit  font-[400] mb-2 mt-2 font-lato ">
                      {price}
                    </h3>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="w-full bg-white h-5 flex justify-center mt-16">
        <Image
          src="/images/scroller.svg"
          alt="scroller"
          width={100}
          height={40}
        ></Image>
      </div>
    </>
  );
};

export default FeaturedProduct;
