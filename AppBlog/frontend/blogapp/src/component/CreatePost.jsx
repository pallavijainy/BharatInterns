import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Image,
} from "@chakra-ui/react";
import ReactQuil from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
const CreatePost = () => {
  const [selectedOption, setSelectedOption] = useState("blog");
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getImageUrl = () => {
    // Define image URLs based on selected option
    switch (selectedOption) {
      case "fitness":
        return "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80";
      case "crime":
        return "https://images.unsplash.com/photo-1453873531674-2151bcd01707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60";
      case "political":
        return "https://media.istockphoto.com/id/1148772178/photo/indian-voter-hand-with-voting-sign-after-casting-vote-in-election.webp?b=1&s=170667a&w=0&k=20&c=8swZXw4tJFBSfFER5XojP26uSxPrr3eTuOu8OgSKl0w=";
      case "sport":
        return "https://media.istockphoto.com/id/1043766552/photo/skiing.webp?s=170667a&w=0&k=20&c=cTpiFR_P9dc8jJM1RTg4NWlJ15f3JHMTeJCBYEh5ZUk=";
      case "worldwide":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNHYJt_IbiEwKthpJMQFBaEQe8Y9JSW2MVQ&usqp=CAU";
      default:
        return "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
    }
  };

  const createNewPost = async (e) => {
    console.log(file, "==>file");

    const data = new FormData();
    data.set("title", title);
    data.set("summery", summery);
    data.set("content", content);
    data.set("file", file[0]);

    e.preventDefault();
    await axios
      .post("http://localhost:8000/createpost", data, {
        withCredentials: true,
      })
      .then(() => alert("Created post Sucessfully"))
      .then(() => setRedirect(true))
      .catch((err) => alert("Something went Wrong"));
  };

  if (redirect) {
    return <Navigate to={"/showpost"} />;
  }
  return (
    <>
      {selectedOption && (
        <Box m={2} height={"full"} mt={4}>
          <Image
            height={"600"}
            width={"full"}
            src={getImageUrl()}
            alt={selectedOption}
          />
        </Box>
      )}
      <Box m={"auto"} mt={10} width={"70%"}>
        <Box>
          <FormLabel>Select Category</FormLabel>
          <Select value={selectedOption} onChange={handleOptionChange}>
            <option value="fitness">Fitness</option>
            <option value="crime">Crime</option>
            <option value="political">Political</option>
            <option value="sport">Sport</option>
            <option value="worldwide">Worldwide</option>
          </Select>
        </Box>
        <form onSubmit={createNewPost}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Summary</FormLabel>
            <Input
              type="text"
              placeholder="Summary"
              value={summery}
              onChange={(e) => setSummery(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>File</FormLabel>
            <Input type="file" onChange={(e) => setFile(e.target.files)} />
          </FormControl>
          <ReactQuil
            value={content}
            modules={modules}
            formats={formats}
            onChange={(newValue) => setContent(newValue)}
          />
          <Button width={"full"} mt={7} colorScheme="gray" type="submit">
            Create post
          </Button>
        </form>
      </Box>
    </>
  );
};

export default CreatePost;
