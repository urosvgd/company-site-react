import React from 'react'
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrapper,
  WebsiteRights
} from './StyledFooter'

import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Sign In</FooterLink>
              <FooterLink to="/signin">How It Works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Carreers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destination</FooterLink>
              <FooterLink to="/">Sponsorship</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Videos</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">YouTube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/">Logo</SocialLogo>
            <WebsiteRights>LogoSite © {new Date().getFullYear()} all rights reserved</WebsiteRights>

              <SocialIcons>
                <SocialIconLink href="//www.facebook.com" target="_blank" arial-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="//www.instagram.com" target="_blank" arial-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="//www.youtube.com" target="_blank" arial-label="YouTube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="//www.twitter.com" target="_blank" arial-label="Twitter">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="//www.linkedin.com" target="_blank" arial-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
