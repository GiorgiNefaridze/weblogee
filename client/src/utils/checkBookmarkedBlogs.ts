import React, { useState } from "react";

import { checkBookmarks } from "../hooks/useCheckBookmarks";

interface IProps {
  (id: string): {
    fill: boolean;
    checkedInBookmarked: () => void;
    setFill: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const checkBookmarkedBlogs: IProps = (id) => {
  const [fill, setFill] = useState<boolean>(false);

  const checkedInBookmarked = async () => {
    const status = await checkBookmarks(id);

    if (status === 200) {
      setFill(true);
    } else {
      setFill(false);
    }
  };

  return { fill, checkedInBookmarked, setFill };
};
