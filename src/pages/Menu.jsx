import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import imageOne from '../assets/one.jpg';
import imageTwo from '../assets/two.jpg';
import imageThree from '../assets/three.jpg';
import imageFour from '../assets/four.jpg';
import imageFive from '../assets/five.jpg';
import imageSix from '../assets/six.jpg';
import imageSeven from '../assets/seven.jpg';
import imageEight from '../assets/eight.jpg';
import imageNine from '../assets/nine.jpg';
import imageTen from '../assets/ten.jpg';
import imageEleven from '../assets/eleven.jpg';
import imageTwelve from '../assets/tweleve.jpg';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1731226949859.json';
import { motion } from 'framer-motion';

const Menu = () => {
  const { addToCart } = useCart();
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const cardData = [
    { title: 'Refreshing Drink', description: 'Cool beverage.', price: 80, img: imageOne },
    { title: 'Delicious Pasta', description: 'Fresh ingredients.', price: 180, img: imageTwo },
    { title: 'Gourmet Burger', description: 'Juicy burger.', price: 200, img: imageThree },
    { title: 'Exotic Pizza', description: 'Unique flavors.', price: 300, img: imageFour },
    { title: 'Classic Pancakes', description: 'Fluffy pancakes.', price: 150, img: imageFive },
    { title: 'Exotic Salad', description: 'Fresh salad.', price: 100, img: imageSix },
    { title: 'Tacos',description:'Flavorful wraps',price:120,img:imageSeven},
    { title: 'Donuts',description:'Fluffy delight',price:80,img:imageEight},
    { title: 'Baked Alaska',description:'Fiery elegance',price:180,img:imageNine},
    { title: 'Macroons',description:'Creamy Goodness',price:120,img:imageTen},
    { title: 'Ratatouille',description:'Vegetable medley',price:280,img:imageEleven},
    { title: 'Ramen',description:'Soul Food',price:250,img:imageTwelve}

  ];

  const handleOrderNow = (itemTitle) => {
    setSelectedItem(cardData.find((item) => item.title === itemTitle));
  };

  const handlePlaceOrder = () => {
    if (selectedItem) {
      addToCart({ ...selectedItem, quantity });
      alert(`Added ${quantity} x "${selectedItem.title}" to the cart.`);
      setSelectedItem(null);
      setQuantity(1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
        <article className="prose lg:prose-xl text-center mb-12">
          <h1 className="text-4xl font-extrabold">Welcome to Our Menu</h1>
          <p>Explore our wide range of delectable dishes!</p>
        </article>

        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold mr-4">Our Menu</h1>
          <Lottie animationData={animationData} loop className="w-12 h-12" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl transform transition hover:scale-105 hover:shadow-2xl"
            >
              <figure
                className="w-full h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.img})` }}
              ></figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{card.title}</h2>
                <p>{card.description}</p>
                <p className="text-lg font-bold text-primary">₹{card.price}</p>
                <div className="card-actions justify-end mt-4">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleOrderNow(card.title)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-4">{`Order: ${selectedItem.title}`}</h2>
              <label className="block mb-4">
                <span className="text-lg font-medium">Select Quantity:</span>
                <select
                  className="mt-2 p-2 border rounded w-full"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </label>
              <div className="flex justify-around mt-6">
                <button
                  className="btn btn-primary"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedItem(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Menu;