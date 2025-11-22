import { FaMinus, FaPlus, FaTrash, FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="min-h-screen flex gap-4 p-6">
      <h1 className="font-semibold text-[18px] mb-6 ">Shopping Cart</h1>

      {/*LEFT SIDE  */}
      <div className="flex-1 shadow-md rounded-lg bg-white p-6 ">
        <h2 className="font-semibold text-[18px]">Your Items</h2>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center border-b pb-4 justify-between border-gray-200">
            <img
              src="/lotion1.jpg"
              className="h-32 w-32 rounded-md object-cover"
            />

            <div className="flex-1  ml-4 ">
              <h3 className="font-semibold text-[18px]">
                Mekis Grapeseed & Sweet Almond Oil – 30Ml, For Dull
              </h3>

              <p className="text-gray-600 mb-2">
                What’s Good about Mekis Sweet Almond Oil with Grape seed combo
                for your Skin and Hair? Sweet almond
              </p>

              <div className="flex item-center my-5 p-4">
                <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />

                <span>1</span>

                <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />
              </div>
            </div>

            <div className=" flex flex-col text-right">
              <span className="font-bold text-xl mb-6 ">$90</span>
              <FaTrashAlt className="text-red-500 cursor-pointer inline-block ml-2" />
            </div>
          </div>

          <div className="flex items-center border-b pb-4 justify-between border-gray-200">
            <img
              src="/lotion.jpg"
              className="h-32 w-32 rounded-md object-cover"
            />

            <div className="flex-1  ml-4 ">
              <h3 className="font-semibold text-[18px]">
                Mekis Grapeseed & Sweet Almond Oil – 30Ml, For Dull
              </h3>

              <p className="text-gray-600 mb-2">
                What’s Good about Mekis Sweet Almond Oil with Grape seed combo
                for your Skin and Hair? Sweet almond
              </p>

              <div className="flex item-center my-5 p-4">
                <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />

                <span>1</span>

                <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />
              </div>
            </div>

            <div className=" flex flex-col text-right">
              <span className="font-bold text-xl mb-6 ">$90</span>
              <FaTrashAlt className="text-red-500 cursor-pointer inline-block ml-2" />
            </div>
          </div>
          <button className="bg-red-500 p-3 w-[200px] mt-4 rounded-md text-white font-semibold">
            Clear All
          </button>
        </div>
      </div>

      <div className="">{/* RIGHT SIDE  */}</div>

      <div className="w-80 shadow-md rounded-lg bg-white p-6 h-[300px] gap-y-4">
        <h2 className="font-semibold text-[18px] mb-4">Order Summary</h2>

        <div className="flex  flex-col space-y-4 ">
          <div className="flex justify-between">
            <span className="font-medium text-lg">Subtotal</span>
            <span className="font-medium text-lg">$ 180</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-lg">Shipping</span>
            <span className="font-medium text-lg">$ 20</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-lg">Total</span>
            <span className="font-medium text-lg">$ 200</span>
          </div>

          <button className="bg-[#ef93db] p-3 w-full rounded-md text-white font-semibold">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

//23
