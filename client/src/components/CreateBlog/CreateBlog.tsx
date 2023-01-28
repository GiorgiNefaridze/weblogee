import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { MdCloudUpload } from "react-icons/md";

import {
  Create,
  Content,
  BlogTitle,
  Thumbnail,
  Image,
  BlogContent,
  Footer,
} from "./CreateBlog.style";

const CreateBlog: FC = () => {
  return (
    <Create>
      <Content>
        <BlogTitle>
          <h2>Create Blog Title</h2>
          <p>
            This title will appear on the top of your blog, make it easy for
            others to predict blog content.
          </p>
          <TextField label="Title here" multiline maxRows={4} />
        </BlogTitle>
        <BlogContent>
          <h2>Blog Content</h2>
          <textarea placeholder="Blog Content Here" />
        </BlogContent>
        <Thumbnail>
          <h2>Thumbnail</h2>
          <Image htmlFor="upload">
            <MdCloudUpload size={50} />
            <p>Browse your image here</p>
            <input id="upload" type="file" />
          </Image>
        </Thumbnail>
      </Content>
      <Footer>
        <button>Cancel</button>
        <button>Publish</button>
      </Footer>
    </Create>
  );
};

export default CreateBlog;
