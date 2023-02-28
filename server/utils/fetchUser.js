import User from "../models/User.js";

export const fetchUser = async (array) => {
  const blogDetails = [];

  for (let blog of array) {
    const user = await User.findOne({
      _id: blog?.author?.toString().split("(")[0],
    }).lean();

    const { name, image: avatar } = user;
    const { title, content, categories, image, date, _id } = blog;

    blogDetails.push({
      name,
      avatar,
      title,
      content,
      categories,
      image,
      date,
      _id,
    });
  }

  return blogDetails;
};
