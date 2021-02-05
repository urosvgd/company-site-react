import React, { useState } from 'react'
import Video from '../../video/video2.mp4'
import {
  HeroBG,
  HeroContainer,
  VideoBG,
  HeroBtnWrapper,
  HeroH1,
  HeroContent,
  HeroP,
  ArrowForward,
  ArrowRight
} from './StyledHero'
import { Button } from '../StyledButton';

const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => setHover(!hover)

  return (
    <HeroContainer>
      <HeroBG>
        <VideoBG autoPlay loop muted src={Video} type="video/mp4" controls={false} />
      </HeroBG>
      <HeroContent>
        <HeroH1>Some text here:)</HeroH1>
        <HeroP>Learn more about me:)</HeroP>
        <HeroBtnWrapper>
          <Button primary="true" dark="true" onMouseEnter={onHover} onMouseLeave={onHover} to="aboutme">About me {hover ? <ArrowForward /> : <ArrowRight />}</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
