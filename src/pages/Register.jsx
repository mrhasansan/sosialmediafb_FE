import React from "react";
import { Stack, InputGroup, InputLeftElement, Input, InputRightElement, Button, Text, SimpleGrid } from "@chakra-ui/react";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Register() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const schema = yup.object().shape({
    username: yup.string().required("Please Enter a username"),
    phone: yup.number().required("Please Enter a phone number"),
    email: yup.string().email().required("Please Enter your Email"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must be match")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} className="p-2">
        <Text className="h2 m-0"> Regitrasi </Text>
        <p>Ini cepat dan mudah</p>
        <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaUserAlt color="gray.300" />} />
            <Input type="text" placeholder="Username..." {...register("username")} />
            <p>{errors.username?.message}</p>
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaPhoneAlt color="gray.300" />} />
            <Input type="number" placeholder="Phone number..." {...register("phone")} />
            <p>{errors.phone?.message}</p>
          </InputGroup>
        </SimpleGrid>
        <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<HiOutlineMail color="gray.300" />} />
            <Input type="email" placeholder="email..." {...register("email")} />
            <p>{errors.email?.message}</p>
          </InputGroup>
          <InputGroup size="md">
            <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password..." {...register("password")} />
            <p>{errors.password?.message}</p>
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </SimpleGrid>
        <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
          <InputGroup>
            <Text className="me-3 "> Birthday</Text>
            <Input placeholder="Select Date and Time" size="md" type="date" />
          </InputGroup>
          <InputGroup size="md">
            <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Repeat password..." {...register("confirmPassword")} />
            <p>{errors.confirmPassword?.message}</p>
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </SimpleGrid>
        <p> Dengan mengklik Register, Anda menyetujui Ketentuan, Kebijakan Privasi, dan Kebijakan Cookie kami. Anda akan menerima Notifikasi SMS dari kami dan bisa berhenti kapan saja.</p>
        <Button type="submit">Register</Button>
      </Stack>
    </form>
  );
}

export default Register;
