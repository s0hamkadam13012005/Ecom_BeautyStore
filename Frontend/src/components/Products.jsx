import Product from "./Product";

const Products = () => (
  <div className="flex flex-wrap mx-3  gap-6 justify-center">
    <Product img="/serum.jpg" />
    <Product img="/serum1.jpg" />
    <Product img="/lotion1.jpg" />
    <Product img="/lotion2.jpg" />
  </div>
);

export default Products;
