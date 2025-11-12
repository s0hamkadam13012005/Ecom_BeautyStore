const Category = () => {
  return (
    <div className="flex items-center m-3 ">
      <div className=" relative bg-[url('/serum.jpg')] bg-center bg-slate-300 bg-cover bg-no-repeat h-[500px] w-[400px] flex items-center justify-center m-[20px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white font-semibold text-[30px]">Serums</h1>
          </div>
        </div>
      </div>

      <div className=" relative bg-[url('/serum1.jpg')] bg-center bg-slate-300 bg-cover bg-no-repeat h-[500px] w-[400px] flex items-center justify-center m-[20px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white font-semibold text-[30px]">Toners</h1>
          </div>
        </div>
      </div>

      <div className=" relative bg-[url('/lotion.jpg')] bg-center bg-slate-300 bg-cover bg-no-repeat h-[500px] w-[400px] flex items-center justify-center m-[20px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white font-semibold text-[30px]">Lotions</h1>
          </div>
        </div>
      </div>

      <div className=" relative bg-[url('/foundation.jpg')] bg-center bg-slate-300 bg-cover bg-no-repeat h-[500px] w-[400px] flex items-center justify-center m-[20px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white font-semibold text-[30px]">
              Foundations
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
