import React from 'react';
import styles from './Addon.module.css';

const Addon = ({ flavor, addon, handleAddonChange }) => {
  return (
    <>
      <input
        type="checkbox"
        name="addon"
        id={`addon-${flavor.id}-${addon.id}`}
        value={addon.id}
        onChange={(event) => handleAddonChange(event, flavor.id)}
      />
      <label
        className={styles.addonLabel}
        htmlFor={`addon-${flavor.id}-${addon.id}`}
      >
        {addon.type}
      </label>
    </>
  );
};

export default Addon;
