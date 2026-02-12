import { brands } from "../constants/brands";

const Brands = () => {

  return (
    <div
      className="
        grid grid-cols-3 gap-6
        sm:grid-cols-3
        md:flex md:flex-wrap md:justify-between
        items-center
        py-10 px-6 md:px-12 mx-auto
        text-gray-400 grayscale opacity-70
      "
    >
      {brands.map((brand, index) => (
        <div
          key={index}
          className="text-xl font-bold flex items-center justify-center"
        >
          {brand}
        </div>
      ))}
    </div>
  );
};

export default Brands;
