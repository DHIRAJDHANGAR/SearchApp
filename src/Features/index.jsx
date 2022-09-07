import { useState, useMemo, useEffect } from "react";
import { getAllProduct } from "./GetData/routes";
import {
  Card,
  CardCategory,
  CardContainer,
  CardImage,
  CardTitle,
} from "./style";

const ProductDashboard = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [copyProduct, setCopyProduct] = useState([]);
  const [favList, setFavList] = useState([]);
  //click on input filled show the product list
  const handleInputClick = async () => {
    const productResponse = await getAllProduct();
    setProduct(productResponse);
    setCopyProduct(productResponse);
  };
  //handle search bar
  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredResult = copyProduct.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );
    setProduct(filteredResult);
  };
  //handle like and unlike button
  const handleFavData = (item) => {
    if (item.isActive === true) {
      item.isActive = false;
      setProduct([...product, item]);
      return;
    }
    if (item.isActive === false) {
      item.isActive = true;
      setProduct([...product, item]);
      return;
    }
    item.isActive = true;
    setProduct([...product, item]);
  };

  return (
    <>
      <div>
        <input
          value={search}
          onClick={handleInputClick}
          onChange={handleSearch}
          placeholder="Search anything..."
        />
      </div>
      <CardContainer>
        {product.map((item) => {
          return (
            //   {/* <Link to={`/details/${item.id}`}>{item.name}</Link> */}
            <Card key={item.id}>
              <div
                onClick={() => {
                  handleFavData(item);
                }}
              >
                {item.isActive === true ? (
                  <img src="/heart (2).svg" alt="Like" width={40} />
                ) : (
                  <img src="/heart (1).svg" alt="Unlike" width={40} />
                )}
              </div>
              <CardImage src={item.image}></CardImage>
              <CardTitle>{item.title}</CardTitle>
              <CardCategory>{item.category}</CardCategory>
            </Card>
          );
        })}
      </CardContainer>
    </>
  );
};
export default ProductDashboard;
