import { useState } from "react";

import { axiosInstance } from "../api/axiosInstance";

const getBookmarks = () => {
  const [noBookmarkedBlogs, setNoBookmarkedBlogs] = useState({
    isTrue: false,
    data: "" || [],
  });
  const [loader, setLoader] = useState(false);

  const fetchBookmarkes = async () => {
    setLoader(true);
    try {
      const {
        data: { response },
      } = await axiosInstance().get("api/blogs/getBookmarks");

      setNoBookmarkedBlogs({ isTrue: false, data: response });
    } catch (error) {
      setNoBookmarkedBlogs({
        isTrue: true,
        data: error?.response?.data?.error,
      });
    }

    setLoader(false);
  };

  return { fetchBookmarkes, noBookmarkedBlogs, loader };
};

export default getBookmarks;
