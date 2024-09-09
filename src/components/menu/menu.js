import React from 'react';
import './Menu.css'; // Updated CSS

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <div className="menu-container">
        <div className="menu-page">
          <div className="menu-card">
            <h2>Chicken Dinners</h2>
            <ul>
              <li>Souvlaki dinner</li>
              <li>Baklava</li>
              <li>A taste of Greece</li>
              <li>Super donair</li>
              <li>Regular donair</li>
              <li>Greek donair</li>
              <li>Delicious donairs</li>
            </ul>
          </div>
          <div className="menu-card">
            <h2>Salads</h2>
            <ul>
              <li>Greek salad</li>
              <li>Caesar salad</li>
              <li>Chicken caesar</li>
              <li>Greek chicken</li>
            </ul>
          </div>
        </div>

        <div className="menu-page">
          <div className="menu-card">
            <h2>Pizza</h2>
            <ul>
              <li>12" pizza</li>
              <li>Lasagna</li>
              <li>Cheese</li>
              <li>One topping</li>
              <li>Two toppings</li>
              <li>Three toppings</li>
              <li>Works</li>
              <li>Greek</li>
              <li>Donair</li>
              <li>BBQ chicken pizza</li>
              <li>Extra cheese</li>
              <li>Extra toppings</li>
              <li>All meat</li>
            </ul>
          </div>
        </div>

        <div className="menu-page">
          <div className="menu-card">
            <h2>Pastas</h2>
            <ul>
              <li>Bravo house pasta</li>
              <li>Spaghetti with meat sauce</li>
              <li>With mushroom</li>
              <li>With meatballs</li>
              <li>With meatballs & mushrooms</li>
              <li>Deluxe spaghetti</li>
              <li>Lasagna</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
