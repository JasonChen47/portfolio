import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hi 👋, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Jason Chen</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Biomedical Engineer in Training</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Come see what I've been working on!</p>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.8*1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contato" className="button">Message me!</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
          <img src={Illustration} alt="Ilustração"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}