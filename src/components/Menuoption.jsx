import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuOption = ({ Icon, label,to,onClick}) => (
  <NavLink to={to} style={{ textDecoration: "none", color: "inherit" }}>
    <MenuContainer onClick={onClick}>
      <Icon />
      <h3>{label}</h3>
    </MenuContainer>
  </NavLink>
);


export default MenuOption


const MenuContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:0.5rem;
padding: 14px 18px;
font-size: 0.7em;
letter-spacing: 2px;
color: white;
cursor: pointer;
border-radius: 8px;
border: 1px solid rgb(65, 65, 65);
transition-duration: 0.3s;
border-radius:0.35rem;

 

h3{
  font-weight:500;
  margin: 0;
  padding: 0;
}

&:hover{
  cursor: pointer; 
  background: linear-gradient(to right, rgb(59, 59, 59), rgb(34, 34, 34));
}


 @media (max-width: 768px) {
  display: none;
  }
   
   


`;