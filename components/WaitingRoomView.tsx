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
    Progress,
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

    control: {
        [theme.fn.smallerThan('xs')]: {
          flex: 1,
        },
      },
  }));
  
  export function WaitingImage() {
    const { classes } = useStyles();
    return (
      <div className={classes.wrapper}>

        <Paper className={classes.form} radius={0} p={30}>
            
        <Text weight={700} size={30} sx={{ lineHeight: 1, color: 'black' }} ta="center" mt={200} mb={50}>
                TICKETPRO
        </Text>
  
        <Progress value={75} label="75%" size="xl" radius="xl" />
        <Text weight={500} size={25} sx={{ lineHeight: 1, color: 'black' }} ta="center" mt={40} mb={30}>
                Estás en la cola para la compra de tu ticket
        </Text>
        <Text color="black" mt="md">
                TicketPro es la plataforma de venta de tickets para eventos que te permite comprar de manera segura, rápida y sencilla. Con tan solo 3 simples pasos.
                TicketPro es la plataforma de venta de tickets para eventos que te permite comprar de manera segura, rápida y sencilla. Con tan solo 3 simples pasos.
        </Text>
            <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
                mt={30}
            >
                <Button radius="xl" size="md" className={classes.control} bg={'#00CC99'}>
                  Venta Normal
                </Button>
                <Button radius="xl" size="md" className={classes.control} bg={'#00CC99'}>
                  Venta EXCLUSIVA
                </Button>            
            </Flex>
        </Paper>

      </div>
    );
  }