import React from 'react';
import Addon from '../Addon/Addon';
import styles from './Flavor.module.css';

const Flavor = ({ flavor, handleFlavorChange, handleAddonChange }) => {
  return (
    <div className={styles.mainContainer}>
      <input
        type="checkbox"
        name="flavor"
        value={flavor.id}
        onChange={handleFlavorChange}
      />
      <label htmlFor="pick-flavor">
        {flavor.title} (${flavor.price.toFixed(2)})
      </label>

      <p className={styles.addonPriceParagraph}>
        Pick Addons (${flavor.addonPrice.toFixed(2)} each)*
      </p>

      <div className={styles.addonContainer}>
        {flavor.addons.map((addon) => (
          <Addon
            key={`${flavor.id}-${addon.id}`}
            flavor={flavor}
            addon={addon}
            handleAddonChange={handleAddonChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Flavor;
