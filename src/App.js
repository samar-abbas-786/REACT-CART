import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Additem from "./components/Additem";

function App() {
  const products = [
    {
      name: "Iphone 14 pro max",
      price: 100000,
      quantity: 0,
    },
    {
      name: "Macbook Pro",
      price: 125000,
      quantity: 0,
    },
  ];

  const [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  //increment Quantity
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    newProductList[index].quantity++;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  //Dicrement Quantity
  const dicrementQuantity = (index) => {
    let newTotalAmount = totalAmount;

    let newProductList = [...productList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    // Create a copy of the productList array
    let newProductList = [...productList];

    // Calculate the amount to be deducted
    let removedItemAmount =
      newProductList[index].price * newProductList[index].quantity;

    // Remove the item at the given index from the newProductList array
    newProductList.splice(index, 1);

    // Calculate the new total amount by deducting the removed item's amount
    let newTotalAmount = totalAmount - removedItemAmount;

    // Update the state with the new product list and total amount
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const additem = (Name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: Name,
      price: price,
      quantity: 0,
    });
    setProductList(newProductList);
  };
  return (
    <div className="App">
      <Navbar />
      <main className="container mt-5">
        <Additem additem={additem}/>
        <ProductList
          products={productList}
          incrementQuantity={incrementQuantity}
          dicrementQuantity={dicrementQuantity}
          removeItem={removeItem}
          additem={additem}
        />
      </main>
      <Footer
        totalAmount={totalAmount}
        resetQuantity={resetQuantity}
        removeItem={removeItem}
        dicrementQuantity={dicrementQuantity}
        additem={additem}
      />
    </div>
  );
}

export default App;
