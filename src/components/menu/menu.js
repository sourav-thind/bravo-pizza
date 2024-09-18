import React from "react";
import ScrollButton from "../../helpers/ScrollBtn";
import { useState, useEffect } from "react"; 
import { motion } from "framer-motion";
import './Menu.css'
import { allProductsData } from "../../data/AllProductData";
import Attribute from './Attribute';
const Menu = ({ allProducts,
  allCategories,
  changeCategory,
}) => {

  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState( );
  const [currentProducts, setcurrentProducts] = useState([...allProductsData]);


  const resetPagination = () => {
    setItemOffset(0);
    setEndOffset(9);
  }

  useEffect(() => {

    setEndOffset(itemOffset + 15);
    setcurrentProducts(allProducts.slice(itemOffset, endOffset));

  }, [allProducts, setEndOffset, endOffset, itemOffset]);







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
    <>
    <div className="heading"> <h1>Menu</h1></div>

   
    <motion.main
      className="menu"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      <article className="menu__categories">

        <ul>
          {allCategories.map((category) => (
            <li key={category.id}>
              <a href="/#"
                onClick={(e) => {
                  e.preventDefault();
                  changeCategory(category.name);
                  resetPagination();
                }}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </article>
      <article className="menu__items">
        {currentProducts.length === 0 ? <p className="menu__not-found">No results found...</p> :
          currentProducts.map((singleProduct) => (
            <article className="menu-item txt-white">

              <h3>{singleProduct.ItemName}</h3>
              <p className="p">{singleProduct.ItemIngredients}</p>
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
          ))
        }
        <ScrollButton />
      </article>

     
    </motion.main></>
  );
}


export default Menu;