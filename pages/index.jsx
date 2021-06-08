import React from 'react';

import Layout from '@/components/layouts/Layout';

import styles from '@/styles/modules/pages/Home.module.scss';


export function getMeta(){
	return {
		title: 'Title',
		description: 'A description',
		og_title: 'Title',
		og_description: 'A description',
	};
}

export default function Home() {
	return (
		<Layout meta={getMeta()}>
			<h1>
          Welcome to <a className='link' href="https://nextjs.org">Next.js!</a>
			</h1>
		</Layout>
	);
}
