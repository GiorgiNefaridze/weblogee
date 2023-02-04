import { FC, useState } from "react";
import { FiSearch } from "react-icons/fi";

import {
  FilteringWrapper,
  Search,
  CategoriesWrapper,
  Categories,
} from "./Filtering.style";

interface IProps {
  setSelectCategory: React.Dispatch<React.SetStateAction<string[]>>;
  selectCategory: string[];
  category: string[];
}

const Filtering: FC<IProps> = ({
  setSelectCategory,
  selectCategory,
  category,
}) => {
  const handleClick = (category: string) => {
    if (selectCategory.includes(category)) {
      setSelectCategory((prev) => prev?.filter((cat) => cat !== category));
    } else {
      setSelectCategory([...selectCategory, category]);
    }
  };

  return (
    <FilteringWrapper>
      <Search htmlFor="search">
        <FiSearch style={{ fontSize: "20px" }} />
        <input type="text" id="search" placeholder="Search..." />
      </Search>
      <CategoriesWrapper>
        <h2>Categories :</h2>
        {category?.map((category, idx) => (
          <Categories
            key={idx}
            onClick={() => handleClick(category)}
            select={selectCategory.includes(category)}
          >
            <span title={category}>{category}</span>
          </Categories>
        ))}
      </CategoriesWrapper>
    </FilteringWrapper>
  );
};

export default Filtering;
