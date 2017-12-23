import React from 'react'
import Link from 'gatsby-link'
import styles from './Footer.module.scss'
import config from '../../../config/SiteConfig'

export default class Footer extends React.Component {
	render() {
		return (
			<footer className={styles.footer}>
				{config.copyright} <a href="https://github.com/deepen87/personal-blog">Deepen Theme</a>
				{' by '}
				<a href="https://www.deependangol.netlify.com">Deepen Dangol</a>.
			</footer>
		)
	}
}
