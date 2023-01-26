import React from 'react'
import Logo from './../../assets/casa-logo.svg'
import phone from './../../assets/Call-icon.svg'
import facebook from './../../assets/facebook-black.svg'
import linkedIn from './../../assets/Linked-in.svg'
import twitter from './../../assets/website2=twitter.svg'
import youtube from './../../assets/youtbe.svg'
import styled from 'styled-components'


export default function Footer() {
  return (
    <Container>
        <section className="wrapper">
            <Top>
                <TopLeft>
                    <LeftImage src={Logo} alt='Logo' />
                    <Para>adipiscing elit. Pellentesque id neque sit amet nibh porta blandit elementum ac diam. Aliquam porttitor elit vel mollis interdum. Aliquam ultricies pharetra ex, sit amet tincidunt odio commodo vel. Curabitur tincidunt cursus lorem vel congue. Cras laoreet augue quis turpis sollicitudin, quis sodales lacus</Para>
                </TopLeft>
                <Service>
                    <Headin>Our Service</Headin>
                    <ul>
                        <ServiceLi><ServiceA>Help center</ServiceA></ServiceLi>
                        <ServiceLi><ServiceA>FAQ</ServiceA></ServiceLi>
                        <ServiceLi><ServiceA>Investation</ServiceA></ServiceLi>
                        <ServiceLi><ServiceA>Blog</ServiceA></ServiceLi>
                    </ul>
                </Service>
                <div >
                    <Headin>Company</Headin>
                    <ul>
                        <CompanyLi><CompanyA>About Us</CompanyA></CompanyLi>
                        <CompanyLi><CompanyA>Career</CompanyA></CompanyLi>
                        <CompanyLi><CompanyA>Management</CompanyA></CompanyLi>
                        <CompanyLi><CompanyA>Blog</CompanyA></CompanyLi>
                    </ul>
                </div>
                <Contact>
                    <Headin>Contact info</Headin>
                    <ContactH2>Getinfocasa7@gmail.com</ContactH2>
                    <ContactPhone>
                        <PhoneImg src={phone} alt='Logo' />
                        <span>(+881254889760)</span>
                    </ContactPhone>
                    <SocialUl>
                        <SocialLi><a href='##'><SocialImg src={facebook} alt='facebook' /></a></SocialLi>
                        <SocialLi><a href='##'><SocialImg src={linkedIn} alt='linkedIn' /></a></SocialLi>
                        <SocialLi><a href='##'><SocialImg src={twitter} alt='twitter' /></a></SocialLi>
                        <SocialLi><a href='##'><SocialImg src={youtube} alt='youtube' /></a></SocialLi>
                    </SocialUl>
                </Contact>
            </Top>
            <Bottom>
                <BottomH2>copyright @2021 Casa inc.</BottomH2>
                <BottomUl>
                    <BottomLi><BottomA>Privacy</BottomA></BottomLi>
                    <BottomLi><BottomA>Security</BottomA></BottomLi>
                    <BottomLi><BottomA>Terms</BottomA></BottomLi>
                </BottomUl>
            </Bottom>
        </section>
    </Container>
  )
}


const Container = styled.footer`
    padding: 50px 0;
    background-color: #f1f1f1;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    flex-wrap: wrap;
`
const TopLeft = styled.div`
    width: 35%;
    @media all and (max-width:980px) {
        width: 100%;
        margin-Bottom:20px 
    }

`
const LeftImage = styled.img`
    width: 20%;
    margin-bottom: 10px;
    @media all and (max-width:480px) {
        width: 30%;
     
    }
`
const Para = styled.p`
    font-size: 18px;
    @media all and (max-width:1280px) {
        font-size: 14px; 
    }
    
`
const Service =styled.div`
width: 20%;
@media all and (max-width:640px) {
    width: 100%;
    margin:20px 0;
    border-bottom: 1px solid black;

}
`
const Headin =styled.h3`
font-size: 24px;
font-weight: 600;
margin-bottom: 20px;
@media all and (max-width:980px) {
    font-size: 20px; 
}
`
const ServiceLi = styled.li`
margin-bottom: 10px;
`
const ServiceA = styled.a`
font-size: 16px;
`
const CompanyLi = styled.li`
margin-bottom: 10px;

`
const CompanyA = styled.a`
font-size: 16px;
`
const Contact = styled.div`
width: 25%;
@media all and (max-width:640px) {
    width: 100%;
    margin-top:20px ;
    border-top: 1px solid black;
    padding-top:10px;
}
`
const ContactH2 = styled.h2`
font-size: 16px;
margin-bottom: 15px;
`
const ContactPhone= styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
`
const PhoneImg = styled.img`
display: inline-block;
margin-right: 10px;
`
const SocialUl = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
`
const SocialLi = styled.li`
margin-top: 20px;
width: 40px;
`
const SocialImg = styled.img`
width: 100%;
@media all and (max-width:980px) {
    width: 50%; 
}
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media all and (max-width:480px) {
    display: block;
 
}
`
const BottomH2 = styled.h2`
font-size: 20px;
font-weight: 600;
@media all and (max-width:980px) {
    font-size: 14px; 
}
`
const BottomUl = styled.ul`
display: flex;
justify-content: space-between;
@media all and (max-width:480px) {
    margin-top: 15px ;
 
}
`
const BottomLi =styled.li`
margin-right: 30px;
&:last-child{
    margin-right: 0;
}
@media all and (max-width:768px) {
    margin-right: 10px; 
}
`
const BottomA = styled.a`
font-size: 20px;
font-weight: 600;
@media all and (max-width:980px) {
    font-size: 14px; 
}
`
