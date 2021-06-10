/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import BrowseContainer from 'containers/Browse';
import Jumbotron from 'components/Jumbotron';
import Header from 'components/Header';
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
      <BrowseContainer />
    </React.Fragment>
  );
}
