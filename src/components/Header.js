import React from 'react';
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { StyledButton } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';

export default function Header() {
  return (
    <StyledHeader>
			<Container>
				<Nav>
					<Logo src='./images/logo.svg' alt='logo_text'/>
					<StyledButton>Try it free</StyledButton>
				</Nav>
				<Flex>
					<div>
						<h1>Build The Community Your Fans Will Love</h1>
						<p>
							Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
						</p>
						<StyledButton bg='#fff' color='#ff007e'> Get Started For Free</StyledButton>
					</div>
					<Image src='./images/illustration-mockups.svg' alt='illustration_mockup'/>
				</Flex>
			</Container>
    </StyledHeader>
  )
}
