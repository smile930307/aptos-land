import { FaTwitter, FaDiscord } from "react-icons/fa"

import { Link } from "react-router-dom"

import styled from "styled-components"

import { v4 } from "uuid"

import { Spin as Hamburger } from "hamburger-react"

import { useState } from "react"


const HomeNav = () => {

	const [navIsOpened, setNavIsOpened] = useState(false)

	const siteLinks = [

		{
			id: v4(),
			text: "HOME",
			href: "/"
		},
		{
			id: v4(),
			text: "ABOUT",
			href: "/about"
		},
		{
			id: v4(),
			text: "ROADMAP",
			href: "/roadmap"
		},
		{
			id: v4(),
			text: "TEAM",
			href: "/team"
		},
		{
			id: v4(),
			text: "FAQ",
			href: "/faq"
		},

	]

	const socialLinks = {

		twitter: "https://twitter.com/AptoslandNFT",

		discord: "https://discord.gg/aptosland"

	}

	return (

		<HomeNavStyle>

			<div className="img-hol">

				<img src="/images/logo-black.png" alt="Site Logo" />

			</div>

			<div className="tab-hol">

				<ul>

					{siteLinks.map(ll => <li key={ll.id}><Link to={ll.href}>{ll.text}</Link></li>)}

				</ul>

			</div>

			<div className="ic-hol">

				<a target="_blank" rel="noopener noreferrer" href={socialLinks.twitter}>

					<FaTwitter />

				</a>

				<a target="_blank" rel="noopener noreferrer" href={socialLinks.discord}>

					<FaDiscord />

				</a>

			</div>

			<div className="hidden-mobile">

				<Hamburger toggled={navIsOpened} toggle={setNavIsOpened} size={25} distance="sm" rounded />

				<div className={"hidden-nav " + (navIsOpened ? "open " : "")}>

					<div className="nav-ham">

						<Hamburger toggled={navIsOpened} toggle={setNavIsOpened} size={30} distance="sm" rounded />

					</div>

					<ul>

						{siteLinks.map(ll => <li key={ll.id}><Link to={ll.href}>{ll.text}</Link></li>)}

						<li className="li-ic-hol">

							<a target="_blank" rel="noopener noreferrer" href={socialLinks.twitter}>

								<FaTwitter />

							</a>

							<a target="_blank" rel="noopener noreferrer" href={socialLinks.discord}>

								<FaDiscord />

							</a>

						</li>

					</ul>

				</div>

			</div>

		</HomeNavStyle>

	)

}

const HomeNavStyle = styled.nav`
	width: 100%;
	padding: 1pc 1.5pc;
	background-color: #fff;

	display: flex;
	align-items: center;
	justify-content: space-between;

	.img-hol {
		height: 2pc;

		img {
			height: 100%;
			object-fit: contain;
		}
	}

	.tab-hol {

		ul {
			display: flex;
			align-items: center;
			justify-content: center;
			list-style-type: none;

			li {

				a {
					padding: 0 0.5pc;
					color: #000;
					text-decoration: none;
					font-weight: bold;
					transition: color .5s;

					&:hover {
						color: #0FF0A9;
					}
				}
			}
		}
	}

	.ic-hol {
		display: flex;
		align-items: center;
		justify-content: center;
		
		a {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1.3pc;
			padding-left: .5pc;
			transition: transform .5s;

			&:hover {
				transform: scale(1.3);
			}
		}
	}

	.hidden-mobile {
		display: none;
	}

	@media screen and (max-width: 650px) {
		
		padding: .5pc 1.5pc;

		.img-hol {
			height: 1.8pc;
		}
			.ic-hol {
			display: none;
		}

		.tab-hol {
			display: none;
		}

		.hidden-mobile {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #0FF0A9;

			.hidden-nav {
				position: fixed;
				top: 0;
				bottom: 0;
				right: 105%;
				height: 100vh;
				width: 100vw;
				z-index: 50000;
				background-color: #0FF0A9;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: right .5s;
				
				&.open {
					right: 0%;
					display: flex;
				}

				.nav-ham {
					position: absolute;
					top: 1pc;
					right: 1pc;

					background-color: #fff;
					color: #0FF0A9;
					border-radius: .5pc;

					/* height: 2pc;
					width: 2pc; */

					display: flex;
					align-items: center;
					justify-content: center;
				}

				ul {
					list-style-type: none;
					text-align: center;

					li {
						display: flex;
						align-items: center;
						justify-content: center;

						a {
							padding: .5pc 0;
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 1.3pc;
							color: #fff;
							text-decoration: none;
							font-weight: bold;
							transition: color .5s;
							
							&:hover {
								color: #000;
							}
						}

						&.li-ic-hol {

							a {
								display: flex;
								align-items: center;
								justify-content: center;
								font-size: 1.5pc;
								color: #000;
								padding: .5pc;
								transition: transform .5s, color .5s;

								&:hover {
									color: #fff;
									transform: scale(1.5);
								}
							}
						}
					}
				}
			}
		}
	}
`

export default HomeNav
