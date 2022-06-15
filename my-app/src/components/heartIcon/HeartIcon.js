import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function HeartIcon({ handleAddToWishlist, item }) {
  return (
    <div>
      {" "}
      <FontAwesomeIcon
        style={{
          color: item.favourited ? "blue" : "red",
        }}
        className="heartItem"
        icon={faHeart}
        onClick={() =>
          handleAddToWishlist(item.id, item.image, item.title, item.price)
        }
      />
    </div>
  );
}

export default HeartIcon;
