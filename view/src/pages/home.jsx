import Infobox from "../components/Infobox";
import headfoneRoxo from "../assets/images/headfone-roxo.svg";
import seta from "../assets/images/seta.svg";
import quebraCabeca from "../assets/images/quebra-cabeca.svg";
import estrela from "../assets/images/estrela.svg";
import Center from "../components/Center";

function Home() {
  return (
    <>
      <div></div>
      <Center>
        <div className="min-h-screen flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-15">
            <Infobox
              borderColor="border-purple-700"
              imageURL={headfoneRoxo}
              title="Conexão direta"
              description="Conecte-se facilmente com outros artistas, produtores e locais."
              textColor="text-gray-300"
              titleColor="text-purple-500"
            />
            <Infobox
              borderColor="border-purple-700"
              imageURL={seta}
              title="Aumente sua Visibilidade"
              description="Seja notado por profissionais da indústria musical e escale sua carreira."
              textColor="text-gray-300"
              titleColor="text-purple-500"
            />
            <Infobox
              borderColor="border-purple-700"
              imageURL={quebraCabeca}
              title="Sistema de Avaliação"
              description="Sistema de avaliação embutido no aplicativo."
              textColor="text-gray-300"
              titleColor="text-purple-500"
            />
            <Infobox
              borderColor="border-purple-700"
              imageURL={estrela}
              title="Funcional e Adaptável"
              description="Uma plataforma criada para atender às suas necessidades únicas."
              textColor="text-gray-300"
              titleColor="text-purple-500"
            />
          </div>
        </div>
      </Center>
    </>
  );
}

export default Home;
