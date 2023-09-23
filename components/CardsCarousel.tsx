import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(550),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius={0}
      sx={{ 
        backgroundImage: `url(${image})`,
        display: 'flex', // Agrega display flex al paper
        flexDirection: 'column', // Asegura que los elementos hijos estén en columnas
        justifyContent: 'center', // Alinea los elementos hijos hacia el final del eje principal (abajo)
        alignItems: 'flex-start', // Alinea los elementos hijos hacia el inicio del eje transversal (izquierda)
      }}
      className={classes.card}
    >
      <Group maw={500} ml={50}>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Button color="white" bg={'#00CC99'}>
          Ver más
        </Button>
      </Group>
    </Paper>

  );
}

const data = [
  {
    image:
      'https://www.paraisobymora.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-bg.a9bf32d4.webp&w=3840&q=75',
    title: 'Mora Estela World Tour 2023',
    category: 'música',
  },
  {
    image:
      'https://wallpapercave.com/wp/wp9471452.jpg',
    title: 'The Sauce - Latam Tour 2023',
    category: 'música',
  },
  {
    image:
      'https://th.bing.com/th/id/R.dc935eca752243fa15324c589513520e?rik=9LUOrSeqXkECGA&pid=ImgRaw&r=0',
    title: 'Saturno Tour - World Tour 2023',
    category: 'música',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
  );
}