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
} from "@chakra-ui/react";
import Swal from "sweetalert2";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();

    let lemail = document.getElementById("lemail").value;
    let lpass = document.getElementById("lpass").value;

    if (!lemail || !lpass) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "E-mail and Password can't be empty",
      });
      return;
    }

    document.getElementById("login").style.visibility = "hidden";

    let signdata = {
      email: lemail,
      password: lpass,
    };

    fetch(`http://localhost:8080/user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signdata),
    })
      .then((res) => res.json())
      .then((res) => {
        document.getElementById("lemail").value = "";
        document.getElementById("lpass").value = "";

        if (res.ok) {
          Swal.fire("Login Successful", "", "success");
          localStorage.setItem("userDetails", JSON.stringify(res.user_details));
          localStorage.setItem("token", res.token);
          localStorage.setItem("signedIn", true);
          window.location.href = "./dashboard.html";
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: res.msg,
          });

          document.getElementById("login").style.visibility = "visible";
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });

        document.getElementById("login").style.visibility = "visible";
      });
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <form id="login-form" onSubmit={handleLogin}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" id="lemail" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" id="lpass" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button
                id="login"
                colorScheme={"blue"}
                variant={"solid"}
                type="submit"
              >
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
