import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="min-h-screen p-4 px-10 flex flex-col gap-3 font-[Bricolage_Grotesque]  mx-auto bg-[hsl(243,96%,9%)]">
      <Navbar />
      <Header />
      <MainContent />
    </div>
  );
}
