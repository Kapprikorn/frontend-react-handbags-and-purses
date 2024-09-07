import React from 'react';
import PropTypes from 'prop-types';

Tile.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  paragraphs: PropTypes.array,
}

function Tile ({image, imageAlt, header, paragraphs}) {
  if (image) {
    return (
      <section>
        <img src={image} alt={imageAlt} />
      </section>
    )
  }
  else {
    return (
      <section>
        <h2>{header}</h2>
        {
          paragraphs.map((aParagraph, index) => {
            return (
              <p key={`${header}_p-element_${index}`}>{aParagraph}</p>
            )
          })
        }
      </section>
    )
  }
}

export default Tile;