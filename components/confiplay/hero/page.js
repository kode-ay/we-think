import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className="relative h-screen flex flex-col justify-between items-center gap-3 pt-28 px-20 font-para">
      <div className="main flex flex-col justify-center items-center gap-3">
        <h1 className="text-6xl max-w-4xl text-center font-bold">
          <span className="text-prim">PROFESSIONAL</span> DESIGNERS AND
          DEVELOPERS AT YOUR FINGERTIPS
        </h1>
        <p className="font-extralight text-sm">
          Quality as a priority. Efficiency as an advantage. Project success as
          the main goal
        </p>
        <Link
          href="/"
          className="font-extralight py-3 px-12 rounded-full border-2 border-lt flex gap-4 my-7"
        >
          <span>Contact Us</span>
          <Image src="/confiplay/left.svg" width={11} height={10} />
        </Link>
      </div>
      <div className="btm flex justify-between w-full items-center pb-20 text-sm">
        <div className="text max-w-xs">
          <h3 className="font-semibold flex justify-between">
            Smiles <Image src="/confiplay/stars.svg" width={76} height={11} />
            <span className="font-extralight"> 5.0</span>
          </h3>
          <p className="font-extralight">
            This isn't our rating of us <br /> Shall we shock you?
          </p>
        </div>
        <div className="go-down w-9 h-9 flex justify-center items-center rounded-full border-neutral-600 border-2">
          <Image src="/confiplay/down.svg" width={11} height={10} />
        </div>
      </div>

      {/* <div className="ball-bg absolute bg-fg blur-3xl w-96 h-96 rounded-full opacity-10 pointer-events-none -bottom-1/2 -left-1/2"></div> */}
    </header>
    // ? Adding Emojis to sites is CLEAN!!!
  );
}