import { createStyles, Text, SimpleGrid, Container, rem, Title, Divider } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';
import { ArticleCard } from './ArticleCard';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: rem(100),
    width: rem(160),
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  },

  h1:{
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,

  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  dividerLine:{
    color: '#00CC99'
  }
}));


const mockdata = [
  {
    "image": "https://cdn.teleticket.com.pe/images/eventos/tro021_calugalistado.jpg",
    "category": "música",
    "title": "Fórmula Vol. 3 La Gira",
    "footer": "Ver más",
    "author": {
      "name": "Romeo Santos",
      "description": "08 de diciembre 2023",
      "image": "https://cdn.teleticket.com.pe/images/eventos/tro021_calugalistado.jpg"
    }
  },
  {
    "image": "https://cdn.teleticket.com.pe/images/eventos/eli016_calugalistado.jpg",
    "category": "música",
    "title": "The Sauce - Latam Tour 2023",
    "footer": "Ver más",
    "author": {
      "name": "Eladio Carrion",
      "description": "02 de setiembre 2023",
      "image": "https://cdn.teleticket.com.pe/images/eventos/eli016_calugalistado.jpg"
    }
  },
  {
    "image": "https://cdn.teleticket.com.pe/images/eventos/ics037_calugalistado.jpg",
    "category": "música",
    "title": "Saturno Tour - World Tour 2023",
    "footer": "Ver más",
    "author": {
      "name": "Rauw Alejandro",
      "description": "28 de octubre 2023",
      "image": "https://cdn.teleticket.com.pe/images/eventos/ics037_calugalistado.jpg"
    }
  },
  {
    "image": "https://cdn.teleticket.com.pe/images/eventos/tro021_calugalistado.jpg",
    "category": "música",
    "title": "Fórmula Vol. 3 La Gira",
    "footer": "Ver más",
    "author": {
      "name": "Romeo Santos",
      "description": "08 de diciembre 2023",
      "image": "https://cdn.teleticket.com.pe/images/eventos/tro021_calugalistado.jpg"
    }
  },
  {
    "image": "https://cdn.teleticket.com.pe/images/eventos/eli016_calugalistado.jpg",
    "category": "música",
    "title": "The Sauce - Latam Tour 2023",
    "footer": "Ver más",
    "author": {
      "name": "Eladio Carrion",
      "description": "02 de setiembre 2023",
      "image": "https://cdn.teleticket.com.pe/images/eventos/eli016_calugalistado.jpg"
    }
  },
  {
    "image": "https://cdn.teleticket.com.pe/images/eventos/ics037_calugalistado.jpg",
    "category": "música",
    "title": "Saturno Tour - World Tour 2023",
    "footer": "Ver más",
    "author": {
      "name": "Rauw Alejandro",
      "description": "28 de octubre 2023",
      "image": "https://cdn.teleticket.com.pe/images/eventos/ics037_calugalistado.jpg"
    }
  }
];


export function GridDisplay() {
  const items = mockdata.map((item) => <ArticleCard {...item} key={item.title} />);
  const { classes, cx } = useStyles();
  return (
    <Container mt={30} mb={30} size="lg">
      <Title className={classes.h1} mt={50}>
         Destacados
      </Title>  
      <Divider className={classes.dividerLine} my="md" size="lg"/>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50} mt={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}