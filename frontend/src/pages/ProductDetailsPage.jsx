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
  const { id } = useParams();
  console.log(id, productData);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (productData?.length && id) {
      const data = productData.find((i) => i?.id == id);
      setData(data);
    }
  }, [id, productData]);
  console.log("data>>>", data);
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
