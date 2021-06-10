/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'react-bootstrap';

import Header from 'components/Header';
import Jumbotron from 'components/Jumbotron';
import messages from './messages';

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Jumbotron />
      <Container>
        <FormattedMessage {...messages.header} />
      </Container>
    </React.Fragment>
  );
}
