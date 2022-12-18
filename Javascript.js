// Console Application - Clothing App
const prompt = require("prompt-sync")();
// Total available product (clothes) on our app
const products = [
  {
    id: 1,
    name: "Nancy AAA",
    price: 90,
    size: "L",
    quantity: 4,
  },
  {
    id: 2,
    name: "Nancy BBB",
    price: 45,
    size: "L",
    quantity: 12,
  },
  {
    id: 3,
    name: "Nancy CCC",
    price: 80,
    size: "L",
    quantity: 1,
  },
  {
    id: 4,
    name: "Nancy DDD",
    price: 20,
    size: "L",
    quantity: 10,
  },
  {
    id: 5,
    name: "Nancy EEE",
    price: 40,
    size: "L",
    quantity: 2,
  },
];

console.log(products);
console.log("Welcome to Nancy shopping app...");
console.log("");
let keepAppRunning = prompt("Press'a' to make an order, press 'q' to quit ");
const makingChoice = true;
let makeOrder;

while (makingChoice === true) {
  if (keepAppRunning === "q") {
    makingChoice = false;
    console.log("Thank you for visiting us,lol");
    break;
  }
  console.log(products);
  let choice = prompt(
    "Choose from the following options:\n A. View Cart \n B. Add a product to Cart \n C.Remove a product from cart \n D. Increase Quantity of Product in Cart \n E. Decrease Quantity of Product in Cart \n F. Checkout "
  );
  choice = choice.toLowerCase();

  if (choice === "a") {
    console.log(cart);
  }
  // Made changes
  if (choice === "b") {
    makeOrder = prompt("What is the id of the product you want to order? ");
    try {
      addItemToCart(makeOrder); //Check How to call a function
    } catch (error) {
      console.log("Product id does not exist");
    }
  } else if (!makeOrder) {
    console.log("id does not exist");
  }

  if (choice === "c") {
    makeOrder = prompt("What is the id of the product you want to order? ");
    try {
      removeItemFromCart(makeOrder); //Check How to call a function
    } catch (error) {
      console.log(error.message);
    }
  } else if (!makeOrder) {
    console.log("id does not exist");
  }

  if (choice === "d") {
    makeOrder = prompt("What is the id of the product you want to order? ");
    try {
      incrementItem(makeOrder); //Check How to call a function
    } catch (error) {
      console.log(error.message);
    }
  } else if (!makeOrder) {
    console.log("id does not exist");
  }

  if (choice === "e") {
    makeOrder = prompt("What is the id of the product you want to order? ");
    try {
      decrementItem(makeOrder); //Check How to call a function
    } catch (error) {
      console.log(error.message);
    }
  } else if (!makeOrder) {
    console.log("id does not exist");
  }

  if (choice === "f") {
    let Total = CheckOut();
    console.log(Total);
  }
}

// Total items requested by a customer - Bez
let cart = [];

const validateProduct = (id) => {
  // validation - check id the item exist in our products
  const item = products.find((item) => item.id === id);
  // if exists - add item else throw an error
  if (!item) {
    throw "Item Does not exist!";
  }
  return item;
};

const addItemToCart = (id) => {
  const item = validateProduct(id);
  // validation - check if the item exist in our item
  const existInCart = cart.find((item) => item.id === id);
  // validation - to check the quantity in our store
  if (!existInCart) {
    item.quantity = 1;
    cart.push(item);
  } else {
    existInCart.quantity++;
  }
};
addItemToCart(1);

const removeItemFromCart = (id) => {
  const item = validateProduct(id);
  const remainingItemInCart = cart.filter((item) => item.id !== id);
  // Update the cart
  cart = remainingItemInCart;
};

const getAllItemsFromCart = () => {
  return cart;
};

const incrementItem = (id) => {
  const items = validateProduct(id);
  const ExistCart = cart.find((item) => item.id === id);
  if (ExistCart) {
    ExistCart.quantity++;
  } else {
    throw "Item does not exist inside the cart";
  }
};

const decrementItem = (id) => {
  const Itemss = validateProduct(id);
  const ExistCarts = cart.find((item) => item.id === id);
  if (ExistCarts) {
    ExistCarts.quantity--;
  } else if (ExistCarts < 2) {
    return cart;
  } else if (ExistCarts >= 2) {
    ExistCarts.quantity--;
  } else {
    throw "item does not exist inside the cart";
  }
};

const CheckOut = () => {
  let TotalCart = cart.map((item) => item.price).reduce((a, b) => a + b);
  return TotalCart;
};
