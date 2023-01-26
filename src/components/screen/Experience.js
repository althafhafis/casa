import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import Footer from './includes/Footer'
import Header from './includes/Header'
import seal from './../assets/view-all-service-seal.svg'


export default function Experience() {
  return (
    <>
		<Helmet>
			<title>Skills & Experience</title>
		</Helmet>
		<Header/>

		<Spotlight>
			<Wrapper className='flex'>
				<Left>
					<Hello>Hello!</Hello>
					<Touch>Skills & Expirience</Touch>
					<Dash>
						<Line />
						<Text>We help ambitious bussiness like your generate more profits by building awerness, driving web traffic, connecting with customers and growing overall sales.</Text>
					</Dash>
				</Left>
				<Right>
					<Image src={seal} alt='Seal' />
				</Right>
			</Wrapper>
		</Spotlight>
		<Section>
			<Wrapper>
				<Heading>Skills</Heading>
				<ImgUl>
					<ImgList>
						<ListImg src={require("../assets/visual-icon.svg").default} alt='Visual' />
						<Items>Visual design</Items>
					</ImgList>
					<ImgList>
						<ListImg src={require("../assets/wire-frame.svg").default} alt='Wire Frame' />
						<Items>Wire Frame</Items>
					</ImgList>
					<ImgList>
						<ListImg src={require("../assets/ux-icon.svg").default} alt='ux' />
						<Items>User Experience Design</Items>
					</ImgList>
					<ImgList>
						<ListImg src={require("../assets/prototype.svg").default} alt='Prototype'/>
						<Items>Prototype</Items>
					</ImgList>
					<ImgList>
						<ListImg src={require("../assets/art-direction.svg").default} alt='Art direction'/>
						<Items>Art direction</Items>
					</ImgList>
					<ImgList>
						<ListImg src={require("../assets/user-research.svg").default} alt='User Reserch'/>
						<Items>User Reserch</Items>
					</ImgList>
				</ImgUl>
			</Wrapper>
		</Section>
		<Section>
			<Wrapper>
			<Heading>Experience</Heading>
			<ul>
				<ExpLl>
					<Period>2019-present</Period>
					<Container>
						<Post>Product Designer</Post>
						<Company>Amazon Inc</Company>
						<Description>Duis consequat sapien libero, in interdum diam lobortis hendrerit. Sed vitae arcu accumsan, cursus odio non, laoreet odio. Pellentesque facilisis ipsum ut malesuada maximus. Nam vel libero a leo blandit semper sed tempus ligula. Etiam dui mauris, dictum quis pharetra vel, feugiat vitae nibh. Nam at libero lacinia, dictum nisi at, condimentum turpis. Nam turpis urna, porttitor sit amet pulvinar id, vehicula non lectus. Vivamus efficitur id tellus a dictum. Phasellus quis varius urna, sed luctus purus.</Description>
					</Container>
				</ExpLl>
				<ExpLl>
					<Period>2018-2019</Period>
					<Container>
						<Post>Web UI/UX Designer</Post>
						<Company>Google</Company>
						<Description>Duis consequat sapien libero, in interdum diam lobortis hendrerit. Sed vitae arcu accumsan, cursus odio non, laoreet odio. Pellentesque facilisis ipsum ut malesuada maximus. Nam vel libero a leo blandit semper sed tempus ligula. Etiam dui mauris, dictum quis pharetra vel, feugiat vitae nibh. Nam at libero lacinia, dictum nisi at, condimentum turpis. Nam turpis urna, porttitor sit amet pulvinar id, vehicula non lectus. Vivamus efficitur id tellus a dictum. Phasellus quis varius urna, sed luctus purus.</Description>
					</Container>
				</ExpLl>
				<ExpLl>
					<Period>2016-2018</Period>
					<Container>
						<Post>UI Designer</Post>
						<Company>Facebook</Company>
						<Description>Duis consequat sapien libero, in interdum diam lobortis hendrerit. Sed vitae arcu accumsan, cursus odio non, laoreet odio. Pellentesque facilisis ipsum ut malesuada maximus. Nam vel libero a leo blandit semper sed tempus ligula. Etiam dui mauris, dictum quis pharetra vel, feugiat vitae nibh. Nam at libero lacinia, dictum nisi at, condimentum turpis. Nam turpis urna, porttitor sit amet pulvinar id, vehicula non lectus. Vivamus efficitur id tellus a dictum. Phasellus quis varius urna, sed luctus purus.</Description>
					</Container>
				</ExpLl>
				<ExpLl>
					<Period>2014-2016</Period>
					<Container>
						<Post>3D Designer</Post>
						<Company>Facebook</Company>
						<Description>Duis consequat sapien libero, in interdum diam lobortis hendrerit. Sed vitae arcu accumsan, cursus odio non, laoreet odio. Pellentesque facilisis ipsum ut malesuada maximus. Nam vel libero a leo blandit semper sed tempus ligula. Etiam dui mauris, dictum quis pharetra vel, feugiat vitae nibh. Nam at libero lacinia, dictum nisi at, condimentum turpis. Nam turpis urna, porttitor sit amet pulvinar id, vehicula non lectus. Vivamus efficitur id tellus a dictum. Phasellus quis varius urna, sed luctus purus.</Description>
					</Container>
				</ExpLl>
				<ExpLl>
					<Period>2010-2014</Period>
					<Container>
						<Post>Graphic Designer</Post>
						<Company>Facebook</Company>
						<Description>Duis consequat sapien libero, in interdum diam lobortis hendrerit. Sed vitae arcu accumsan, cursus odio non, laoreet odio. Pellentesque facilisis ipsum ut malesuada maximus. Nam vel libero a leo blandit semper sed tempus ligula. Etiam dui mauris, dictum quis pharetra vel, feugiat vitae nibh. Nam at libero lacinia, dictum nisi at, condimentum turpis. Nam turpis urna, porttitor sit amet pulvinar id, vehicula non lectus. Vivamus efficitur id tellus a dictum. Phasellus quis varius urna, sed luctus purus.</Description>
					</Container>
				</ExpLl>
				<ExpLl>
					<Period>2008-2010</Period>
					<Container>
						<Post>motion Designer</Post>
						<Company>Facebook</Company>
						<Description>Duis consequat sapien libero, in interdum diam lobortis hendrerit. Sed vitae arcu accumsan, cursus odio non, laoreet odio. Pellentesque facilisis ipsum ut malesuada maximus. Nam vel libero a leo blandit semper sed tempus ligula. Etiam dui mauris, dictum quis pharetra vel, feugiat vitae nibh. Nam at libero lacinia, dictum nisi at, condimentum turpis. Nam turpis urna, porttitor sit amet pulvinar id, vehicula non lectus. Vivamus efficitur id tellus a dictum. Phasellus quis varius urna, sed luctus purus.</Description>
					</Container>
				</ExpLl>
				<ExpLl>
					<Period>2006-2008</Period>
					<Container>
						<Post>Graphic Designer</Post>
						<Company>Digital creater</Company>
						<Description>Duis consequat sapien libero, in interdum diam lobortis hendrerit. Sed vitae arcu accumsan, cursus odio non, laoreet odio. Pellentesque facilisis ipsum ut malesuada maximus. Nam vel libero a leo blandit semper sed tempus ligula. Etiam dui mauris, dictum quis pharetra vel, feugiat vitae nibh. Nam at libero lacinia, dictum nisi at, condimentum turpis. Nam turpis urna, porttitor sit amet pulvinar id, vehicula non lectus. Vivamus efficitur id tellus a dictum. Phasellus quis varius urna, sed luctus purus.</Description>
					</Container>
				</ExpLl>
			</ul>
			</Wrapper>
		</Section>
		
		<Footer/>
    
    </>
  )
}

const Spotlight = styled.section `
padding: 100px;
background: #FCDA69;
@media all and (max-width:640px){
	padding:50px 0;
}
`
const Wrapper = styled.section`
width: 90%;
margin: 0 auto;
max-width: 1480px;
&.flex {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
`
const Left = styled.div`
width: 48%;
@media all and (max-width:980px){
	width: 100%;
}
`
const Right = styled.div`
width: 48%;
margin: 0 auto;

`
const Image = styled.img`
display: block;
width: 60%;
margin: 0 auto;

`
const Hello = styled.h4`
color: #8873EF;
display: inline-block;
font-family: "Poppins-Regular";
font-size: 14px;
transform: rotate(-25deg);

`
const Touch = styled.h1`
font-family: "Poppins-Medium";
font-weight: 600;
line-height: 1.3em;
font-size: 78px;
margin-bottom: 40px;
margin-left: 10px;
width: 60%;
@media all and (max-width:1280px){
	font-size: 56px;
};
@media all and (max-width:980px){
	font-size: 48px;
};
@media all and (max-width:640px){
	margin-bottom: 20px;

}
@media all and (max-width:480px){
	font-size: 32px;
};
`
const Dash = styled.div`
align-self: flex-start;
display: flex;
margin-bottom: 40px;
`
const Line = styled.hr`
width: 30px;
border-top: 2px solid #000;
margin-top: 8px;
@media all and (max-width:980px){
	width: 20px;
}
`
const Text = styled.p`
font-family: "Poppins-Medium";
font-size: 20px;
width: 70%;
margin-left: 30px;
@media all and (max-width:1280px){
	width: 80%;
	font-size:18px;
}
@media all and (max-width:980px){
	width: 80%;
	font-size:14px;
}
@media all and (max-width:480px){
	width: 100%;
	font-size:12px;
}
`
const Section = styled.section`
padding-top:50px;
`
const Heading = styled.h2`
font-weight: 600;
font-size: 36px;
margin-bottom: 40px;

`
const ImgUl= styled.ul`
display: flex;
align-items: center;
justify-content: flex-end;
flex-wrap: wrap;
padding: 40px 0;
border-top: 1px solid #a1a1a1;
`
const ImgList= styled.li`
width: 26%;
margin-bottom: 30px;
@media all and (max-width:480px){
width: 40%;
}
`
const ListImg= styled.img`
display: block;
width: 25%;
`
const Items= styled.h3`
width: 60%;
font-size: 20px;
font-weight: 600;
margin-top: 20px;
@media all and (max-width:768px){
font-size:14px;
width: 80%;

}
`
const ExpLl = styled.li`
display: flex;
justify-content: space-between;
border-top: 1px solid #a1a1a1;
margin-bottom: 50px;
padding-top: 25px;
`
const Period = styled.h3`
font-size: 20px;
font-weight: 600;
@media all and (max-width:640px){
font-size:16px;
}
`
const Container = styled.div`
width: 80%;
`
const Post = styled.h3`
font-size: 24px;
font-weight: 700;
margin-bottom: 20px;
@media all and (max-width:640px){
font-size:20px;
}
`
const Company = styled.span`
color: #bbbbbb;
font-size: 18px;
font-weight: 600;
`
const Description = styled.p`
font-size: 16px;
font-weight: 600;
color: #a0a0a0;
margin-top: 20px;
@media all and (max-width:640px){
font-size:14px;
}
`