/*
 * Person Messages
 *
 * This contains all the text for the Person container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Person';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Person container!',
  },
});
