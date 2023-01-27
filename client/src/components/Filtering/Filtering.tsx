import { FC } from "react";
import { FiSearch } from "react-icons/fi";

import { FilteringWrapper, Search } from "./Filtering.style";

const Filtering: FC = () => {
  return (
    <FilteringWrapper>
      <Search htmlFor="search">
        <FiSearch style={{ fontSize: "20px" }} />
        <input type="text" id="search" placeholder="Search..." />
      </Search>
    </FilteringWrapper>
  );
};

export default Filtering;
