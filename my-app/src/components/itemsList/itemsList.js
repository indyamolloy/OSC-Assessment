import "./itemsList.css";
import spinner from "./Spinner-1.9s-241px.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function ItemsList({ items, category, handleAdd }) {
  //Filter out only items with rating > 4 for home page
  const featuredItems = items.filter((item) => {
    if (category === "rating") {
      return item.rating.rate > 4;
    } else if (category === "womens") {
      return item.category === "women's clothing";
    } else if (category === "mens") {
      return item.category === "men's clothing";
    } else if (category === "jewelery") {
      return item.category === "jewelery";
    } else if (category === "electronics") {
      return item.category === "electronics";
    } else {
      return null;
    }
  });
  console.log(items);

  return (
    <div>
      <div className="container">
        <div className="allItemsContainer">
          {items.length > 0 ? (
            featuredItems.map((item) => {
              return (
                <div className="itemContainer" key={item.id}>
                  <img className="productImg" src={item.image} alt="product" />
                  <h2 className="productTitle">{item.title}</h2>
                  <h2 className="productPrice">
                    £{item.price}{" "}
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                  </h2>
                  <p className="productDesc">
                    {item.description.substring(0, 100)}...
                  </p>
                  <button
                    className="addBtn"
                    onClick={() =>
                      handleAdd(item.id, item.image, item.title, item.price)
                    }
                  >
                    ADD TO CART
                  </button>
                </div>
              );
            })
          ) : (
            <div className="loadingScreen">
              <img src={spinner} alt="loading spinner" width="250" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemsList;
