import React, { useMemo } from 'react';
import { getTotalPrice } from '../../utils/getTotalPrice';
import styles from './Receipt.module.css';

const Receipt = ({ selectedItems, orderDate }) => {
  const totalPrice = useMemo(() => {
    return getTotalPrice(selectedItems);
  }, [selectedItems]);

  return (
    <div className={styles.receiptContainer}>
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

      <p className={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Receipt;
