import StarRatings from "react-star-ratings";

const Product = ({ img, rating = 3 }) => {
  return (
    <div className="flex flex-col items-center w-[300px] bg-white rounded-lg shadow-sm p-4">
      <img
        src={img}
        className="h-[400px] w-full object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold text-center mb-2">
        Rosehip Seed Argan Sweet Almond & Vitamin E Oil - Anti-aging
      </h2>
      <span className="text-lg font-semibold mb-2">$100</span>
      <StarRatings
        numberOfStars={5}
         rating={rating.star}
         isSelectable={true}
        starRatedColor="yellow"
        starDimension="30px"
        starSpacing="2px"
      />
    </div>
  );
};

export default Product;
