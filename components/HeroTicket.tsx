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
    Box,
    Divider,
  } from '@mantine/core';
  import { IconCheck, IconStar, IconCalendarEvent, IconMapPin, IconMap2, IconClockHour2, IconCategory } from '@tabler/icons-react';
  import image from '../img/undraw_shopping_bags_b0o1.svg';
  
  const useStyles = createStyles((theme) => ({

    hero: {
      backgroundColor: 'white', // Cambia 'blue' al color que necesites
      width: '100%', // Asegura que se extienda a todo el ancho
    },
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 3)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },

    container:{
      backgroundColor: 'blue'
    },
  
    content: {
      maxWidth: rem(450),
      marginLeft: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginLeft: 0,
      },
    },
  
    title: {
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(32),
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: rem(28),
      },
    },
  
    titleNumber: {
      color: 'white',
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(32),
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
      color: 'black',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    boxTicket:{
      color: 'white',
      backgroundColor: '#00CC99',
      textAlign: 'center',
      padding: theme.spacing.sm,
      borderRadius: theme.radius.md,
    },

    subtitle:{
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      fontWeight: 700
    },
    h1:{
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  
    },
    dividerLine:{
      color: '#00CC99'
    }
  }));
  
  export function HeroTicket() {
    const { classes } = useStyles();
    return (
      <div className={classes.hero}>
      <Container>
      <Title className={classes.h1} mt={50}>
        Mora Estela World Tour 2023
      </Title>  
      <Divider className={classes.dividerLine} my="md" size="lg"/>
          <div className={classes.inner}>
            <Image src='https://th.bing.com/th/id/OIP.rsC8e_d6Efu7x-qDTMB4qQHaHa?pid=ImgDet&rs=1' height={500} className={classes.image} />

            <div className={classes.content}>
              <Box
                w={100}
                className={classes.boxTicket}
                mb={20}
              >
                <Text color="white">
                  SAB
                </Text>
                <Title className={classes.titleNumber} >
                  19
                </Title>
                <Text color="white">
                  JUN 2023
                </Text>
                <Text color="white">
                  16:30PM
                </Text>
              </Box>
              <Title className={classes.title}>
                Información General
              </Title>
  
              <List
                mt={30}
                spacing="sm"
                size="sm"

              >
                <Group mb={10}>
                  <ThemeIcon size={30} radius="xl">
                      <IconMapPin size={rem(20)} stroke={1.5} />
                  </ThemeIcon>
                  <Text className={classes.subtitle} size={15}>
                    Lugar:
                  </Text>
                  <Text size={15}>
                    Centro Cultural Deportivo Lima
                  </Text>
                </Group>
                <Group mb={10} >
                  <ThemeIcon size={30} radius="xl">
                      <IconMap2 size={rem(20)} stroke={1.5} />
                  </ThemeIcon>
                  <Text className={classes.subtitle} size={15}>
                    Dirección:
                  </Text>
                  <Text size={15} className={classes.texto}>
                    Av. Alameda Sur #1530 - Exfundo Marquez de Corpac, Lima, Perú
                  </Text>
                </Group>
                <Group mb={10}>
                  <ThemeIcon size={30} radius="xl">
                      <IconCalendarEvent size={rem(20)} stroke={1.5} />
                  </ThemeIcon>
                  <Text className={classes.subtitle} size={15}>
                    Fecha:
                  </Text>
                  <Text size={15} className={classes.texto}>
                    19-06-2023
                  </Text>
                </Group>
                <Group mb={10}>
                  <ThemeIcon size={30} radius="xl">
                      <IconClockHour2 size={rem(20)} stroke={1.5} />
                  </ThemeIcon>
                  <Text className={classes.subtitle} size={15}>
                    Hora:
                  </Text>
                  <Text size={15} className={classes.texto}>
                    16:30 PM (Hora Perú)
                  </Text>
                </Group>
                <Group mb={10}>
                  <ThemeIcon size={30} radius="xl">
                      <IconCategory size={rem(20)} stroke={1.5} />
                  </ThemeIcon>
                  <Text className={classes.subtitle} size={15}>
                    Categoría:
                  </Text>
                  <Text size={15} className={classes.texto}>
                    Música
                  </Text>
                </Group>

              </List>
  
              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control} bg={'#00CC99'}>
                  Ver eventos
                </Button>
              </Group>
            </div>
          </div>
        </Container>
      </div>
    );
  }