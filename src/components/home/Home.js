import { useEffect, useRef, useState } from "react"

import { FaCheck, FaDiscord, FaTwitter } from "react-icons/fa"

import styled from "styled-components"

import { v4 } from "uuid"

import { addNumbers } from "../../helpers/Controller"

import HomeNav from "./HomeNav"

import QuestionPack from "./QuestionPack"


const Home = () => {

	const socialLinks = {

		twitter: "https://twitter.com/AptoslandNFT",

		discord: "https://discord.gg/aptosland"

	}

	// Length must be a multiple of 3
	const roadMap = [
		{
			id: v4(),
			top: "Q4 - 2022",
			title: "BOT DEVELOPMENT",
			text: "Development of verification and sales bots using a private indexer to maximize efficent of the bots.",
			status: "done",
			end: undefined
		},
		{
			id: v4(),
			top: "Q4 - 2022",
			title: "COMMUNITY ENABLING",
			text: "Enabling Top Aptos collections through our highly efficent bots.",
			status: "done",
			end: undefined
		},
		{
			id: v4(),
			top: "Q4 - 2022",
			title: "GENESIS PASSLAUNCH",
			text: "The intial mint of Aptos Land's genesis pass. A supply of 2,500 NFTs minted on the Aptos Blockchain.",
			status: "doing",
			end: "right"
		},
		{
			id: v4(),
			top: "Q1 - 2023",
			title: "LAND PLOTS LAUNCH",
			text: "The first step towards aptos lands' metaverse, mint and free claim for our genesis pass holders.",
			status: "not-done",
			end: "left"
		},
		{
			id: v4(),
			top: "Q1 - 2023",
			title: "SEASON 2 PASS LAUNCH",
			text: "The second collection of passes released for our community. Free claim of our second season  will be given to our holders. ",
			status: "not-done",
			end: undefined
		},
		{
			id: v4(),
			top: "Q1 - 2023",
			title: "A.I TOOLS LAUNCH",
			text: "Our currently beta A.I tools will be fully developed and tested, then access will be given to our pass holders.",
			status: "not-done",
			end: undefined
		},
		{
			id: v4(),
			top: "Q2 - 2023",
			title: "METAVERSE REVENUE STREAMS",
			text: "One of our main goals is to enable other NFT projects to generate revenue streams. This will be done in this phase.",
			status: "not-done",
			end: undefined
		},
		{
			id: v4(),
			top: "Q2 - 2023",
			title: "NATIVE TOKEN $X GOES LIVE",
			text: "Our native token, used to further empower our community goes live on the Aptos Blockchain.",
			status: "not-done",
			end: undefined
		},
		{
			id: v4(),
			top: "2023",
			title: "TO INFINITY AND BEYOND",
			text: "This is only a portion of what we have planned, as long as there's a blockchain, there will be Aptos Land.",
			status: "not-done",
			end: undefined
		},
	]

	const teamInfo = [
		{
			id: v4(),
			name: "ACIE",
			image: "/images/acie.png",
			twitter: "https://twitter.com/AcieDotEth",
		},
		{
			id: v4(),
			name: "RYUK",
			image: "/images/ryuk.png",
			twitter: "https://twitter.com/ryuk_dev",
		},
		{
			id: v4(),
			name: "FLOFI",
			image: "/images/flo.png",
			twitter: "https://twitter.com/flofi_dev",
		},
		{
			id: v4(),
			name: "YOGESH",
			image: "/images/yog.png",
			twitter: "https://twitter.com/nft_yogesh",
		},
	]

	const metaVerseInfo = [
		{
			id: v4(),
			title: "Big foot NFT",
			image: "/images/bigfoot.png",
			link: "https://twitter.com/BigfootTownNFT"
		},
		{
			id: v4(),
			title: "Aptosamingos",
			image: "/images/aptomingos.png",
			link: "https://twitter.com/Aptomingos"
		},
		{
			id: v4(),
			title: "Aptosmonkeys",
			image: "/images/aptomonkeys.png",
			link: "https://twitter.com/AptosMonkeys"
		}
	]

	const faqInfo = [

		{
			id: v4(),
			question: "What is the initial supply for Aptos Lands genesis collection?",
			answer: "The total supply for our genesis collection will be a total of 2,500 NFTs."
		},
		{
			id: v4(),
			question: "When is the mint date for Aptos Land going to be?",
			answer: "Exact date is also TBA but it will be early december."
		},
		{
			id: v4(),
			question: "What is the mint price for Aptos Land going to be?",
			answer: "Exact amount is TBA but it will be less than 4 APT."
		},
		{
			id: v4(),
			question: "What benefits does a genesis pass holder get?",
			answer: <>Genesis pass holders will be our highest priority, the benefits for holding our genesis pass can be seen <a href="https://whitepaper.aptosland.io/meta-pass/genesis-pass" target="_blank" rel="noopener noreferrer">here</a>.</>
		},
		{
			id: v4(),
			question: "What is the purpose of holding multiple passes?",
			answer: `The exact benefits are TBA, what we can say for now is that our current reward model is based on [Reward] PER [NFT Held].`
		},

	]

	const [initialize, setInitialize] = useState(true)

	const [comming, setComming] = useState("sentinel")

	const degensRef = useRef(null)

	const communityRef = useRef(null)

	useEffect(() => {

		function isElementInViewport(el) {

			var rect = el.getBoundingClientRect();

			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
				rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
			);

		}

		if (initialize) {

			setInitialize(false)

			let runCounters = true

			window.addEventListener("scroll", e => {

				if (isElementInViewport(degensRef.current.parentElement)) {

					if (runCounters) {

						runCounters = false

						addNumbers(0, 200000, degensRef.current, 10, 500)

						addNumbers(0, 35, communityRef.current, 100, 1)

					}

				}

			})

		}

	}, [initialize])


	return (

		<HomeStyle>

			<HomeNav />

			<section className="intro" id="intro">

				<div className="l-side">

					<img src="/images/home-desktop-img.png" alt="Some stuff" />

					<img className="hidden" src="/images/home-mobile-img.png" alt="Some stuff" />

				</div>

				<div className="r-side">

					<h1>THE LAND OF OPPORTUNITIES</h1>

					<p>
						Aptos Land is the first ever Metaverse on
						$Aptos. Focused on building more than
						just a project, a whole ecosystem that
						enables the Aptos community with metatools & business opportunities
						in the metaverse.
					</p>

					<div className="end-btn">

						<a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="ang-btn">

							<div className="lb-side">

								<FaTwitter color="#00ACEE" />

								<div className="mm-side"></div>

							</div>

							<div className="rb-side" style={{ backgroundColor: "#00ACEE" }}>

								Twitter

							</div>

						</a>

						<a href={socialLinks.discord} target="_blank" rel="noopener noreferrer" className="ang-btn">

							<div className="lb-side">

								<FaDiscord color="#5865F2" />

								<div className="mm-side"></div>

							</div>

							<div className="rb-side" style={{ backgroundColor: "#5865F2" }}>

								Discord

							</div>

						</a>

					</div>

				</div>

				<div className="abs-img">

					<img src="/images/iss-bts.png" alt="just a polygon" />

				</div>

			</section>

			<section className="about" id="about">

				<div className="head">

					<span>ABOUT</span>

					<span className="underline"></span>

				</div>

				<div className="body">

					<div className="l-side">

						<small>ENABLING THE APTOS ECO-SYSTEM SINCE DAY ONE</small>

						<h1>Enter The Land of Endless Opportunities.</h1>

						<p>

							Aptos Lands' hand print can be seen throughout
							the Aptos ecosystem, through our bots we have
							been enabling the top communities ever since
							day one.

						</p>

						<a href="https://whitepaper.aptosland.io/" target="_blank" rel="noopener noreferrer">Whitepaper</a>

					</div>

					<div className="r-side">

						<div className="top">

							<div className="pack">

								<span className="counter"><span className="cc-nn" ref={degensRef}>0</span>+</span>

								<span className="txt">Degens Enabled</span>

							</div>

						</div>

						<div className="bottom">

							<div className="pack">

								<span className="counter"><div className="cc-nn" ref={communityRef}>0</div>+</span>

								<span className="txt">Communities Served</span>

							</div>

							<div className="pack">

								<span className="counter">2</span>

								<span className="txt">Utility Bots</span>

							</div>

						</div>

					</div>

					<div className="spiral">

						<img src="/images/helix.png" alt="helix" />

					</div>

				</div>

			</section>

			<section className="comming" id="comming">

				<div className="head">

					<h2>Aptos Lands <br /> Bots</h2>

					<div className="com-switchs">

						<div className="com-switch" onClick={() => setComming("sentinel")}>

							<img src="/images/co-ham.png" alt="nav ham" />

							<p>Sentinel</p>

						</div>

						<div className="com-switch" onClick={() => setComming("excalibur")}>

							<img src="/images/co-shield.png" alt="nav ham" />

							<p>Excalibur</p>

						</div>

					</div>

				</div>

				<div className="body">

					{(comming === "sentinel") && <>

						<div className="l-side">

							<div className="img-hol">

								<img src="/images/stack.png" alt="Stack" />

							</div>

						</div>

						<div className="r-side">

							<h1>

								Sentinel.

								<br />

								[Coming Soon]

							</h1>

							<p>

								A web based Dapp focused on enabling the Aptos community.

							</p>

							<p className="fe">Features:</p>

							<ul className="features">

								<li>

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<h3>Aptos NFT and Twitter Data</h3>

										<p>
											Check how much hype a project has generated on Twitter and
											compare it with their volume, listed count and floor price.
										</p>

									</div>

								</li>

								<li>

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<h3>Project Leaderboard</h3>

										<p>
											Scroll through hundreds of Aptos NFT projects. Filter on listed count,
											Twitter mentions, velocity, volume and floor price.
										</p>

									</div>

								</li>

								<li>

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<h3>Top Floor Movers</h3>

										<p>
											See which projects have increased their floor price the most in a
											specified timeframe.
										</p>

									</div>

								</li>

								<li>

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<h3>Market Indicators</h3>

										<p>
											Total percentage range of the market compared to the previous day,
											according to: Floor price, total listings and total activity.
										</p>

									</div>

								</li>

								<li>

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<h3>Smart Money Tracker</h3>

										<p>
											Smart money inflow and outflow are what highly profitable wallets have
											been buying or selling within the past day or week.
										</p>

									</div>

								</li>

							</ul>

						</div>

					</>}

					{(comming === "excalibur") && <>

						<div className="l-side exx-caa">

							<div className="img-hol">

								<img src="/images/excalibur.png" alt="Shield" />

							</div>

						</div>

						<div className="r-side exx-caa">

							<h1>

								Excalibur

							</h1>

							<p>

								Aptos Lands' tools that currently support and uplift the different aptos communities.

							</p>

							<p className="fe">Bots:</p>

							<ul className="features ex-ca">

								<li className="t-lvl">

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<h3>Holder Verification Bot</h3>

									</div>

								</li>

								<li>

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<p>Roles based on the NFT collection,</p>

									</div>

								</li>

								<li>

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<p>Roles based on the number of NFT, </p>

									</div>

								</li>

								<li>

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<p>Roles based on the rarity [coming soon],</p>

									</div>

								</li>

								<li>

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<p>Roles based on the attributes [coming soon].</p>

									</div>

								</li>

								<li className="t-lvl" style={{ paddingTop: "1pc" }}>

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<h3>Sales Alert Bot</h3>

									</div>

								</li>

								<li>

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<p>Discord alerts</p>

									</div>

								</li>

								<li>

									<div className="lil-s">

										<FaCheck />

									</div>

									<div className="lir-s">

										<p>Twitter alerts</p>

									</div>

								</li>

							</ul>

						</div>

					</>}

				</div>

			</section>

			<section className="road-map" id="road-map">

				<div className="head">

					<span>ROADMAP</span>

					<span className="underline"></span>

				</div>

				<div className="body">

					<div className="road-map-hol">

						{roadMap.map((item, index) => <div key={item.id} className="road-box">

							<div className="inner-road">

								<div className="top">

									<h3>{item.top}</h3>

									<span className="underline"></span>

								</div>

								<div className="mid">

									<div className={"outer-c " + (item.status === "done" ? "done " : "")}>

										<div className={"inner-c " + (item.status === "done" ? "done " : "")}>

											{item.status === "done" && <FaCheck />}

											{item.status === "doing" && <img src="images/load.png" alt="loading" />}

										</div>

										{(!(Math.floor((index + .9) / 3) % 2) && ((index + 1) % 3)) ? <div className={"left-right-line " + (item.status === "done" ? "done " : "")}></div> : <></>}

										{((Math.floor((index + .9) / 3) % 2) && ((index + 3) % 3)) ? <div className={"right-left-line " + (item.status === "done" ? "done " : "")}></div> : <></>}

										{item.end === "right" ? <div className={"right-end " + (item.status === "done" ? "done " : "")}>

											<div className="verti">

												<div className="back"></div>

											</div>

										</div> : <></>}

										{item.end === "left" ? <div className={"left-end " + (item.status === "done" ? "done " : "")}>

											<div className="verti">

												<div className="back"></div>

											</div>

										</div> : <></>}

										<div className={"mobile-lines " + (item.status === "done" ? "done " : "") + (index + 1 === roadMap.length ? "last-oo " : "")}>

											<div className={"verti"}>

												<div className="back"></div>

											</div>

										</div>

									</div>

								</div>

								<div className="end">

									<h4>{item.title}</h4>

									<p>{item.text}</p>

								</div>

							</div>

						</div>)}

					</div>

					<div className="tl-abs">

						<img src="/images/toros-3.png" alt="A Torous" />

						<img src="/images/toros-6.png" className="mobile" alt="A Torous" />

					</div>

					<div className="br-abs">

						<img src="/images/toros-4.png" alt="A Torous" />

						<img src="/images/toros-7.png" className="mobile" alt="A Torous" />

					</div>

				</div>

			</section>

			<section className="team" id="team">

				<div className="head">

					<span>TEAM</span>

					<span className="underline"></span>

				</div>

				<div className="body">

					{teamInfo.map(item => <a href={item.twitter} target="_blank" rel="noopener noreferrer" className="char-pack" key={item.id}>

						<div className="im">

							<img src={item.image} alt={item.name} />

						</div>

						<div className="det">

							<p className="name">{item.name}</p>

							<span>

								<FaTwitter />

							</span>

						</div>

					</a>)}

				</div>

			</section>

			<section className="metaverse" id="metaverse">

				<div className="head">

					<p>Metaverse Partners</p>

					<span>[Private Islands]</span>

					<span className="underline"></span>

				</div>

				<div className="body">

					{metaVerseInfo.map(item => <a href={item.link} target="_blank" rel="noopener noreferrer" className="char-pack" key={item.id}>

						<div className="im">

							<img src={item.image} alt={item.title} />

						</div>

						<div className="det">

							<p className="name">{item.title}</p>

						</div>

					</a>)}

				</div>

				<div className="end-img">

					<img src="/images/metaverse.png" alt="a cylinder" />

				</div>

			</section>

			<section className="faq" id="faq">

				<div className="head">

					<span>FAQ</span>

					<span className="underline"></span>

				</div>

				<div className="body">

					{faqInfo.map((faq, index) => <QuestionPack key={faq.id} question={faq.question} answer={faq.answer} open={index === 0} />)}

				</div>

			</section>

			<section className="end" id="end">

				<div className="end-left">

					<div className="img-ppt">

						<img src="/images/logo-black.png" alt="Site Logo" />

					</div>

					<div className="txt-ppt">

						Aptos land : Aptos Land is the first ever Metaverse on $Aptos.

						<br />

						That enables the Aptos community with metatools and business opportunities in our metaverse

					</div>

				</div>

				<div className="end-in">

					<h4>Connect With Us</h4>

					<div className="end-icons">

						<a target="_blank" rel="noopener noreferrer" href={socialLinks.twitter}>

							<FaTwitter />

						</a>

						<a target="_blank" rel="noopener noreferrer" href={socialLinks.discord}>

							<FaDiscord />

						</a>

					</div>

				</div>

				<div className="end-right">

					Copyright ?? 2022. Made with <span style={{ color: "red" }}>???</span> by Aptosland

				</div>

				<div className="end-img">

					<img src="/images/mountain.png" alt="a mountain" />

				</div>

			</section>

		</HomeStyle>

	)

}

const HomeStyle = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	section.intro {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1pc 0;
		max-width: 1920px;
		width: 100%;
		margin: 0 auto;

		.l-side {
			min-width: 40%;
			
			@media screen and (max-width: 800px) {
				min-width: 30%;
			}

			img {

				&.hidden {
					display: none;
				}

				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}

		.r-side {
			/* width: 50%; */
			padding: 1pc 0;
			padding-left: 3pc;
			
			p {
				@media screen and (min-width: 1000px) {
					font-size: 1.3pc;
					line-height: 2pc;
				}
				@media screen and (min-width: 1100px) {
					font-size: 2pc;
					line-height: 3.5pc;
				}
				@media screen and (min-width: 1400px) {
					font-size: 2pc;
					line-height: 3.6pc;
				}
			}

			h1 {
				font-size: 2.8pc;
				line-height: 3.5pc;
				padding-bottom: .5pc;
				
				@media screen and (min-width: 1000px) {
					font-size: 3.5pc;
					line-height: 4pc;
					padding-bottom: 1pc;
				}
				
				@media screen and (min-width: 1100px) {
					font-size: 4pc;
					line-height: 5pc;
					padding-bottom: 1pc;
				}
				
				@media screen and (min-width: 1400px) {
					font-size: 5pc;
					line-height: 6pc;
					padding-bottom: 1pc;
				}

				@media screen and (max-width: 900px) {
					font-size: 2pc;
					line-height: 3pc;
				}
				
				@media screen and (max-width: 800px) {
					font-size: 1.8pc;
					line-height: 2.5pc;
				}
				
				@media screen and (max-width: 700px) {
					font-size: 1.5pc;
					line-height: 2pc;
				}
			}

			.end-btn {
				display: flex;
				align-items: center;
				padding-top: 1pc;

				a.ang-btn {
					display: flex;
					margin-right: 1pc;
					text-decoration: none;
					border-radius: .3pc;
					overflow: hidden;
					transition: transform .5s;
					text-decoration: none;

					&:hover {
						transform: scale(1.1);
					}

					.lb-side {
						display: flex;
						align-items: center;
						justify-content: center;
						padding: .3pc 0.6pc;
						background-color: #fff;
					}

					.mm-side {
						position: absolute;
						left: 98%;
						z-index: 5;
						width: 0; 
						height: 0; 
						border-top: 6px solid transparent;
						border-bottom: 6px solid transparent;
						border-left: 6px solid #fff;
					}

					.rb-side {
						display: flex;
						align-items: center;
						justify-content: center;
						padding: .3pc 0.6pc;
						color: #fff;
					}
				}

				@media screen and (min-width: 1100px) {

					a.ang-btn {
						margin-right: 1.5pc;
						border-radius: .3pc;
						font-size: 1.3pc;

						.lb-side {
							padding: .8pc 1pc;
						}

						.mm-side {
							border-top: 10px solid transparent;
							border-bottom: 10px solid transparent;
							
							border-left: 10px solid #fff;
						}

						.rb-side {
							padding: .8pc 1pc;
							/* padding: .3pc 0.6pc; */
						}
					}
				}
			}
		}

		.abs-img {
			position: absolute;
			bottom: 0;
			right: 0;
			height: 200px;
			z-index: -1;

			img {
				height: 100%;
			}
		}

		@media screen and (max-width: 550px) {

			flex-direction: column;
			text-align: center;

			.l-side {
				
				img {
					display: none;
					&.hidden {
						display: initial;
					}
				}
			}
			
			.r-side {
				padding: 1pc;


				.end-btn {
					display: flex;
					width: 100%;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}

	section.about {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 2pc 0;
		max-width: 1920px;
		width: 100%;
		margin: 0 auto;

		.head {
			text-align: center;
			/* border-bottom: 1px solid #0BBF8C; */
			font-weight: bold;
			margin-bottom: 1.5pc;
		}

		.body {
			background-image: url("/images/about-bg.png");
			background-repeat: repeat;
			background-position: center;
			background-size: contain;
			padding: 2pc;
			display: flex;
			justify-content: center;
			font-family: "DM Sans";
			width: 100%;

			.l-side {
				width: 65%;
				@media screen and (min-width: 1100px) {
					width: 75%;
				}
				
				@media screen and (max-width: 900px) {
					width: 55%;
				}

				small {
					opacity: .8;
					padding-bottom: 1.5pc;
					display: block;
					
					@media screen and (max-width: 900px) {
						padding-bottom: .5pc;
					}
				}

				p {
					@media screen and (min-width: 1000px) {
						font-size: 1.3pc;
						line-height: 2pc;
					}
					@media screen and (min-width: 1100px) {
						font-size: 2pc;
						line-height: 3.5pc;
					}
					@media screen and (min-width: 1400px) {
						font-size: 2pc;
						line-height: 3.6pc;
					}
				}

				h1 {
					font-family: Helvetica;
					font-weight: bold;
					font-size: 3pc;
					line-height: 4pc;
					padding-bottom: 1pc;
					background: linear-gradient(94.78deg, #FFFFFF 1.7%, rgba(255, 255, 255, 0.865) 100.26%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					background-clip: text;

					text-shadow: 0px 10px 10px #000000;

					@media screen and (min-width: 1000px) {
						font-size: 3.5pc;
						line-height: 4pc;
						padding-bottom: 1pc;
					}

					@media screen and (min-width: 1100px) {
						font-size: 4pc;
						line-height: 5pc;
						padding-bottom: 1pc;
					}
					
					
					@media screen and (min-width: 1400px) {
						font-size: 5pc;
						line-height: 6pc;
						padding-bottom: 1pc;
					}

					@media screen and (max-width: 900px) {
						font-size: 2pc;
						line-height: 2.6pc;
					}
				}

				a {
					display: inline-block;
					outline: 0 none;
					cursor: pointer;
					padding: 0 .5rem;
					margin-top: 2pc;
					padding: .5pc 2pc;
					border-radius: .3pc;
					color: #fff;
					border: 0 none;
					outline: 0 none;
					text-decoration: none;
					background: linear-gradient(95.46deg, #0FF0A9 0%, #067E5C 101.07%);
					transition: transform .5s;

					&:hover {
						transform: scale(1.1);
					}

				}
			}

			.r-side {
				width: 30%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				@media screen and (min-width: 1100px) {
					width: 20%;
				}

				.pack {
					text-align: right;
					padding: 1pc 0;

					.counter {
						display: block;
						font-family: Helvetica;
						font-weight: bold;
						font-size: 3pc;
						line-height: 4pc;

						background: linear-gradient(94.78deg, #FFFFFF 1.7%, rgba(255, 255, 255, 0.865) 100.26%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						background-clip: text;

						text-shadow: 0px 10px 10px #000000;

						.cc-nn {
							display: contents;
						}
						
						@media screen and (max-width: 900px) {
							font-size: 2pc;
							line-height: 2.6pc;
						}
					}

					.txt {
						display: block;
					}
				}
			}

			.spiral {
				position: absolute;
				opacity: .7;
				top: 3pc;
				left: 0;
				z-index: -1;
				width: 10vw;
				max-width: 100px;

				img {
					width: 100%;
				}
			}

			
			@media screen and (max-width: 600px) {
				flex-direction: column;

				.l-side {
					width: 100%;
				}

				.r-side {
					padding-top: 1pc;
					width: 100%;

					.pack {
						text-align: center;
					}

					.bottom {
						display: flex;
						align-items: center;
						justify-content: space-between;
					}

					.pack>.counter {
						font-size: 3pc;
						line-height: 4pc;
					}
				}
			}
		}
	}

	section.comming {
		display: flex;
		align-items: center;
		padding: 2pc 0;
		max-width: 1920px;
		width: 100%;
		margin: 0 auto;
		font-family: "DM Sans";
		flex-direction: column;

		.head {
			text-align: center;
			padding-bottom: 2pc;

			.com-switchs {
				display: flex;
				align-items: center;
				justify-content: center;
				padding-top: 0.5pc;
				
				.com-switch {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					padding: 1pc;
					margin: 0 .5pc;
					background-color: rgba(134, 134, 134, 0.3);
					border: 1px solid #0BBF8C;
					min-width: 180px;
					border-radius: 9px;
					cursor: pointer;
					transition: background-color .5s, border .5s, transform .5s;

					&:hover {
						background-color: #067E5C;
						border: 1px solid transparent;
						transform: scale(1.1);
					}

					img {
						/* width: 35px; */
						display: block;
						margin: 0 auto;
						margin-bottom: .6pc;
					}

					@media screen and (max-width: 500px) {
						min-width: 120px;
						padding: .8pc;

						img {
							width: 20%;
						}
					}
				}
			}
		}

		.body {
			display: flex;
			width: 100%;
			align-items: center;

			@keyframes opacity-animation {
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			}
			
			.l-side {
				width: 55%;
				display: flex;
				align-items: center;
				justify-content: center;
				animation: opacity-animation .5s ease-in 1;
				
				&.exx-caa {
					/* width: 50%; */
					.img-hol {
						img {
							width: 60%;
						}
					}
				}

				.img-hol {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 80%;
					/* background-color: #0FF0A9; */
					background-image: url("/images/stack-side.png");
					background-position: center;
					background-size: contain;
					background-repeat: no-repeat;
	
					@keyframes bouge {
						from {
							transform: translateY(50px);
						}
						to {
							transform: translateY(-50px);
						}
					}
					
					img {
						display: block;
						width: 80%;
						animation: bouge 5s infinite alternate-reverse ease-in-out;
						z-index: -1;
						/* filter: drop-shadow(22px -15px 5px rgba(196, 196, 196, 0.191)); */
					}
				}
			}
			
			.r-side {
				width: 45%;
				padding-right: 1pc;
				animation: opacity-animation .5s ease-in 1;
				
				&.exx-caa {
					/* width: 50%; */
				}
	
				h1 {
					font-family: Helvetica;
					font-weight: bold;
					font-size: 3pc;
					line-height: 4pc;
					/* padding-bottom: 1pc; */
					background: linear-gradient(94.78deg, #FFFFFF 1.7%, rgba(255, 255, 255, 0.865) 100.26%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					background-clip: text;
	
					text-shadow: 0px 10px 10px #000000;
	
					@media screen and (max-width: 900px) {
						font-size: 2pc;
						line-height: 2.6pc;
					}
				}

				.fe {
					font-size: 1.2pc;
					padding: .3pc 0;
				}
	
				ul {
					list-style-type: none;

					&.ex-ca {

						li {
							
							.lil-s {
								font-size: 1.3pc;
								padding-bottom: 0pc;
								padding-right: .8pc;
							}
							
							.lir-s {
								padding-bottom: 0pc;
								font-style: italic;
							}
						}

					}
	
					li {
						display: flex;

						&.t-lvl {

							.lil-s {
								opacity: 0;
							}

							.lir-s {
								font-style: normal;
							}
						}
						
						.lil-s {
							display: flex;
							align-items: center;
							font-size: 2pc;
							padding-right: .5pc;
						}
	
						.lir-s {
							line-height: 1.5pc;
							padding-bottom: 1pc;
	
							h3 {
								font-size: 1pc;
								line-height: 1.5pc;
								color: #2ED8A9;
							}
						}
					}
				}
			}
	
			@media screen and (max-width: 1000px) {
				flex-direction: column;
	
				.r-side.exx-caa,
				.r-side {
					width: 80%;
					padding-right: 0;
				}		
	
				.l-side.exx-caa,
				.l-side {
					padding-top: 1.5pc;
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					
					.img-hol {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 80%;
						max-width: 400px;
					}
				}
			}
		}
	}

	section.road-map {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 2pc 0;
		max-width: 1920px;
		width: 100%;
		margin: 0 auto;

		.head {
			text-align: center;
			/* border-bottom: 1px solid #0BBF8C; */
			font-weight: bold;
			margin-bottom: 1.5pc;
		}

		.body {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;

			.road-map-hol {
				display: flex;
				align-items: stretch;
				justify-content: center;
				flex-wrap: wrap;
				max-width: 1000px;

				.road-box {
					width: 300px;
					text-align: center;
					padding-bottom: 2pc;
					
					.inner-road {
						width: 200px;
						margin: 0 auto;
						flex: 1;
						
						.top {
							
							.underline {
								height: 1px;
								background: linear-gradient(180deg, #0BBF8C 0%, #067E5C 100%);
								height: 3px;
								width: 40%;
								margin: 0 auto;
								display: block;
							}
						}

						.mid {
							margin-top: 1pc;
							margin-bottom: 1pc;
							display: flex;
							align-items: center;
							justify-content: center;
							
							.outer-c {
								display: flex;
								align-items: center;
								justify-content: center;
								width: 2.5pc;
								height: 2.5pc;
								border-radius: 50%;
								border: 2px solid #fff;

								.mobile-lines {
									display: none;
								}

								.left-right-line {
									display: block;
									position: absolute;
									border: 1px dashed #fff;
									width: 260px;
									height: 2px;
									left: 100%;
									
									&.done {
										border: 1px dashed #0FF0A9;
									}
								}

								.right-left-line {
									display: block;
									position: absolute;
									border: 1px dashed #fff;
									width: 260px;
									height: 2px;
									right: 100%;
									
									&.done {
										border: 1px dashed #0FF0A9;
									}
								}

								.right-end {
									display: block;
									position: absolute;
									border: 1px dashed #fff;
									width: 110px;
									height: 2px;
									left: 100%;
									
									.verti {
										position: absolute;
										top: 100%;
										right: 0;
										height: 349px;
										width: 2px;
										border: 1px dashed #fff;
										
										.back {
											position: absolute;
											bottom: 0%;
											right: 0;
											width: 108px;
											height: 2px;
											border: 1px dashed #fff;
										}
									}
									
									&.done {
										border-color: #0FF0A9;
										
										.verti,
										.verti .back {
											border-color: #0FF0A9;
										}
									}
								}

								.left-end {
									display: block;
									position: absolute;
									border: 1px dashed #fff;
									width: 110px;
									height: 2px;
									right: 100%;
									
									.verti {
										position: absolute;
										top: 100%;
										left: 0;
										height: 349px;
										width: 2px;
										border: 1px dashed #fff;
										
										.back {
											position: absolute;
											bottom: 0%;
											left: 0;
											width: 108px;
											height: 2px;
											border: 1px dashed #fff;
										}
									}
									
									&.done {
										border-color: #0FF0A9;
										
										.verti,
										.verti .back {
											border-color: #0FF0A9;
										}
									}
								}
								
								&.done {
									border: 2px solid #0FF0A9;
								}
								
								.inner-c {
									display: flex;
									align-items: center;
									justify-content: center;
									width: 1.8pc;
									height: 1.8pc;
									border-radius: 50%;
									border: 1px solid #ccc;
									
									&.done {
										border: 1px solid #0FF0A9;
									}

									img {
										height: 70%;
									}
								}
							}
						}

						.end {
							background: rgba(255, 255, 255, 0.3);
							border-radius: 9px;
							box-shadow: 1px 1px 3px #013426;
							width: 100%;
							padding: .5pc;
							line-height: 1.3pc;
							height: 200px;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							
							h4 {
								font-size: 1pc;
								line-height: 1.3pc;
								padding-bottom: .5pc;
							}
						}
					}
				}

				@media screen and (max-width: 950px) {
					flex-direction: column;
					/* padding-left: 5pc; */

					.road-box {

						.inner-road {

							.mid {

								.outer-c {

									.left-right-line {
										display: none;
									}

									.right-left-line {
										display: none;
									}

									.right-end {
										display: none;
									}

									.left-end {
										display: none;
									}

									.mobile-lines {
										display: block;
										position: absolute;
										border: 1px dashed #fff;
										width: 110px;
										height: 2px;
										right: 100%;

										&.last-oo {
											display: none;
										}
										
										.verti {
											position: absolute;
											top: 100%;
											left: 0;
											height: 349px;
											width: 2px;
											border: 1px dashed #fff;
											
											.back {
												position: absolute;
												bottom: 0%;
												left: 0;
												width: 108px;
												height: 2px;
												border: 1px dashed #fff;
											}
										}
										
										&.done {
											border-color: #0FF0A9;
											
											.verti,
											.verti .back {
												border-color: #0FF0A9;
											}
										}
									}
								}
							}
						}
					}
				}
			}

			.tl-abs {
				position: absolute;
				z-index: -1;
				top: 2pc;
				left: 0;

				img {
					width: 10pc;
				}
				
				.mobile {
					display: none;
				}
				
				@media screen and (max-width: 950px) {

					img {
						display: none;
					}
					
					.mobile {
						display: initial;
					}
				}
			}

			.br-abs {
				z-index: -1;
				position: absolute;
				bottom: 2pc;
				right: 0;
								
				img {
					width: 10pc;
				}

				.mobile {
					display: none;
				}
				
				@media screen and (max-width: 950px) {

					img {
						display: none;
					}
					
					.mobile {
						display: initial;
					}
				}
			}
		}

	}

	section.team {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 2pc 0;
		max-width: 1920px;
		width: 100%;
		margin: 0 auto;
		
		.head {
			text-align: center;
			/* border-bottom: 1px solid #0BBF8C; */
			font-weight: bold;
			margin-bottom: 1.5pc;
		}

		.body {
			padding: 2pc;
			padding-top: 0;
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-wrap: wrap;

			.char-pack {
				width: 22%;
				text-align: center;
				font-size: 2pc;
				padding: 1pc 0;
				transition: transform .5s;
				color: #fff;
				text-decoration: none;

				&:hover {
					transform: scale(1.1);
				}

				p {
					font-size: 1.7pc;
					line-height: 2.5pc;
				}
				
				@media screen and (max-width: 700px) {
					width: 45%;
	
					p {
						font-size: 1.3pc;
						line-height: 2.2pc;
					}
					
				}
				
			}
		}
	}

	section.metaverse {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 2pc 0;
		max-width: 1920px;
		width: 100%;
		margin: 0 auto;
		
		.head {
			text-align: center;
			/* border-bottom: 1px solid #0BBF8C; */
			font-weight: bold;
			margin-bottom: 1.5pc;

			p {
				font-size: 1.2pc;
				line-height: 1pc;
			}
		}

		.body {
			padding: 2pc;
			padding-top: 0;
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-wrap: wrap;

			.char-pack {
				width: 30%;
				max-width: 230px;
				text-align: center;
				font-size: 2pc;
				padding: 1pc;
				transition: transform .5s;
				text-decoration: none;
				color: #fff;

				&:hover {
					transform: scale(1.2);
				}

				p {
					font-size: 1.3pc;
					line-height: 2.2pc;
				}
				
				@media screen and (max-width: 700px) {
					width: 45%;
					max-width: initial;
				}
				
			}
		}

		.end-img {
			position: absolute;
			top: 3pc;
			left: 0;
			z-index: -1;

			img {
				max-width: 300px;
			}
		}
	}

	section.faq {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 2pc 0;
		max-width: 1920px;
		width: 100%;
		margin: 0 auto;
		
		.head {
			text-align: center;
			/* border-bottom: 1px solid #0BBF8C; */
			font-weight: bold;
			margin-bottom: 1.5pc;
		}

		.body {
			padding: 3pc;
			padding-top: 0;
			display: flex;
			align-items: center;
			flex-direction: column;
		}
	}

	section.end {
		display: flex;
		align-items: flex-end;
		align-items: center;
		justify-content: space-between;
		/* flex-direction: column; */
		padding: 2pc 1pc;
		padding-top: 0;
		max-width: 1920px;
		width: 100%;
		margin: 0 auto;

		.end-left {
			width: 30%;
			padding: 0 1pc;
			text-align: left;
			font-size: .8pc;
			line-height: 1.2pc;

			.img-ppt {
				/* display: none; */
				padding-bottom: .5pc;

				img {
					filter: invert(1);
					width: 120px;
					object-fit: contain;
				}
			}
		}

		.end-right {
			width: 30%;
			padding: 0 1pc;
			text-align: right;
			font-size: .8pc;
			line-height: 1.2pc;
		}

		.end-in {
			width: 30%;
			padding: 0 1pc;
			text-align: center;

			.end-icons {
				font-size: 2pc;
				display: flex;
				align-items: center;
				justify-content: center;

				a {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: .5pc;
					transition: transform .5s;

					&:hover {
						transform: scale(1.3);
					}
				}
			}
		}
		
		.end-img {
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: -1;

			img {
				max-width: 450px;
			}
		}

		@media screen and (max-width: 900px) {
			flex-direction: column;

			.end-left {
				text-align: center;
				width: 100%;
				font-size: .9pc;
				line-height: 1.8pc;
				padding-bottom: 2pc;
				
				.img-ppt {
					display: flex;
					align-items: center;
					justify-content: center;
					padding-bottom: 1pc;
				}
			}
			
			.end-right {
				text-align: center;
				width: 100%;
				font-size: .9pc;
				line-height: 1.8pc;
			}
			
			.end-in {
				width: 100%;
				padding-bottom: 1.6pc;
			}

		}
	}

	@media screen and (max-width: 800px) {
	}

	.underline {
		height: 1px;
		background: linear-gradient(180deg, #0BBF8C 0%, #067E5C 100%);
		height: 3px;
		width: 40%;
		min-width: 40px;
		margin: 0 auto;
		display: block;
	}
`

export default Home
