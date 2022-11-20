import styled from "styled-components"

const PageNotFound = () => {

  return (

    <PageNotFoundStyle>

			<h1>This page does not exist</h1>

		</PageNotFoundStyle>

  )

}

const PageNotFoundStyle = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 3pc;
`

export default PageNotFound