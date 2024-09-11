import React, {useEffect} from "react";

const MenuCategories = ({ allCategories, changeCategory, resetPagination }) => {
  
  
  return (
    <article className="menu__categories">
      
      <ul>
        {allCategories.map((category) => (
          <li key={category.id}>
            <a  href="#"
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
  );
}
export default MenuCategories;
