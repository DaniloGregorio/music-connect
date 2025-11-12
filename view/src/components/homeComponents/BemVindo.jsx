// src/components/Hero.jsx
import Center from "../layout/Center";
import Title from "../layout/Title";
import banda from "../../assets/images/banda.png";

function BemVindo() {
  return (
    <Center>
      <div className="flex flex-col lg:flex-row justify-between items-center py-16 px-12 md:px-20">
        <div className="max-w-xl mb-12 lg:mb-0">
          <h1 className="text-5xl font-bold mb-10 text-center">
            <span className="bg-linear-to-r from-yellow-300 to-pink-400 text-transparent bg-clip-text">
              Conecte talentos. Amplifique sons
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Uma plataforma para artistas, bandas, produtores, e fãs se
            encontrarem através da música.
          </p>
        </div>
        <div></div>
        <img src={banda} className="w-150 h-150 ml-20"></img>
      </div>
    </Center>
  );
}

export default BemVindo;
