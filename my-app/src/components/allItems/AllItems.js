import "./allItems.css";

function AllItems(props) {
  return (
    <div className="container">
      <div className="allItemsContainer">
        {props.items.map((item) => {
          return (
            <div className="itemContainer">
              <img className="productImg" src={item.image} />
              <h2 className="productTitle">{item.title}</h2>
              <h2 className="productPrice">£{item.price}</h2>
              <p className="productDesc">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllItems;
