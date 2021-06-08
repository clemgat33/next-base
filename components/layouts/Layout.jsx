import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import styles from '@/styles/modules/layouts/Layout.module.scss';


export default function Layout({children, meta}){

	return(
		<>
			<Head>
				<title>{meta?.title ? meta.title : 'Next-Basic'}</title>
				<meta name='description' content={meta.description} />
				<meta property="og:type" content="website" />
				<meta name='og:title' content={meta.og_title} />
				<meta property="og:description" content={meta.og_description} />
				<meta property="og:image" content={meta.og_image ? meta.og_image : ''} />
			</Head>
			<div className={styles.container}>
				<Header/>
				<main className={styles.main}>
					{children}
				</main>
				<Footer/>
			</div>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	meta: PropTypes.object,
};
