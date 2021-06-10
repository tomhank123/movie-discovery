/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import Collections from 'components/Collections';
import Jumbotron from 'components/Jumbotron';
import Header from 'components/Header';
import collections from 'fixtures/collections';
import messages from './messages';

export default function HomePage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Movie Discovery</title>
        <meta
          name="description"
          content={<FormattedMessage {...messages.header} />}
        />
      </Helmet>
      <Header />
      <Jumbotron />
      <Container>
        <Collections
          isSwiper
          items={collections}
          loading={false}
          error={false}
        />
      </Container>
    </React.Fragment>
  );
}
