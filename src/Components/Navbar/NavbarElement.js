import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import {Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    font-family: 'Russo One', sans-serif;
    background: #F3FAFF;
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarBox = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;
 
export const NavLogo = styled(LinkRouter)`
    color: #4A4A42;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        color: #4A4A42;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;        
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const NavItem = styled.li`
    height: 80px;

`;

export const NavLinks = styled(LinkScroll)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    /*Border action*/
    &.active {
        border-bottom: 3px solid #F3FAFF;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const NavBtnLink = styled(LinkRouter)`
    border-radius: 10px;
    background: #F89E95;
    white-space: nowrap;
    padding: 10px 22px;
    color: #4A4A42;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #F3FAFF;
        color: #F89E95;
    }

`
