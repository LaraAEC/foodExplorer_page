import { Container, Content } from './styles';

import MobileBannerPng from '../../assets/mobileBanner.png';
import DesktopBannerPng from '../../assets/desktopBanner.png';

import { useMediaQuery } from 'react-responsive';

import { UserMobileHeader } from '../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../components/UserDesktopHeader';

import { Section } from '../../components/Section';
import { DishCard } from '../../components/DishCard'; 
import { Footer } from '../../components/Footer'; 


export function UserDishDetails() {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const imageUrl = isMobile ? MobileBannerPng : DesktopBannerPng;


  return (
    <Container>

      {isMobile ? <UserMobileHeader /> : <UserDesktopHeader />}

      <main>

        <Content>
         
        </Content>

        <Footer />

      </main>

    </Container>
  )
}