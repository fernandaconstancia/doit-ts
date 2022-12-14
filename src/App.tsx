import {
  Heading,
  Flex,
  Text,
  Grid,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
// import { Routes } from "./routes";
import LogoSecondary from "./assets/logo-secondary.svg";
import { Input } from "./components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface SignInData {
  email: string;
  password: string;
}

export const App = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => console.log(data);

  return (
    <Flex
      padding="10px 15px"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-r, purple.800 65%, white 35%)"
      color="white"
    >
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
      >
        <Grid w="100%" paddingRight="100px">
          <Image src={LogoSecondary} alt="doit" boxSize="128px" />
          <Heading as="h1">O jeito fácil, grátis</Heading>
          <Text>Flexível e atrativo de gerenciar</Text>
          <b>Seus projetos em uma única plataforma</b>
        </Grid>
        <Grid
          // onSubmit={handleSubmit(handleSignIn)}
          as="form"
          mt="4"
          w="50%"
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bg="white"
          color="gray.900"
        >
          <Heading size="lg">Bem vindo de volta!</Heading>
          <VStack spacing="5" mt="6">
            <Input
              icon={FaEnvelope}
              placeholder="Digite seu login"
              label="Login"
              type="email"
              // error={errors.email}
              {...register("email")}
            />
            <Input
              icon={FaLock}
              placeholder="Digite sua senha"
              type="password"
              // error={errors.email}
              {...register("password")}
            />
          </VStack>
          <Button type="submit">Entrar</Button>
        </Grid>
      </Flex>
    </Flex>
  );
};
