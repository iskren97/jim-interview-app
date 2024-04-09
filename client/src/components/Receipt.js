import React, { useMemo } from 'react';
import { getTotalPrice } from '../utils/getTotalPrice';

const Receipt = ({ selectedItems, orderDate }) => {
  const totalPrice = useMemo(() => {
    return getTotalPrice(selectedItems);
  }, [selectedItems]);

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
                {console.log(addon)}
                <p>
                  {addon.type} - ${item.flavor.addonPrice}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p style={{ marginTop: '30px' }}>Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Receipt;
