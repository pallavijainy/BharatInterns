import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";

const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};

const AddPage = () => {
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const url = post.picture
    ? post.picture
    : "data:image/png;base64,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";
  useEffect(() => {
    const getImage = async () => {
      // Add 'async' keyword here
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await axios.post(
          "http://localhost:8000/file/upload",
          data
        ); // Await the response
        setPost({ ...post, picture: response.data }); // Update the post state with the response data
      }
    };
    getImage();
  }, [file]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  return (
    <Box>
      <Image src={url} alt="banner" />

      <FormControl>
        <label htmlFor="fileInput">➕</label>
        <input
          type="file"
          id="fileInput"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <Input
          placeholder="Title"
          onChange={(e) => handleChange(e)}
          name="title"
        />
        <Button>publish</Button>
      </FormControl>
      <Textarea
        placeholder="Tell your story"
        onChange={(e) => handleChange(e)}
        name="description"
      ></Textarea>
    </Box>
  );
};

export default AddPage;
