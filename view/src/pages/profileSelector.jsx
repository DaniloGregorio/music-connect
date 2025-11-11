import mic from "../assets/images/microfone.svg";
import headset from "../assets/images/headfone.svg";
import Databox from "../components/databox";

function ProfileSelector() {
  return (
    <div className="min-h-screen w-full flex-col items-center justify-center bg-black text-white">
      <div className="flex-col  items-center justify-center p-8">
        <span className="text-xl font-bold mb-2 text-center">
          <span className="bg-gradient-to-r from-yellow-300 to-pink-400 text-transparent bg-clip-text">
            Escolha seu perfil
          </span>
        </span>

        <p className="text-lg text-zinc-400 pt-10">
          Você quer se cadastrar como artista ou como contratante?
        </p>
        <Databox
          title={"Sou Artista"}
          description={"Divulgue seu talento e receba convites para eventos"}
          imageUrl={mic}
          borderColor={"border-pink-400"}
          textColor={"text-pink-400"}
          hoverBorderColor={"hover : border-pink-500"}
        ></Databox>
        <Databox
          title={"Sou Contratante"}
          description={"Divulgue seu talento e receba convites para eventos"}
          imageUrl={headset}
          borderColor={"border-yellow-400"}
          textColor={"text-yellow-400"}
          hoverBorderColor={"hover : border-yellow-500"}
        ></Databox>

        <a
          href="#"
          className="text-zinc-400 pt-10 hover:text-white transition-colors"
        >
          Já tem uma conta?{" "}
          <span className="font-bold text-yellow-300">Entrar</span>
        </a>
      </div>
    </div>
  );
}
export default ProfileSelector;
