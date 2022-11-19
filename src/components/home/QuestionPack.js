import { useState } from "react"
import styled from "styled-components"

const QuestionPack = ({ question, answer, open = false }) => {

	const [isOpen, setIsOpen] = useState(open)

	return (

		<QuestionPackStyle>

			<div className="pack-hol">

				<div className="q-hol" onClick={() => setIsOpen(!isOpen)}>

					<div className="l-side">

						<img src="/images/qqq.png" alt="qqq" />

					</div>

					<div className="m-side">

						{question}

					</div>

					<div className="r-side">

						<img src={isOpen ? "/images/up-hex.png" : "/images/down-hex.png"} alt="A Complex Hex" />

					</div>

				</div>

				<div className={"ans-hol " + (isOpen ? "open " : "")}>

					{answer}

				</div>

			</div>

		</QuestionPackStyle>

	)

}

const QuestionPackStyle = styled.div`
	
	width: 100%;
	background-color: #fff;
	padding: 1pc;
	margin: .5pc 0;
	border-radius: .5pc;
	font-weight: bold;

	.pack-hol {

		.q-hol {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #0CB183;
			cursor: pointer;
			
			.l-side {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 1.5pc;
			}

			.m-side {
				flex: 1;
				padding: 0 1pc;
			}
			
			.r-side {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 1.5pc;
				cursor: pointer;
			}
		}

		.ans-hol {
			color: #000;
			height: 0;
			overflow: hidden;
			
			&.open {
				height: auto;
				padding-top: 1pc;
			}
		}
	}
`

export default QuestionPack
