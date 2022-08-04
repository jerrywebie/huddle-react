import styled from "styled-components";

export const StyledFooter = styled.div`
 background-color: ${({ theme }) => theme.colors.footer};
	color: #000;
padding: 100px 0 60px;
ul {
	list-style-type: none;
	color: #000;
}
ul li {
	margin-bottom: 20px;
}
p {
	text-align: right;
}
@media (max-width: ${({ theme }) => theme.mobile}) {
	text-align: center;
	ul {
		padding: 0;
	}
	p {
		text-align: center;
	}
}
`