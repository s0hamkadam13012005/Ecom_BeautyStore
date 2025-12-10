import StarRatings from "react-star-ratings";
export const showAverage = (p) => {
  
  if (p && p.ratings) {
    let ratingsArray = p && p.ratings;

    let total = [];

    let length = ratingsArray.length;
    ratingsArray.map((r) => total.push(r.star));
    let totalReduced = total.reduce((p, n) => p + n, 0);
    let highest = length * 5;
    let result = (totalReduced * 5) / highest;


      console.log("RESULT:", result);
      console.log("RATINGS:", ratingsArray);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <span>
          <StarRatings
            starSpacing="2px"
            starRatedColor="#d1411e"
            starDimension="18px"
            rating={result}
            numberOfStars={5}
            editing={false}
          />
          ({length})
        </span>
      </div>
    );
  }
};
