// source: https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl#jest-mock
import React from 'react';

const Intl = require.requireActual('react-intl');

// Here goes intl context injected into component, feel free to extend
const intl = {
  formatMessage: ({ defaultMessage }) => defaultMessage,
};

Intl.injectIntl = Node => {
  const renderWrapped = props => <Node {...props} intl={intl} />;
  renderWrapped.displayName = `Intl(${Node.displayName ||
    Node.name ||
    'Component'})`;
  return renderWrapped;
};

module.exports = Intl;
