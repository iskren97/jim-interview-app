import React from 'react';

const Receipt = ({ selectedItems, orderDate }) => {
  const getTotalPrice = () => {
    return selectedItems.reduce((total, item) => {
      const flavorPrice = item.flavor.price;
      const addonPrice = item.addons.reduce(
        (acc, addon) => acc + addon.price,
        0
      );

      return total + flavorPrice + addonPrice;
    }, 0);
  };

  return (
    <div
      style={{
        border: '2px dashed',
        padding: '20px',
        width: '250px',
        marginTop: '50px',
      }}
    >
      <h3>Receipt:</h3>
      <p>{orderDate}</p>

      {selectedItems.map((item, index) => (
        <div key={index}>
          <p>
            {item.flavor.title} - ${item.flavor.price}
          </p>
          <ul>
            {item.addons.map((addon, idx) => (
              <li key={idx}>
                <p>
                  {addon.type} - ${addon.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p style={{ marginTop: '30px' }}>Total: ${getTotalPrice().toFixed(2)}</p>
    </div>
  );
};

export default Receipt;
