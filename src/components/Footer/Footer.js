import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:9478896750">9478896750</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:singlaniwark4214@gmail.com">singlaniwark4214@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating One Project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
      <SocialIcons href="https://github.com"><AiFillGithub size="3rem"/></SocialIcons>
      <SocialIcons href="https://linkedin.com"><AiFillLinkedin size="3rem"/></SocialIcons>
      <SocialIcons href="https://instagram.com"><AiFillInstagram size="3rem"/></SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
