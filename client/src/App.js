import React, { useState } from 'react';
import './App.css';
import Flavor from './components/Flavor';
import Addon from './components/Addon';
import Receipt from './components/Receipt';
import useFetchData from './hooks/useFetchData';
import dateFormatter from './helpers/dateFormatter';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDate, setOrderDate] = useState('');
  const { data } = useFetchData();

  const handleFlavorChange = (event) => {
    const flavorId = parseInt(event.target.value);
    const isChecked = event.target.checked;

    if (isChecked) {
      const flavor = data.find((item) => item.id === flavorId);
      setSelectedItems((prevItems) => [...prevItems, { flavor, addons: [] }]);
    } else {
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item.flavor.id !== flavorId)
      );
    }
  };

  const handleAddonChange = (event, flavorId) => {
    const addonId = parseInt(event.target.value);
    const addon = data[flavorId - 1].addons.find(
      (addon) => addon.id === addonId
    );
    const isChecked = event.target.checked;

    setSelectedItems((prevItems) =>
      prevItems.map((item) => {
        if (item.flavor.id === flavorId) {
          if (isChecked) {
            return { ...item, addons: [...item.addons, addon] };
          } else {
            return {
              ...item,
              addons: item.addons.filter((a) => a.id !== addonId),
            };
          }
        }
        return item;
      })
    );
  };

  const handlePlaceOrder = () => {
    const date = new Date();
    const formattedDate = dateFormatter(date);
    setOrderDate(formattedDate);

    setOrderPlaced(true);
  };

  return (
    <div style={{ marginLeft: '200px' }}>
      {!orderPlaced && (
        <>
          <h1>Pick the flavor</h1>

          <div style={{ display: 'inline-grid' }}>
            {data.map((flavor) => {
              return (
                <>
                  <Flavor
                    flavor={flavor}
                    handleFlavorChange={handleFlavorChange}
                  />

                  <div className="addonContainer">
                    {flavor.addons.map((addon) => {
                      return (
                        <Addon
                          flavor={flavor}
                          addon={addon}
                          handleAddonChange={handleAddonChange}
                        />
                      );
                    })}
                  </div>
                </>
              );
            })}

            <button className="orderBtn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}

      {orderPlaced && (
        <Receipt selectedItems={selectedItems} orderDate={orderDate} />
      )}
    </div>
  );
};

export default App;
