import React from 'react';
import { 
  CloseIcon, 
  SidebarContainer, 
  Icon, 
  SideBtnWrap, 
  SidebarWrapper,
  SidebarRoute, 
  SidebarMenu,
  SidebarLink } from './StyledSidebar'

const Sidebar = ({ toggle, isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Services
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="signin">Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}


export default Sidebar;