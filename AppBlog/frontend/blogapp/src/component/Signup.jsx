import React from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/register", data)
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      id="firstname"
                      {...register("firstname", {
                        required: "First name is required",
                      })}
                    />
                  </FormControl>
                  {errors.firstname && (
                    <Text color="red" fontSize="sm">
                      {" "}
                      {errors.firstname.message}{" "}
                    </Text>
                  )}
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      id="lastname"
                      {...register("lastname")}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email must be required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "Email doesn't exist",
                    },
                  })}
                />
              </FormControl>
              {errors.email && (
                <Text color="red" fontSize="sm">
                  {" "}
                  {errors.email.message}{" "}
                </Text>
              )}
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    {...register("password", {
                      required: "Password must be required",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                        message: `- At least 8 characters\n
                        - Must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                        - Can contain special characters`,
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              {errors.password && (
                <Text color="red" fontSize="sm">
                  {" "}
                  {errors.password.message}{" "}
                </Text>
              )}
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  id="ConformPassword"
                  {...register("ConformPassword", {
                    required: "Confirm password must be same",
                    validate: (value, formValues) =>
                      value === formValues.password || "Passwords don't match",
                  })}
                  type={showConformPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowConformPassword(
                        (showConformPassword) => !showConformPassword
                      )
                    }
                  >
                    {showConformPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.ConformPassword && (
                <Text color="red" fontSize="sm">
                  {" "}
                  {errors.ConformPassword.message}{" "}
                </Text>
              )}
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  isLoading={false}
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit(onSubmit)}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Signup;
