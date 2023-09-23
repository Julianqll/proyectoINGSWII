import React from 'react'
import { CardsCarousel } from '../components/CardsCarousel';
import { GridDisplay } from '../components/GridDisplay';
import { HeroTicket } from '../components/HeroTicket';
import { HeroInfo } from '../components/HeroInfo';
import { HeroPrices } from '../components/HeroPrices';
import { HeroConditions } from '../components/HeroConditions';
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { ApolloProvider } from '@apollo/react-hooks';
import Layout from '../components/Layout';
import cliente from '../graphql/cliente';
import { AuthenticationImage } from '../components/LoginView';

const LoginPage: NextPageWithLayout = () => {
  return (
        <AuthenticationImage></AuthenticationImage>
  );
}

LoginPage.getLayout = function getLayout(page: ReactElement){
  return (
    <ApolloProvider client={cliente}>
        {page}
    </ApolloProvider>
  )
}


export default LoginPage