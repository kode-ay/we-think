import Creative from "./creative/page";
import Footer from "./footer/page";
import Fun from "./fun/page";
import Hello from "./hello/page";
import Hero from "./hero/page";
import Listen from "./listen/page";
import NavBar from "./navbar/page";
import Route from "./route/page";

export default function Enola() {
  return (
    <main className="text-text">
      <NavBar />
      <Hero />
      <Hello />
      <Listen />
      <Fun />
      <Route />
      <Creative />
      <Footer />
    </main>
  );
}
