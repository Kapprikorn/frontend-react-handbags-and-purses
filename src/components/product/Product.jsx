import React from 'react';
import PropTypes from 'prop-types';

Product.propTypes = {
  tagName: PropTypes.string,
  image: PropTypes.any,
  imageAlt: PropTypes.string,
  name: PropTypes.string,
  prize: PropTypes.number,
}

function Product ({tagName, image, imageAlt, name, prize}) {
  return (
    <article>
      <span>{tagName}</span>
      <img src={image} alt={imageAlt}/>
      <p>{name}</p>
      <h4>{`€${prize},-`}</h4>
    </article>
  )
}

export default Product;