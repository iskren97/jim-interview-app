import React, { useState } from 'react';
import Flavor from '../components/Flavor/Flavor';
import Receipt from '../components/Receipt/Receipt';
import useFetchData from '../hooks/useFetchData';
import dateFormatter from '../helpers/dateFormatter';
import styles from './App.module.css';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDate, setOrderDate] = useState('');
  const { data } = useFetchData();

  const handleFlavorChange = (flavorId) => {
    const existingItemIndex = selectedItems.findIndex(
      (item) => item.flavor.id === flavorId
    );

    if (existingItemIndex !== -1) {
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item.flavor.id !== flavorId)
      );
    } else {
      const flavor = data.find((item) => item.id === flavorId);
      setSelectedItems((prevItems) => [...prevItems, { flavor, addons: [] }]);
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
    <div className={styles.appContainer}>
      {!orderPlaced && (
        <>
          <h1>Pick the flavor</h1>

          <div className={styles.innerContainer}>
            {data.map((flavor) => {
              return (
                <>
                  <Flavor
                    flavor={flavor}
                    handleFlavorChange={handleFlavorChange}
                    handleAddonChange={handleAddonChange}
                  />
                </>
              );
            })}

            <button className={styles.orderBtn} onClick={handlePlaceOrder}>
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
