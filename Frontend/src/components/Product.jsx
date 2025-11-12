import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Product = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] m-[20px] bg-cover">
      <img src="/serum1.jpg" alt="Serum" className="h-[400px] w-[300px]" />
      <h2 className="text-[18px] font-semibold text-center w-[300px]">
        Rosehip Seed Argan Sweet Almond & Vitamin E Oil - Anti-aging
      </h2>
      <span className="text-[18px] font-semibold flex items-center justify-center">
        $100
      </span>

      <div className="flex justify-center items-center mt-2">
        <Rating value={2.4} readOnly style={{ maxWidth: 120 }} />
      </div>
    </div>
  );
};

export default Product;
