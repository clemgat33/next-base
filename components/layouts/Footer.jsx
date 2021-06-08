import React, {useState, useEffect} from 'react';

import styles from '@/styles/modules/layouts/Footer.module.scss';


export default function Footer(){

	return(
		<>
			<footer className={styles.footer}>
				<ul className={styles.menu_list}>
					<li>
						<div className={styles.copyright}>© Next, All rights reserved.</div>
					</li>
				</ul>
			</footer>
		</>
	);
}
