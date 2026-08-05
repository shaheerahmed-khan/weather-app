import Navbar from "./Navbar";
import errorIcon from "/assets/images/icon-error.svg";
import retryIcon from "/assets/images/icon-retry.svg";

export default function ErrorScreen() {
  return (
    <div className="min-h-screen p-4 px-10 flex flex-col gap-3 font-[Bricolage_Grotesque]  mx-auto bg-[hsl(243,96%,9%)] text-white">
      <Navbar />
      <main className="m-4 p-6 flex flex-col items-center gap-6">
        <img src={errorIcon} alt="Error" className="w-8 h-8" />
        <h1 className="text-4xl font-bold">Something went wrong</h1>
        <p>
          We couldn't connect to the server(API error), Please try again in a
          few moments.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="flex items-center shadow-lg bg-[hsl(243,27%,20%)] hover:bg-[hsl(243,23%,30%)] py-2 px-4 rounded-md"
        >
          <img src={retryIcon} alt="Refresh" className="w-4 h-4 mr-2" />
          <span>Retry</span>
        </button>
      </main>
    </div>
  );
}
