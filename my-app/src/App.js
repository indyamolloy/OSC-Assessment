import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home/Home.js";
import Womens from "./pages/womens/Womens.js";
import Mens from "./pages/mens/Mens.js";
import Accessories from "./pages/accessories/Accessories.js";
import HomeProducts from "./pages/homeProducts/HomeProducts.js";
import Navbar from "./components/navbar/Navbar.js";
import SearchNavbar from "./components/searchNavbar/SearchNavbar.js";
import Footer from "./components/footer/Footer.js";
import Wishlist from "./pages/wishlist/Wishlist.js";

function App() {
  const [items, setItems] = useState([]);
  const [basket, setBasket] = useState([]);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  const [itemsSearched, setItemsSearched] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  //fetching data from api and setting state to object
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://eco-store-be.herokuapp.com/products"
      );
      const data = await response.json();
      setItems(data.payload);
    };
    fetchData();
  }, [setItems, searchInput]);

  //add and increment items in basket
  function handleAdd(id, image, name, price) {
    const inBasket = basket.some((item) => item.id === id);
    if (!inBasket) {
      setBasket([
        ...basket,
        {
          id: id,
          image: image,
          name: name,
          price: Number(price),
          quantity: 1,
        },
      ]);
      setModal(true);
    } else {
      const duplicateItem = basket.find((item) => item.id === id);

      const index = basket.indexOf(duplicateItem);
      setBasket([
        ...basket.slice(0, index),
        {
          ...duplicateItem,
          quantity: duplicateItem.quantity + 1,
        },
        ...basket.slice(index + 1),
      ]);
      setModal(true);
    }
  }

  //decrement number of items in basket
  function handleDecrementQty(id) {
    const clickedItem = basket.find((item) => item.id === id);
    const index = basket.indexOf(clickedItem);
    setBasket([
      ...basket.slice(0, index),
      {
        ...clickedItem,
        quantity: clickedItem.quantity - 1,
      },
      ...basket.slice(index + 1),
    ]);
  }

  //remove button in modal
  function handleRemove(id) {
    const clickedItem = basket.find((item) => item.id === id);
    const index = basket.indexOf(clickedItem);
    setBasket([...basket.slice(0, index), ...basket.slice(index + 1)]);
  }

  function handleRemoveWishlist(id) {
    const clickedItem = wishlist.find((item) => item.id === id);
    const index = wishlist.indexOf(clickedItem);
    setWishlist([...wishlist.slice(0, index), ...wishlist.slice(index + 1)]);
  }

  //open modal
  function handleClick() {
    setModal(!modal);
  }

  //Search for items
  function handleChange(e) {
    //setInput for value to be passed (controlled input)
    setInput(e.target.value);
    //Seach title and description for matching items
    const result = items.filter(
      (item) =>
        item.description.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchInput(result);
  }

  //Search for items when button clicked
  function handleSearch() {
    setSearchedItems(searchInput);
    setItemsSearched(!itemsSearched);
    setInput("");
  }

  function handleCloseModal() {
    setModal(false);
  }

  //Add items to wishlist
  function handleAddToWishlist(id, image, name, price) {
    const inWishlist = wishlist.some((item) => item.id === id);
    if (!inWishlist) {
      setWishlist([
        ...wishlist,
        {
          id: id,
          image: image,
          name: name,
          price: Number(price),
          key: id,
        },
      ]);
    }
  }

  return (
    <BrowserRouter>
      <SearchNavbar
        basket={basket}
        handleClick={handleClick}
        modal={modal}
        handleAdd={handleAdd}
        handleDecrementQty={handleDecrementQty}
        handleRemove={handleRemove}
        handleChange={handleChange}
        handleSearch={handleSearch}
        value={input}
        handleCloseModal={handleCloseModal}
        wishlist={wishlist}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={itemsSearched ? searchedItems : items}
              handleAdd={handleAdd}
              handleAddToWishlist={handleAddToWishlist}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/womens"
          element={
            <Womens
              items={itemsSearched ? searchedItems : items}
              handleAdd={handleAdd}
              handleAddToWishlist={handleAddToWishlist}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/mens"
          element={
            <Mens
              items={itemsSearched ? searchedItems : items}
              handleAdd={handleAdd}
              handleAddToWishlist={handleAddToWishlist}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/accessories"
          element={
            <Accessories
              items={itemsSearched ? searchedItems : items}
              handleAdd={handleAdd}
              handleAddToWishlist={handleAddToWishlist}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/homeProducts"
          element={
            <HomeProducts
              items={itemsSearched ? searchedItems : items}
              handleAdd={handleAdd}
              handleAddToWishlist={handleAddToWishlist}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              handleRemove={handleRemoveWishlist}
              items={items}
              handleAdd={handleAdd}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
