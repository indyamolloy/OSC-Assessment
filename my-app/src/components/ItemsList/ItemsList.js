import "./itemsList.css";
import spinner from "./Spinner-1.9s-241px.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as outlineHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

function ItemsList({
  items,
  category,
  handleAdd,
  handleAddToWishlist,
  wishlist,
}) {
  //Filter out only items with rating > 4 for home page
  const itemsList = items.filter((item) => {
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

  //return list of items that are in the wishlist
  function findWishlistItems(array1, array2) {
    if (array1 && array2) {
      return array1.filter((object1) => {
        return array2.some((object2) => {
          return object1.id === object2.id;
        });
      });
    }
  }
  //array of items id in the wishlist (to conditionally style)
  const wishlistItems = findWishlistItems(items, wishlist);
  const wishlistArray = wishlistItems && wishlistItems.map((item) => item.id);

  return (
    <div>
      <div className="container">
        <div className="allItemsContainer">
          {items.length > 0 ? (
            itemsList.map((item) => {
              return (
                <div className="itemContainer" key={item.id}>
                  <img className="productImg" src={item.image} alt="product" />
                  <h2 className="productTitle">{item.title}</h2>
                  <h2 className="productPrice">
                    £{item.price}{" "}
                    <FontAwesomeIcon
                      style={{
                        color: "red",
                      }}
                      className="heartItem"
                      icon={
                        wishlistArray && wishlistArray.includes(item.id)
                          ? solidHeart
                          : outlineHeart
                      }
                      onClick={() =>
                        handleAddToWishlist(
                          item.id,
                          item.image,
                          item.title,
                          item.price
                        )
                      }
                    />
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
