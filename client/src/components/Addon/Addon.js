import React from 'react';

const Addon = ({ flavor, addon, handleAddonChange }) => {
  return (
    <>
      <input
        type="checkbox"
        name="addon"
        value={addon.id}
        onChange={(event) => handleAddonChange(event, flavor.id)}
      />
      <label htmlFor="pick-addon">{addon.type}</label>
    </>
  );
};

export default Addon;
