import React ,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom';

import Logo from './../../assets/casa-logo.svg'
import styled from 'styled-components'

export default function Header() {
    const [isClick , setIsClick] =useState(false);
    const [active , setActive]=useState("")

	const handleClick = () => {
        setIsClick(!isClick);
        setActive (isClick ? 'active' : '') ;
	};
    

  return (
    <Container>
        <Wrapper className='wrapper'>
            <div className="left" >
                <img src={Logo} alt='Logo' />
            </div> 
                <nav className='middle'>
                    <NavUl>
                        
                         
                            <NavLi><NavLiA className={({isActive})=>isActive ? "active" : ""} to="/" >Home</NavLiA></NavLi>
                        
                        
                        
                            <NavLi><NavLiA className={({isActive})=>isActive ? "active" : ""} to="/Projects/" >Projects</NavLiA></NavLi>
                        
                        
                            <NavLi><NavLiA className={({isActive})=>isActive ? "active" : ""} to="/Experience/">Experience</NavLiA></NavLi>
                        
                        
                            <NavLi><NavLiA className={({isActive})=>isActive ? "active" : ""} to="/Enquiry/">Enquiry</NavLiA></NavLi>
                        
                    </NavUl>    
                </nav>
            <div className='right'>
                <RightUl>
                    <RightLi><RightLiA>Sign in</RightLiA></RightLi>
                    <RightLi className='button'><RightLiA>Sign up</RightLiA></RightLi>
                </RightUl>
            </div>
            {/* ---------- hamburger menu ----------------------- */}

                <button id="menu-icon" className={active} onClick={handleClick} >
					<img src={require("./../../assets/Vector.svg").default} alt='Hamburger' />
				</button>
				<div id="mobile-menu" className={active}>
					<ul>
                        <Link to="/">
						    <li><a href='##'>HOME</a></li>
                        </Link>
                        <Link to="/Experience/">
						    <li><a href='##'>EXPERIENCE</a></li>
						</Link>
                        <Link to="/Projects/">
                            <li><a href='##'>PROJECTS</a></li>
                        </Link>
                        <Link to="/Enquiry/">
						    <li><a href='##'>ENQUIRY</a></li>
                        </Link>
						<li><a className='button' href='##'>SIGN IN</a></li>
						<li><a className='button' href='##'>SIGN UP</a></li>
					</ul>
				</div>
				<span className={'close '+ active} onClick={handleClick} ><img src={require("./../../assets/close.png")} alt="" /></span>
				<span className={'overlay '+ active} onClick={handleClick}></span>

            {/* ---------- hamburger menu ----------------------- */}






        </Wrapper>
    </Container>
    
  )
}

const Container = styled.header`
    padding: 32px 0;
    @media all and (max-width:480px){
        padding: 24px 0;
    }
`
const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NavUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width:560px){
        display: none;
    }
`
const NavLi = styled.li`
    margin-right: 60px;
    @media all and (max-width:980px){
    margin-right: 20px;
    }
`
const NavLiA = styled(NavLink)`
    font-size: 20px;
    font-weight: 600;
    &.active {
        font-weight: 600;
        border-bottom: 2px solid #000;
    }
    @media all and (max-width:1280px){
        font-size: 18px;
    }

`
const RightUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width:768px){
        display: none;
    }
`
const RightLi = styled.li`
    margin-right: 50px;
    &.button {
        padding: 10px 35px;
        border: 1px solid #000;
        border-radius: 4px;
    }
    @media all and (max-width:1280px){
        margin-right: 20px;
    }
`
const RightLiA = styled.a`
    font-size: 20px;
    font-weight: 600;
    @media all and (max-width:1280px){
        font-size: 18px;
    }
    
`
