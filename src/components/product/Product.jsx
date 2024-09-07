import React from 'react';
import PropTypes from 'prop-types';

Product.propTypes = {
  tagName: PropTypes.string,
  image: PropTypes.any,
  name: PropTypes.string,
  prize: PropTypes.number,
}

function Product ({tagName, image, name, prize}) {
  return (
    <article>
      <span>{tagName}</span>
      <img src={image} alt="image of a bag"/>
      <p>{name}</p>
      <h4>{`€${prize},-`}</h4>
    </article>
  )
}

export default Product;