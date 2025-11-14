import Infobox from "./Infobox";
import headFoneRoxo from "../../assets/images/headfone-roxo.svg";
import quebracabeca from "../../assets/images/quebra-cabeca.svg";
import estrela from "../../assets/images/estrela.svg";
import seta from "../../assets/images/seta.svg";

const featuresData = [
  {
    icon: headFoneRoxo,
    title: "Conexão direta",
    description:
      "Conecte-se facilmente com outros artistas, produtores e locais.",
  },
  {
    icon: seta,
    title: "Aumenta sua visibilidade",
    description:
      "Seja notado por profissionais da indústria musical e expanda sua carreira.",
  },
  {
    icon: estrela,
    title: "4.8+ Avaliações",
    description: "Avaliado positivamente por críticos.",
  },
  {
    icon: quebracabeca,
    title: "Funcional e Adaptável",
    description:
      "Uma plataforma criada para atender às suas necessidades únicas.",
  },
];

const HomeCards = () => {
  return (
    <section className="py-24 px-8 md:px-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 max-w-2xl">
        Navegue pelo universo da música com o Music Connect: sua rede de
        oportunidades.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuresData.map((feature, index) => (
          <Infobox
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCards;
