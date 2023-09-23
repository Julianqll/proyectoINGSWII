import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { notifications } from '@mantine/notifications';
import { IconX } from '@tabler/icons-react';
import { useRouter } from 'next/router';


const useStyles = createStyles((theme) => ({
  wrapper: {
      minHeight: '100vh', // Establece la altura mínima en el 100% de la altura visible
      width: '100%', // Establece el ancho en el 100% de la pantalla
      backgroundSize: 'cover',
      backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80)',
    },
    

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: '100vh',
      maxWidth: rem(500),
    paddingTop: rem(80),


    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },


}));

const STORAGE_KEY = "session";

export function AuthenticationImage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState('');

  const { classes } = useStyles();
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  

  const handleLogin = async () => {
    console.log("Login");
    if (!valueEmail || !valuePassword)
    {
      setData("Datos Incompletos");
    }
    else
    {
      if (valueEmail != "admin" || valuePassword != "1234")
      {
        setData("Datos fallidos");
      }
      else
      {
        setData("Datos correctos");
      }
    }
  };
  useEffect(() => {
    if (data == "Datos Incompletos"){
      notifications.show({
        id: 'load-data',
        color: 'yellow',
        title: 'No se pudo iniciar sesión',

        message: 
        <>
          Hubo un error al inciar sesión. Datos incompletos
        </>
        ,
        icon: <IconX size="1rem" />,
        autoClose: false
      });
    }
    else if(data == "Datos fallidos"){
      notifications.show({
        id: 'load-data',
        color: 'red',
        title: 'No se pudo iniciar sesión',

        message: 
        <>
          Hubo un error al inciar sesión. Credenciales incorrectas
        </>
        ,
        icon: <IconX size="1rem" />,
        autoClose: false
      });
    }
    else if (data == "Datos correctos"){
      notifications.show({
        id: 'load-data',
        color: 'green',
        title: 'Inicio de sesión correcto',

        message: 
        <>
          ¡Inicio de sesión correcto!
        </>
        ,
        icon: <IconX size="1rem" />,
        autoClose: false
      });
    }
    
}, [data]);

  return (
    <div className={classes.wrapper}>

      <Paper className={classes.form} radius={0} p={30}>
          
      <Text weight={700} size={30} sx={{ lineHeight: 1, color: 'black' }} ta="center" mt={200} mb={50}>
              AERONAVESPRO
      </Text>
      <Text ta="center" mt="md">
          {data}
        </Text>
        <TextInput 
          label="Correo" 
          value={valueEmail}
          onChange={(event) => setValueEmail(event.currentTarget.value)}
          placeholder="Tu correo" 
          size="md" />
        <PasswordInput 
          label="Contraseña" 
          placeholder="Tu contraseña" 
          value={valuePassword}
          onChange={(event) => setValuePassword(event.currentTarget.value)}
          mt="md" 
          size="md" />
        <Button fullWidth mt="xl" size="md" onClick={handleLogin}>
          Ingresar
        </Button>

        <Text ta="center" mt="md">
          ¿No tienes una cuenta?{' '}
          <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
            Regístrate
          </Anchor>
        </Text>
      </Paper>

    </div>
  );
}