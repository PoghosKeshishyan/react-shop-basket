import { useState, useEffect } from "react";
import GoodList from "../components/GoodList";
import Basket from "../components/Basket";

const HomePage = () => {
  const [goods, setGoods] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const addOrder = (item) => {
    const index = orders.findIndex(el => el.id === item.id);

    if (index === -1) {
      let newOrder = {
        ...item,
        quantity: 1
      };

      setOrders([...orders, newOrder]);
    } else {
      let newOrders = orders.map((el, i) => {
        if (i === index) el.quantity++;
        return el
      });

      setOrders(newOrders);
    }
  }

  const removeOrder = (id) => {
    let newOrders = orders.filter(el => el.id !== id);
    setOrders(newOrders);
  }

  const basketHendler = () => {
    setBasketShow(!isBasketShow);
  }

  const plusOrderQuantity = (id) => {
    let newOrders = orders.map((el) => {
      if (el.id === id) el.quantity++;
      return el;
    })
    setOrders(newOrders);
  }

  const minusOrderQuantity = (id) => {
    let newOrders = orders.map((el) => {
      if (el.id === id) el.quantity = el.quantity > 1 ? el.quantity - 1 : 1;
      return el;
    })
    setOrders(newOrders);
  }

  const ordersQuantity = orders.reduce((sum, el) => sum + el.quantity, 0);

  useEffect(() => {
    fetch('http://localhost:3000/goods')
      .then(response => response.json())
      .then(data => { setGoods(data) });
  }, []);


  return (
    <div className="container mx-auto p-4">
      {
        isBasketShow && 
        <Basket 
          orders={orders} 
          removeOrder={removeOrder} 
          plusOrderQuantity={plusOrderQuantity} 
          minusOrderQuantity={minusOrderQuantity} 
        />
      }

      <GoodList goods={goods} addOrder={addOrder} />
      <button 
        onClick={basketHendler} 
        className="fixed bottom-10 right-10 bg-violet-600 p-6 rounded-full  text-white text-xl font-semibold">
          CART: {ordersQuantity}
      </button>
    </div>
  );
}

export default HomePage;