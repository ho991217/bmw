import styled from "styled-components";
import LOGO from "../assets/images/bmw-logo-white.svg";
import { TRANSITION, ZINDEX } from "../constants";
import { motion } from "framer-motion";

const Container = styled(motion.nav)`
   display: flex;
   position: fixed;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   align-items: center;
   justify-content: space-between;
   width: 1248px;
   height: 84px;
   z-index: ${ZINDEX.NAVIGATION};
`;

const BMWLogo = styled.img.attrs({ src: LOGO, alt: "BMW Logo" })`
   width: 45px;
   height: 45px;
   overflow: hidden;
   flex-shrink: 0;
`;

const Nav = styled.ul`
   list-style: none;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 24px;
`;

const NavItem = styled.li`
   a {
      color: inherit;
      text-decoration: none;
   }
`;

const menu = ["모델", "전기차", "내 차량 만들기", "구매하기", "더 알아보기"];

function Navigation() {
   return (
      <Container
         initial={{
            top: -84,
            opacity: 0,
         }}
         animate={{
            top: 0,
            opacity: 1,
         }}
         transition={TRANSITION}
      >
         <BMWLogo />
         <Nav>
            {menu.map((item) => (
               <NavItem key={item}>
                  <a href="/">{item}</a>
               </NavItem>
            ))}
         </Nav>
      </Container>
   );
}

export default Navigation;
