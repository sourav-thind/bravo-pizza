import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Attribute from './Attribute';
import ResetLocation from "../../helpers/ResetLocation";

const MenuGridItem = ({ singleProduct}) => {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [targetAttribute, setTargetAttribute] = useState('');

  const handleSelectedAttributes = (attributeId, attributeValue) => {
    setTargetAttribute(attributeValue);
    const newSelectedAttribute = { attributeId, attributeValue };
    setSelectedAttributes(prevAttributes => {
      const existingAttributeIndex = prevAttributes.findIndex(
        attribute => attribute.attributeId === newSelectedAttribute.attributeId
      );
      if (existingAttributeIndex !== -1) {
        const updatedAttributes = [...prevAttributes];
        updatedAttributes[existingAttributeIndex] = { ...newSelectedAttribute };
        return updatedAttributes;
      } else {
        return [...prevAttributes, newSelectedAttribute];
      }
    });
  };


  return (
    <article className="menu-item txt-white">
      
      <h3>{singleProduct.ItemName}</h3>
      <p>{singleProduct.ItemIngredients}</p>
      {singleProduct.attributes.length === 0 ? null :
        singleProduct.attributes?.map(attribute => (
          <Attribute
            key={attribute.id}
            className="menu-item__attributes"
            handleSelectedAttributes={handleSelectedAttributes}
            attribute={attribute}
            targetAttribute={targetAttribute}
          />
        ))
      }
      
    </article>
  );
};

export default MenuGridItem;
