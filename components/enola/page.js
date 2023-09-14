import Hello from "./hello/page";
import Hero from "./hero/page";
import NavBar from "./navbar/page";

export default function Enola() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Hello />
    </main>
  );
}
