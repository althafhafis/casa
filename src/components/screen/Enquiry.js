import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Footer from './includes/Footer'
import Header from './includes/Header'
import seal from './../assets/view-all-service-seal.svg'
import ind from './../assets/flag.svg'


export default function Enquiry() {
	return (
		<>
			<Helmet>
				<title>Enquiry</title>
			</Helmet>
			<Header />

			<Spotlight>
				<Wrapper className='flex'>
					<Left>
						<Hello>Hello!</Hello>
						<Touch>Touch with Us</Touch>
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
			<Form>
				<Wrapper>
					<Center>
						<Hello className='center'>Here we help</Hello>
						<Heading>Enquiry Form</Heading>
					</Center>
					<form action='' method='post'>
						<FormContainer>
							<FormItem>
								<Label for='first_name'>First Name *</Label>
								<Input type='text' placeholder='Enter Your First Name' id='first_name' />
							</FormItem>
							<FormItem>
								<Label for='Last_name'>Last Name *</Label>
								<Input type='text' placeholder='Enter Your Last Name' id='Last_name' />
							</FormItem>
							<FormItem>
								<Label for='phone'>Phone number *</Label>
								<PhoneInput>
									<FlagImg src={ind} alt='flag' />
									<select>
										<option value="india">+91</option>
										<option value="UK">+44</option>
										<option value="spain">+34</option>
										<option value="usa">+1</option>
									</select>
									<input type='number' placeholder='Enter phone number' id='phone' />

								</PhoneInput>
							</FormItem>
							<FormItem>
								<Label for='email'>Email address *</Label>
								<Input type='email' placeholder='Enter Your Email' id='email' />
							</FormItem>
						</FormContainer>
						<FormContainer className='bottom'>
							<FormItem>
								<Label for='select_1'>Project Categories *</Label>
								<Select id='select_1'>
									<option disabled>Select your category</option>
									<option>Business implementation.</option>
									<option>IT infrastructure improvement.</option>
									<option>Product development</option>
									<option>Physical engineering/construction.</option>
									<option></option>
								</Select>
							</FormItem>
							<FormItem>
								<Label for='select_2'>Project Categories *</Label>
								<Select id='select_2'>
									<option></option>
									<option>Business implementation.</option>
									<option>IT infrastructure improvement.</option>
									<option>Product development</option>
									<option>Physical engineering/construction.</option>
									<option></option>
								</Select>
							</FormItem>
							<FormItem className='textarea'>
								<Label for='text_area'>Project Categories *</Label>
								<Textarea placeholder='Type here...'></Textarea>
							</FormItem>
						</FormContainer>
					</form>
				
					<ButtonContainer>
						<Button>Next <Arrow src={require('./../assets/white-arrow.svg').default} /> </Button>
						
					</ButtonContainer>

				</Wrapper>
			</Form>
			<Footer />
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
	align-items: center;
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

&.center{
	transform: rotate(-40deg);
	margin-right: 15%;
	@media all and (max-width:1280px){
		margin-right: 31%;

	}
	@media all and (max-width:980px){
		margin-right: 41%;

	}
	@media all and (max-width:768px){
		margin-right: 51%;

	}
	@media all and (max-width:640px){
		display: none;

	}
	
}

`
const Touch = styled.h1`
	font-family: "Poppins-Medium";
	font-weight: 600;
	line-height: 1.3em;
	font-size: 78px;
	margin-bottom: 40px;
	margin-left: 10px;
	width: 80%;
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
const Form = styled.section`
padding: 100px;
@media all and (max-width:640px){
	padding:50px 0;
}
`
const Center = styled.div`
text-align: center;
`
const Heading = styled.h2`
font-family: "Poppins-Medium";
font-weight: 600;
font-size: 36px;
`
const FormContainer = styled.div`
padding: 50px 0;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
&.bottom {
	border-top: 1px solid #000;
	padding-bottom:0;
}
`
const FormItem = styled.div `
width: 48%;
margin-bottom: 20px;
&.textarea {
	width: 100%;
}
@media all and (max-width:768px){
	width: 100%;
}
`
const Label= styled.label`
  margin-bottom: 15px;
  display: block;

`
const Input = styled.input`
padding: 20px;
border : 1px solid #7c7b7b;
border-radius: 10px;
display: block;
width: 100%;
::placeholder {
	@media all and (max-width:360px){
		color:transparent;

	}
}

`
const FlagImg = styled.img`
width:20px;
border-radius: 50%;
`
const PhoneInput = styled.div`
padding: 20px;
border : 1px solid #7c7b7b;
border-radius: 10px;
width: 100%;
margin-top:0;
display: flex;
align-items: center;
`
const Select = styled.select`
padding: 20px;
border : 1px solid #7c7b7b;
border-radius: 10px;
display: block;
width: 100%;
margin-bottom:40px;
`
const Textarea = styled.textarea`
padding: 20px;
border : 1px solid #7c7b7b;
border-radius: 10px;
display: block;
height: 150px;
width: 100%;
resize:none;
`
const ButtonContainer = styled.div`
text-align: right;
`
const Button = styled.button`
background: #000;
color: #fff;
padding: 15px 100px;
border-radius: 10px;
font-size:16px;
@media all and (max-width:980px){
	padding: 15px 60px;
}
`
const Arrow = styled.img`
transform: rotate(45deg);
width: 10px;
margin-left: 20px;
`
