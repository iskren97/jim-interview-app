import React from 'react';

const Flavor = ({ flavor, handleFlavorChange }) => {
  return (
    <div style={{ marginTop: '25px' }}>
      <input
        type="checkbox"
        name="flavor"
        value={flavor.id}
        onChange={handleFlavorChange}
      />
      <label htmlFor="pick-flavor">
        {flavor.title} (${flavor.price.toFixed(2)})
      </label>

      <p
        style={{
          marginLeft: '30px',
          marginBottom: '0px',
        }}
      >
        Pick Addons (${flavor.addonPrice.toFixed(2)} each)*
      </p>
    </div>
  );
};

export default Flavor;
