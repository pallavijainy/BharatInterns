import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function SingIn() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios.post("http://localhost:8000/login", data).then((res) => {
      console.log(res.data.msg);
      if (res.data.msg === "user login successfully") {
        sessionStorage.setItem("token", res.data.token);
        alert(res.data.msg);
        navigate("/");
      } else {
        alert(res.data.msg);
      }
    });
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                {...register("email", { required: "Email must be required" })}
              />
            </FormControl>
            {errors.email && (
              <Text style={{ color: "red" }}>{errors.email.message}</Text>
            )}
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
            </FormControl>
            {errors.password && (
              <Text style={{ color: "red" }}>{errors.password.message}</Text>
            )}
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button type="submit" colorScheme={"blue"} variant={"solid"}>
                Sign in
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
