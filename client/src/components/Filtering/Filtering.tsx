import React, { FC } from "react";
import debounce from "lodash/debounce";
import { FiSearch } from "react-icons/fi";

import { FilteringWrapper, Search } from "./Filtering.style";

interface IProps {
  setFilterKey: React.Dispatch<React.SetStateAction<string>>;
}

const Filtering: FC<IProps> = ({ setFilterKey }) => {
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterKey(value);
  }, 400);

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
    </FilteringWrapper>
  );
};

export default Filtering;
