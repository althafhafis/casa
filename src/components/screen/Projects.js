import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Footer from './includes/Footer'
import Header from './includes/Header'
import Sarrow from './../assets/service-arrow.svg'
import seal from './../assets/view-all-service-seal.svg'


export default function Projects() {
  return (
    <>
	<Helmet>
		<title>Projects</title>
	</Helmet>
    <Header />
    <Spotlight>
		<Wrapper className='flex'>
			<Left className='left'>
				<Hello>Hello!</Hello>
				<Touch>Latest | Projects</Touch>
				<Dash>
					<Line />
					<Text>We help ambitious bussiness like your generate more profits by building awerness, driving web traffic, connecting with customers and growing overall sales.</Text>
				</Dash>
			</Left>
			<Right className='right'>
				<Image src={seal} alt='Seal' />
			</Right>
		</Wrapper>
	</Spotlight>
		<Section>
			<Wrapper>
				<WorkUl>
					<ItemOne>
						<TypeHeading>Web <ColorSpan>Apps</ColorSpan> </TypeHeading>
						<Seal src={seal} alt='Seal' />
					</ItemOne>
					<ItemLi>
						<Item>
							<Blank></Blank>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/4ba9a8036268fee0111f2cc647ad09bf.jpg")} alt='Model' />
							</Container>
						</Item>
						<Item>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/Rectangle 7-1.jpg")} alt='Model' />
							</Container>
						</Item>
					</ItemLi>
					<ItemLi>
						<Item>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/image_processing20211205-14945-1wmbvl4.jpg")} alt='Model' />
							</Container>
						</Item>
						<Item>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/Rectangle 20433.jpg")} alt='Model' />
							</Container>
						</Item>
					</ItemLi>
				</WorkUl>
				<WorkUl className='reverse'>
					<ItemOne>
					<TypeHeading><ColorSpan>Mobile </ColorSpan>Apps</TypeHeading>
					<Seal src={seal} alt='Seal' />
					</ItemOne>
					<ItemLi>
						<Item>
							<Blank></Blank>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/4ba9a8036268fee0111f2cc647ad09bf.jpg")} alt='Model' />
							</Container>
						</Item>
						<Item>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/Rectangle 7-1.jpg")} alt='Model' />
							</Container>
						</Item>
					</ItemLi>
					<ItemLi>
						<Item>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/image_processing20211205-14945-1wmbvl4.jpg")} alt='Model' />
							</Container>
						</Item>
						<Item>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/Rectangle 20433.jpg")} alt='Model' />
							</Container>
						</Item>
					</ItemLi>
				</WorkUl>
				<WorkUl>
					<ItemOne>
						<TypeHeading>Dashboard</TypeHeading>
						<Seal src={seal} alt='Seal' />
					</ItemOne>
					<ItemLi>
						<Item>
							<Blank></Blank>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/original-08c147c3a8c8e07debdab3d91b38c46f.jpg")} alt='Model' />
							</Container>
						</Item>
						<Item>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/original-1082756e71b54e5d571b68dc6d7451ca.jpg")} alt='Model' />
							</Container>
						</Item>
					</ItemLi>
					<ItemLi>
						<Item>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/original-f8a887e0e8114aafa8374ea9e059b94a.jpg")} alt='Model' />
							</Container>
						</Item>
						<Item>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/Rectangle 7-1.jpg")} alt='Model' />
							</Container>
						</Item>
					</ItemLi>
				</WorkUl>
				<WorkUl className='reverse'>
					<ItemOne>
						<TypeHeading>Websites</TypeHeading>
						<Seal src={seal} alt='Seal' />
					</ItemOne>
					<ItemLi>
						<Item>
							<Blank></Blank>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/Rectangle 20437.jpg")} alt='Model' />
							</Container>
						</Item>
						<Item>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/Rectangle 20433.jpg")} alt='Model' />
							</Container>
						</Item>
					</ItemLi>
					<ItemLi>
						<Item>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/Rectangle 20438.jpg")} alt='Model' />
							</Container>
						</Item>
						<Item>
							<Top>
								<TopHeading>VPS Hosting <br/>Web Design</TopHeading>
								<Arrow src={Sarrow} alt='arrow' />
							</Top>
							<ItemName>web/loading page</ItemName>
							<Container>
								<PostImage src={require("./../assets/Rectangle 7-1.jpg")} alt='Model' />
							</Container>
						</Item>
					</ItemLi>
				</WorkUl>
			</Wrapper>
		</Section>

    <Footer />
    
    </>
  )
}


const Spotlight = styled.section `
padding: 100px;
background: #FCDA69;
@media all and (max-width:768px){
	padding:50px 10px;
}
`
const Wrapper = styled.section`
width: 90%;
margin: 0 auto;
max-width: 1480px;
&.flex {
	display: flex;
	justify-content: space-between;
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
@media all and (max-width:480px){
	display:none;
	}
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
width: 70%;
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
padding:100px 0;
@media all and (max-width:768px){
padding:50px 10px;
}
`
const WorkUl= styled.ul`
display: flex;
justify-content: space-between;
margin-bottom: 60px;
flex-wrap: wrap;

&.reverse{
	flex-direction: row-reverse;
}
`
const ItemOne = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;
width:31%;
@media all and (max-width:768px){
width:100%;
flex-direction: row;
}

`
const Seal = styled.img`
width:80%;
@media all and (max-width:768px){
display: none;
}
`
const ItemLi = styled.li`
width:31%;
@media all and (max-width:768px){
width:48%;
}
`
const Item= styled.div`

`
const Blank = styled.div`
height: 200px;
@media all and (max-width:768px){
display:none;
}
`
const TopHeading= styled.h3`
font-size: 32px;
font-weight: 600;
@media all and (max-width:980px){
	font-size:24px
}
@media all and (max-width:480px){
	font-size:20px
}
`
const TypeHeading= styled.h2`
font-size: 48px;
font-weight: 700;
color: #000;
@media all and (max-width:980px){
	font-size:36px
}
`
const ColorSpan= styled.span`
font-weight: 700;
color: #fcda69;

`
const Top = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
border-top: 1px solid #000;
padding-top: 30px;
margin-Top: 50px;

`
const Arrow =styled.img`
width:25%;
@media all and (max-width:480px){
	display: none;
}
`
const ItemName = styled.h5`
font-size: 18px;
font-weight: 600;
margin-bottom: 20px;

`
const Container = styled.div`

`
const PostImage = styled.img`
display: block;
width: 100%;

`