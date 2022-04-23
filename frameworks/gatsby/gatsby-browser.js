const React = require('react')
const { ApolloProvider } = require("@apollo/client");
const { client } = require("./src/apollo");

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return (
    <ApolloProvider client={client} {...props}>
      {element}
    </ApolloProvider>
  );
};
