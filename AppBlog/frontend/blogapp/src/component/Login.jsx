import React, { useContext, useState } from "react";
import image from "../images/Popular-social-media-Blogger-logo-on-transparent-PNG.png";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Login = () => {
  const { setUserInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "-------->data");
    axios
      .post("http://localhost:8000/login", data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data?.email);
        if (res.data?.email) {
          setUserInfo({ email: res.data.email, id: res.data.id });
          console.log(res.data.email);
          setRedirect(true);
        }
        alert(res.data.msg);
      })

      .catch((errors) => {
        console.log(errors);
      });
  };

  if (redirect) {
    return <Navigate to={"/showpost"} />;
  }
  return (
    <div>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Image src={image} width={"100px"} />
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue('white', 'gray.700')}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  {...register("email", {
                    required: "Email must be required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "Email doesn't exist",
                    },
                  })}
                  type="email"
                />
              </FormControl>
              {errors.email && (
                <Text color="red"> {errors.email.message} </Text>
              )}
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  {...register("password", {
                    required: "paawoed must be required",
                  })}
                />
              </FormControl>

              {errors.password && (
                <Text color="red"> {errors.password.message} </Text>
              )}
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleSubmit(onSubmit)}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Login;
