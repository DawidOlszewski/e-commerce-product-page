import { useState } from 'react';
// import CartMultiSet from 'Helpers/CartMultiSet';

const useCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      title: 'Fall Limited Edition Sneakers',
      amount: 2,
      cost: 30,
      image: 'img',
    },
  ]);
  console.log(cartItems);

  const addCartItem = (
    newItemTitle = 'Fall Limited Edition Sneakers',
    quantity = 1
  ) => {
    setCartItems((cItems) => {
      // if (newItemTitle !== cItems[0].title) throw new Error();

      let newCItems = [...cItems];
      newCItems[0].amount = quantity + Number(cItems[0].amount);
      return newCItems;
    });
  };

  const deleteCartItem = (newItemTitle = 'Fall Limited Edition Sneakers') => {
    setCartItems((cartItems) => {
      let newCI = [...cartItems];
      newCI[0].amount = 0;
      console.log(newCI);
      return newCI;
    });
  };

  return [addCartItem, deleteCartItem, cartItems];
};

export default useCart;
