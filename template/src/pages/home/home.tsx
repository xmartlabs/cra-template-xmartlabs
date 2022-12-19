import React from 'react';

import globalStyles from 'assets/stylesheets/global-styles.module.scss';
import { AppLink, RouteName } from 'routes';

import { Button } from 'common/button';
import styles from './home.module.scss';

const Home = () => (
  <div className={globalStyles.genericContainer}>
    <h1 className={styles.title}>
      Welcome! This is the homepage.
      <AppLink routeName={RouteName.About}>About</AppLink>
      <Button>Hola Mundo</Button>
    </h1>
  </div>
);

export { Home };
