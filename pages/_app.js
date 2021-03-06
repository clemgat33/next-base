import React from 'react';
import PropTypes from 'prop-types';
import '@/styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

MyApp.propTypes = {
	Component: PropTypes.elementType,
	pageProps: PropTypes.any
};
