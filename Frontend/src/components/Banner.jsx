import React from 'react'

const Banner = () => {
  return (
    <div className="relative bg-[url('/beautybanner5.jpg')] bg-no-repeat bg-cover bg-center h-[75vh] px-[200px]">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col text-white w-[50%] pt-[10%]">
        <span className="text-[30px] mt-3">Your skin, Our pride!</span>
        <h1 className="text-[38px] mt-3">
          LET`S MAKE YOUR SKIN FLOURISH WITH OUR PRODUCTS
        </h1>
        <div className="flex items-center mt-[20px]">
          <button className="bg-[#e48bcd] p-[10px] w-[200px] text-white cursor-pointer mr-9">
            Shop Now
          </button>
          <button className="bg-gray-500 p-[10px] w-[200px] text-white cursor-pointer">
            CALL: +(789) 865 354
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;