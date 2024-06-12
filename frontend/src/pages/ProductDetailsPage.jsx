// import React, { useEffect, useState } from "react";
// import Footer from "../components/Layout/Footer";
// import ProductDetails from "../components/Products/ProductDetails";
// import SuggestedProduct from "../components/Products/SuggestedProduct.jsx";
// import Header from "../components/Layout/Header";
// import { useParams } from "react-router-dom";
// import { productData } from "../static/data";

// const ProductDetailsPage = () => {
//   const { name } = useParams();
//   console.log("Product name: " + name);
//   const [data, setData] = useState(null);
//   const productName = name.replace(/-/g, " ");

//   useEffect(() => {
//     const data = productData.find(
//       (i) => i.name.toLowerCase() === productName.toLowerCase()
//     );
//     console.log(data);
//     setData(data);
//   }, [productName]);
//   console.log(data);

//   return (
//     <div>
//       <Header />
//       <ProductDetails data={data} />
//       {data && <SuggestedProduct data={data} />}
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetailsPage;

import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct.jsx";
import Header from "../components/Layout/Header";
import { useParams } from "react-router-dom";
import { productData } from "../static/data";

const ProductDetailsPage = () => {
  const { name } = useParams();
  console.log("Product name from URL:", name);

  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");
  console.log("Formatted product name:", productName);

  useEffect(() => {
    const foundData = productData.find(
      (i) => name.toLowerCase() === productName.toLowerCase()
    );
    console.log("Found product data:", foundData);
    setData(foundData);
  }, [productName]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
