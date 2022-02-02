import React from "react";
import moto from "../Img/moto.jpg";
import moto2 from "../Img/moto2.png";
import oficina from "../Img/OFICINA.jpg";
import {
  ListaCredenciada,
  Moto,
  Moto2,
  Oficina,
  Section,
  Texto1,
  Texto2,
  Texto3,
  Texto4,
  Video,
} from "./HomeStyles";

function Home() {
  return (
    <>
      <Moto src={moto} alt="Imagem moto" />
      <Texto1>A SUA OFICINA DE MOTOS EM SÃO VICENTE</Texto1>
      <Moto2 src={moto2} alt="Imagem moto2" />
      <Texto2>
        <p>
          Com mais de<strong> 10 anos </strong>no mercado de reparos em
          motocicletas
        </p>
        <p>
          Mecânicos formados nas <strong>frábricas</strong>
        </p>
        <p>Atendimento técnico e especializado para melhor atender você</p>
      </Texto2>
      <Section>
        <Texto3>Localização da Oficina</Texto3>
        <Texto4>Nossa Oficina está localizada no centro da cidade</Texto4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.912517023273!2d-46.40311888553215!3d-23.963533482450664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1c7fd608ff31%3A0x9aa090fddabe9b88!2sR.%20Monte%20Plano%2C%20226%20-%20Vila%20Margarida%2C%20S%C3%A3o%20Vicente%20-%20SP%2C%2011330-707!5e0!3m2!1spt-BR!2sbr!4v1643679726280!5m2!1spt-BR!2sbr"
          style={{ border: 0, width: 800, height: 300 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
        <Texto3>Credenciada nas Marcas</Texto3>
        <ListaCredenciada>
          <Oficina src={oficina} alt="Imagem Oficina" />
          <p className="tip">HONDA</p>
          <p className="tip1">YAMAHA</p>
          <p className="tip1">SUZUKI</p>
          <p className="tip1">KAWASAKI</p>
          <p className="tip1">HARLEY-DAVIDSON</p>
        </ListaCredenciada>
        <Texto4>Saiba um pouco mais sobre nossa oficina!</Texto4>
        <Video
          src="https://www.youtube.com/embed/V31FzF7d8ac"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
          frameBorder={0}
        ></Video>
      </Section>
    </>
  );
}

export default Home;
