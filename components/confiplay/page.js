import CaseStudies from "../case studies/page";
import About from "./about/page";
import Hero from "./hero/page";
import Mission from "./mission/page";
import Navbar from "./navbar/page";
import Services from "./services component/page";

export default function ConfiPLAY() {
  return (
    <main className="bg-bg text-lt font-para">
      <Hero />
      <Navbar />
      <Mission />
      <About />
      <Services />
      <CaseStudies />
    </main>
  )
}