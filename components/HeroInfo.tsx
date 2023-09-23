import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
  } from '@mantine/core';
  import { IconCheck } from '@tabler/icons-react';
  import image from '../img/undraw_shopping_bags_b0o1.svg';
  
  const useStyles = createStyles((theme) => ({

    hero: {
      backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background, // Cambia 'blue' al color que necesites
      width: '100%', // Asegura que se extienda a todo el ancho
    },
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },

    container:{
      backgroundColor: 'blue'
    },
  
    content: {
      maxWidth: 'auto',
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.white,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(44),
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: rem(28),
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      position: 'relative',
      backgroundColor: '#00CC99',
      borderRadius: theme.radius.sm,
      padding: `${rem(4)} ${rem(12)}`,
    },

    texto :{
      color: 'white'
    }
  }));
  
  export function HeroInfo() {
    const { classes } = useStyles();
    return (
      <div className={classes.hero}>
      <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Acerca del <span className={classes.highlight}>evento</span>
              </Title>
              <Text color="white" mt="md">
                TicketPro es la plataforma de venta de tickets para eventos que te permite comprar de manera segura, rápida y sencilla. Con tan solo 3 simples pasos:
              </Text>
  
              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item className={classes.texto}>
                  <b>Selecciona el evento</b> – Ingresa a la página del evento al cual quieres acudir, 
                  y selecciona el tipo de entrada que desees
                </List.Item>
                <List.Item className={classes.texto}>
                  <b>Recibe tu ticket</b> – Una vez hayas seleccionado tu entrada, para comprarla recibirás un correo con un enlace 
                  a una compra personalizada para ti
                </List.Item>
                <List.Item className={classes.texto}>
                  <b>Paga y disfruta</b> – Cuando hayas recibido el correo, ingresas al enlace y tendrás asegurado tus tickets para pago inmediato. 
                  ¡Ahora a disfrutar de ese evento!
                </List.Item>
              </List>
              <Text color="white" mt="md">
                TicketPro es la plataforma de venta de tickets para eventos que te permite comprar de manera segura, rápida y sencilla. Con tan solo 3 simples pasos.
                TicketPro es la plataforma de venta de tickets para eventos que te permite comprar de manera segura, rápida y sencilla. Con tan solo 3 simples pasos.
                TicketPro es la plataforma de venta de tickets para eventos que te permite comprar de manera segura, rápida y sencilla. Con tan solo 3 simples pasos.

              </Text>
            </div>
          </div>
        </Container>
      </div>
    );
  }