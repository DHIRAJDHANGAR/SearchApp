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
  const [favList, setFavList] = useState([]);
  const [isActive, setIsActive] = useState(true);

  const handleInputClick = async () => {
    const productResponse = await getAllProduct();
    setProduct(productResponse);
  };

  const filteredproduct = useMemo(() => {
    const filteredResult = product.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );
    return filteredResult;
  }, [search, product]);

  const addToFavList = (data) => {
    const hasElementInFav = favList.some((val) => val.id === data.id);
    if (hasElementInFav) {
      return;
    }
    setFavList((prv) => {
      return [...prv, data];
    });
  };
  const handleFavData = () => {
    console.log("LN41", isActive);
    return isActive === true ? setIsActive(false) : setIsActive(true);
  };
  console.log("LN44", isActive);

  return (
    <>
      <div>
        <input
          value={search}
          onClick={handleInputClick}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search anything..."
        />
      </div>
      <CardContainer>
        {filteredproduct.map((item) => {
          return (
            //   {/* <Link to={`/details/${item.id}`}>{item.name}</Link> */}
            <Card key={item.id}>
              <CardImage src={item.image}></CardImage>
              <CardTitle>{item.title}</CardTitle>
              <CardCategory>{item.category}</CardCategory>
              <button
                onClick={() => {
                  addToFavList(item);
                }}
              >
                Fav
              </button>
              <button value={item} onClick={handleFavData}>
                LIKE
              </button>
            </Card>
          );
        })}
      </CardContainer>
    </>
  );
};
export default ProductDashboard;
