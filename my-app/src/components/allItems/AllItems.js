import "./allItems.css";

function AllItems(props) {
  return (
    <div>
      <h1>All Items</h1>
      <div className="container">
        <div className="allItemsContainer">
          {props.items.map((item) => {
            return (
              <div className="itemContainer">
                <img className="productImg" src={item.image} />
                <h2 className="productTitle">{item.title}</h2>
                <h2 className="productPrice">£{item.price}</h2>
                <p className="productDesc">
                  {item.description.substring(0, 100)}...
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllItems;
