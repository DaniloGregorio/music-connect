import BemVindo from "../components/homeComponents/BemVindo";
import HomeCards from "../components/homeComponents/HomeCards";
import Header from "../components/homeComponents/Header";

function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-black to-purple-950 text-white font-sans">
      <Header />
      <main>
        <BemVindo />
        <HomeCards></HomeCards>
      </main>
    </div>
  );
}

export default Home;
