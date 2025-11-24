import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

const Order = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* mx-auto takes this inner card to the center of the screen */}
      <div className="bg-white max-w-4xl mx-auto rounded-lg shadow-md p-6">
        <div className="text-center mb-8">
          <FaCheckCircle className="text-green-500 mx-auto mb-4 " size={50} />
          <h1 className="font-bold text-3xl tracking-wider ">
            Thank you for your orders!
          </h1>
          <span className="block mb-4 ">
            Here are the details of your order:
          </span>
        </div>

        <div className="  mb-8">
          <h2 className="font-semibold text-2xl">Order #1</h2>
          <div className="space-y-4 ">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Ordered Items</h3>

              <div className="flex flex-col ">
                {/* ordered items map here */}
                <div className="mb-4">
                  <div className="flex justify-between pb-4 border-b border-gray-300">
                    <img
                      src="lotion.jpg"
                      alt=""
                      className="w-24 h-24 rounded-lg"
                    />

                    <div className="flex-1 ml-4">
                      <h4 className="text-lg font-semibold">
                        Mekis Grapeseedd & Sweey Almond Oil-300ml For Dull
                      </h4>
                      <p className="text-gray-600 text-normal font-normal">6</p>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold">$120</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h5 className="my-3">Rate this product</h5>

                    <Rating value={2.4} readOnly style={{ maxWidth: 120 }} />

                    <textarea
                      name=""
                      id=""
                      placeholder="leave a message"
                      className="p-[10px] w-[300px] mt-3"
                    ></textarea>

                    <button className="bg-[#1e1e1e]  w-[200px] p-[5px] text-white mt-3 ">
                      Submit
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between pb-4 border-b border-gray-300">
                    <img
                      src="lotion.jpg"
                      alt=""
                      className="w-24 h-24 rounded-lg"
                    />

                    <div className="flex-1 ml-4">
                      <h4 className="text-lg font-semibold">
                        Mekis Grapeseedd & Sweey Almond Oil-300ml For Dull
                      </h4>
                      <p className="text-gray-600 text-normal font-normal">6</p>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold">$120</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h5 className="my-3">Rate this product</h5>

                    <Rating value={2.4} readOnly style={{ maxWidth: 120 }} />

                    <textarea
                      name=""
                      id=""
                      placeholder="leave a message"
                      className="p-[10px] w-[300px] mt-3"
                    ></textarea>

                    <button className="bg-[#1e1e1e]  w-[200px] p-[5px] text-white mt-3 ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold text-xl">Shipping Information</h3>
          <p className="text-gray-600">sohamkadan1844@gmail.com</p>
          <p className="text-gray-600">+91 9321977568</p>
          <p className="text-gray-600">soham kadam</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold text-xl">Payment Method</h3>
          <p className="text-gray-600">VISA</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold text-xl">Order summary</h3>

          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Subtotal:</span>
            <span className="text-lg font-semibold">$720</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Shipping:</span>
            <span className="text-lg font-semibold">$10</span>
                  </div>
                  
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Total:</span>
            <span className="text-lg font-semibold">$730</span>
          </div>
              </div>
              
              <div className="mt-8 text-center">
                  <button className="bg-[#ef93db] rounded-lg p-3 text-white font-semibold">Continue Shopping</button>
              </div>
      </div>
    </div>
  );
};

export default Order;
