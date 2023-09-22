import { Avatar } from "@mui/joy";
import { ReactElement, useState } from "react";
import { styled } from "styled-components";
import { generateBoxShadows } from "../../helpers/generateBoxShadows";
import { Instagram, Email, WhatsApp } from "@mui/icons-material";
import profilePic from "../../assets/profilePic.jpg";

const FirstPageDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SelectorsDiv = styled.div<AboutMeDivProps>`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s ease; /* Add this line for smooth transition */

  transform: translateY(
    ${(props) => (props.open ? "1rem" : "-8rem")}
  ); /* Specify scale directly */
`;

const Selector = styled.a`
  //   border: 1px solid white;
  color: white;
  padding: 1rem;
  border-radius: 90px;
  box-shadow: ${generateBoxShadows(2)};
  cursor: pointer;
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease; /* Add this line for smooth transition */

  &: hover {
    transform: scale(1.1);
    color: wheat;
  }
`;

const SelectorText = styled.h3``;

const AvatarDiv = styled.div<AboutMeDivProps>`
  padding: 0.1rem;
  background-color: wheat;
  border-radius: 50% / 50%;
  transition: transform 0.3s ease, opacity 0.3s ease; /* Add opacity transition */

  box-shadow: ${generateBoxShadows(2)};

  transform: translateY(
    ${(props) => (props.open ? "-2rem" : "7rem")}
  ); /* Specify scale directly */

  &:hover {
    color: wheat;
  }
`;

interface AboutMeDivProps {
  open: boolean;
}
const AboutMeDiv = styled.div<AboutMeDivProps>`
  pointer-events: none;
  opacity: 0;
  padding: 1rem;
  transition: opacity 0.5s ease; /* Add opacity transition */

  ${(props) =>
    props.open &&
    `  
    display: block;
    opacity: 1;`}
`;

export function FirstPage(): ReactElement {
  const [open, setOpen] = useState(false);

  const handleAvatarClick = () => {
    setOpen(!open);
  };

  return (
    <FirstPageDiv>
      <AvatarDiv open={open} onClick={handleAvatarClick}>
        <Avatar sx={{ width: "10rem", height: "10em" }} src={profilePic} />
      </AvatarDiv>

      <AboutMeDiv open={open}>
        Olá, sou Gabriel Aroucha, um jovem engenheiro civil de 24 anos, formado
        pela UNDB. Minha paixão pela construção e pelo design sustentável me
        impulsionou a buscar conhecimento e experiência na área. Estou dedicado
        a contribuir para um futuro mais sustentável e seguro por meio da minha
        expertise em engenharia civil. Junte-se a mim nessa jornada de construir
        um mundo melhor!
      </AboutMeDiv>

      <SelectorsDiv open={open}>
        <Selector href="https://www.instagram.com/eng_aroucha/">
          <Instagram fontSize="large" />
          <SelectorText>INSTAGRAM</SelectorText>
        </Selector>
        <Selector href="https://api.whatsapp.com/send?phone=5598981293601">
          <WhatsApp fontSize="large" />
          <SelectorText>WHATSAPP</SelectorText>
        </Selector>
        <Selector href="mailto:biel_aroucha@hotmail.com">
          <Email fontSize="large" />
          <SelectorText>EMAIL</SelectorText>
        </Selector>
      </SelectorsDiv>
    </FirstPageDiv>
  );
}
