import React, {useState, useEffect } from "react";
import Hero from "./hero/Hero";
import ScrollButton from "../../helpers/ScrollBtn";
import WelcomeSection from "./welcome/WelcomeSection";
import ResetLocation from "../../helpers/ResetLocation";
import ContactLanding from "./contact-info/ContactLanding"
import PizzaReviewSlider from "./PizzaReviewSlider/PizzaReviewSlider";
import { allProductsData } from "../../data/AllProductData";
import Menu from "../menu/menu.js";
import { AllCategories } from "../../data/AllCategories";

const Homepage = ({
  showModal,
  isModalActive,
  hideMenu, }) => {
  useEffect(() => {
    document.title = "Bravo Pizza";
    ResetLocation();
  }, []);

 const collectData = [];
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Menu');

  const getAllCategories = async () => {
    setAllCategories(AllCategories);
  };
  const getAllProducts = () => {
    setAllProducts(allProductsData);
  };

  useEffect(() => {
    getAllCategories();
    getAllProducts();
    getProductsByCategory(activeCategory);
  
  },[activeCategory] );
  useEffect(() => {
    getAllCategories();
    getAllProducts();
    getProductsByCategory(activeCategory);
  
  },[] );

  const getProductsByCategory = (category) => {
    let separateCategoriesByname = []
  
    const separateCategories = allProductsData.reduce(function (
      singleCategory,
      singleItem,
    ) {
      separateCategoriesByname = Object.keys(singleCategory)

      if (!singleCategory[singleItem.Category])
        singleCategory[singleItem.Category] = singleItem
      else
        singleCategory[singleItem.Category] = Array.isArray(
          singleCategory[singleItem.Category],
        )
          ? singleCategory[singleItem.Category].concat(singleItem)
          : [singleCategory[singleItem.Category]].concat(singleItem)
      return singleCategory
    },
      {})

    const result = Object.keys(separateCategories).map(
      (e) => separateCategories[e],
    )

    let singleCategoryArray = []
    result.map((categories) => {
      return singleCategoryArray.push(categories)
    })
 
    separateCategoriesByname.forEach((cate) => {
      if (cate === category) {
        return setAllProducts(separateCategories[category])
      }
      if (category === 'Menu') {
        return setAllProducts(allProductsData)
      }
    })
  }

  const changeCategory = (newCategory) => {
    setActiveCategory(newCategory);
    getProductsByCategory(newCategory);
  };


   
    



  return (
    <React.Fragment>

      <Hero showModal={showModal} isModalActive={isModalActive} hideMenu={hideMenu}/>
      <WelcomeSection />
      <Menu id='menu'
              allProducts={allProducts}
              allCategories={allCategories}
              changeCategory={changeCategory}
              />
      <ContactLanding />
      <PizzaReviewSlider/>
      <ScrollButton /> 
      
    </React.Fragment>
  );
}

export default Homepage;
