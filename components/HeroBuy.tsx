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
    Stepper,
    Flex,
  } from '@mantine/core';
  import { IconCheck, IconStar, IconCalendarEvent, IconMapPin, IconMap2, IconClockHour2, IconCategory } from '@tabler/icons-react';
  import image from '../img/undraw_shopping_bags_b0o1.svg';
import { useState } from 'react';
import { UsersRolesTable } from './TablePrices';
import { ImageCheckbox, ImageCheckboxes } from './CheckboxesBuy';
  
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
      maxWidth: rem(600),
      marginRight: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
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
  
  export function HeroBuy() {
    const { classes } = useStyles();

    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const data= [
        {
          "avatar": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
          "name": "Robert Wolfkisser",
          "job": "Engineer",
          "email": "rob_wolf@gmail.com",
          "role": "Collaborator"
        },
        {
          "avatar": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
          "name": "Jill Jailbreaker",
          "job": "Engineer",
          "email": "jj@breaker.com",
          "role": "Collaborator"
        },
        {
          "avatar": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
          "name": "Henry Silkeater",
          "job": "Designer",
          "email": "henry@silkeater.io",
          "role": "Contractor"
        },
        {
          "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
          "name": "Bill Horsefighter",
          "job": "Designer",
          "email": "bhorsefighter@gmail.com",
          "role": "Contractor"
        },
        {
          "avatar": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
          "name": "Jeremy Footviewer",
          "job": "Manager",
          "email": "jeremy@foot.dev",
          "role": "Manager"
        }
      ] 
      const dataNext= [
        {
          "avatar": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
          "name": "Robert Wolfkisser",
          "job": "Engineer",
          "email": "rob_wolf@gmail.com",
          "role": "Collaborator"
        },
        {
          "avatar": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
          "name": "Jill Jailbreaker",
          "job": "Engineer",
          "email": "jj@breaker.com",
          "role": "Collaborator"
        }
      ] 
    return (
      <div className={classes.hero}>
      <Container>
      <Title className={classes.h1} mt={50}>
        Mora Estela World Tour 2023
      </Title>  
      <Divider className={classes.dividerLine} my="md" size="lg"/>
          <div className={classes.inner}>
            <div className={classes.content}>
                <Stepper active={active} onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={false}>
                    <Stepper.Step label="First step" description="Create an account">
                    <Title className={classes.h1} size={20} mt={20} mb={20}>
                       Selecciona tus entradas
                    </Title>  
                    <Image src='https://th.bing.com/th/id/OIP.rsC8e_d6Efu7x-qDTMB4qQHaHa?pid=ImgDet&rs=1' width={200} className={classes.image} m={'auto'} />

                    <UsersRolesTable data={data}></UsersRolesTable>
                    <Flex
                    mih={50}
                    mt={30}
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                    >
                        <Button radius="xl" size="md" className={classes.control} bg={'#00CC99'}>
                        Venta Normal
                        </Button>
                        <Button radius="xl" size="md" className={classes.control} bg={'#00CC99'}>
                        Venta EXCLUSIVA
                        </Button>            
                    </Flex>
                    </Stepper.Step>
                    <Stepper.Step label="Second step" description="Verify email">
                    <Title className={classes.h1} size={20} mt={20} mb={20}>
                       Selecciona tu tipo de entrada
                    </Title> 
                    <ImageCheckboxes></ImageCheckboxes>
                    <Title className={classes.h1} size={20} mt={20} mb={20}>
                       Resumen
                    </Title> 
                    <UsersRolesTable data={dataNext}></UsersRolesTable>

                    </Stepper.Step>
                    <Stepper.Step label="Final step" description="Get full access">
                    <Title className={classes.h1} size={20} mt={20} mb={20}>
                       Seleccione método de pago
                    </Title> 
                    <ImageCheckboxes></ImageCheckboxes>
                    <Title className={classes.h1} size={20} mt={20} mb={20}>
                       Resumen
                    </Title> 
                    <UsersRolesTable data={dataNext}></UsersRolesTable>
                    </Stepper.Step>
                    <Stepper.Completed>
                    <Title className={classes.h1} size={20} mt={20} mb={20}>
                       Finalizar compra
                    </Title>                     
                    <Flex
                    mih={50}
                    mt={30}
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                    >
                        <Button radius="xl" size="md" className={classes.control} bg={'#00CC99'}>
                        Venta Normal
                        </Button>
                        <Button radius="xl" size="md" className={classes.control} bg={'#00CC99'}>
                        Venta EXCLUSIVA
                        </Button>            
                    </Flex>
                    </Stepper.Completed>
                </Stepper>

                <Group position="center" mt="xl">
                    <Button variant="default" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep}>Next step</Button>
                </Group>
            </div>
            <Image src='https://th.bing.com/th/id/OIP.rsC8e_d6Efu7x-qDTMB4qQHaHa?pid=ImgDet&rs=1' height={350} className={classes.image} />

          </div>
        </Container>
      </div>
    );
  }