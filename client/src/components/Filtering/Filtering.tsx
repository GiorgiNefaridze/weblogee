import React, { FC } from "react";
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
  setFilterKey: React.Dispatch<React.SetStateAction<string>>;
}

const Filtering: FC<IProps> = ({
  category,
  selectCategory,
  setSelectCategory,
  setFilterKey,
}) => {
  const handleClick = (cat: string) => {
    if (selectCategory.includes(cat)) {
      setSelectCategory(selectCategory?.filter((el) => el !== cat));
    } else {
      setSelectCategory([...selectCategory, cat]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterKey(value);
  };

  return (
    <FilteringWrapper>
      <Search htmlFor="search">
        <FiSearch style={{ fontSize: "20px" }} />
        <input
          onChange={handleChange}
          type="text"
          id="search"
          placeholder="Search..."
        />
      </Search>
      <CategoriesWrapper>
        <h2>Categories :</h2>
        {category?.map((cat, idx) => (
          <Categories
            key={idx}
            onClick={() => handleClick(cat)}
            select={selectCategory.includes(cat)}
          >
            <span title={cat}>{cat}</span>
          </Categories>
        ))}
      </CategoriesWrapper>
    </FilteringWrapper>
  );
};

export default Filtering;
