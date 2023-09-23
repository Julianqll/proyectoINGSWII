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
    Flex,
  } from '@mantine/core';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: '100vh', // Establece la altura mínima en el 100% de la altura visible
        width: '100%', // Establece el ancho en el 100% de la pantalla
        backgroundSize: 'cover',
        backgroundImage: 'url(https://th.bing.com/th/id/R.75ccb2fd3bb23fcf8a90725c59a9f509?rik=BmT1jS74q8GNWQ&pid=ImgRaw&r=0)',
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
    input: {
        backgroundColor: theme.white,
        borderColor: theme.colors.gray[4],
        color: theme.black,
    
        '&::placeholder': {
          color: theme.colors.gray[5],
        },
      },
    
      inputLabel: {
        color: theme.black,
      },

  }));
  
  export function RegisterImage() {
    const { classes } = useStyles();
    return (
      <div className={classes.wrapper}>

        <Paper className={classes.form} radius={0} p={30}>
            
        <Text weight={700} size={30} sx={{ lineHeight: 1, color: 'black' }} ta="center" mt={150} mb={50}>
                TICKETPRO
        </Text>

        <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        >
        <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        >
        <TextInput
            label="Nombres"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
        <TextInput
            label="Apellidos"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
        </Flex>
        <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        >
        <TextInput
            label="Dirección"
            placeholder="your@email.com"
            mt="md"

            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
        <TextInput
            label="Teléfono"
            placeholder="your@email.com"
            mt="md"

            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
        </Flex>
        <TextInput
            label="Correo"
            placeholder="your@email.com"
            mt="md"

            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
        <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        >
        <TextInput
            label="Nombres"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
        <TextInput
            label="Apellidos"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
        </Flex>

        </Flex>

          <Button fullWidth mt="xl" size="md">
            Registrarse
          </Button>
  
          <Text ta="center" mt="md">
            Ya tienes una cuenta{' '}
            <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
              Ingresa aquí
            </Anchor>
          </Text>
        </Paper>

      </div>
    );
  }