import Image from 'next/image';
import Link from 'next/link';

export default function Hello() {
  return (
    <section className="px-20 py-6 pt-32 flex justify-between items-center flex-wrap gap-10">
      <div className="text flex flex-col gap-6 items-start">
        <h1 className="font-head text-6xl font-bold max-w-2xl">
          Hello Children!
        </h1>
        <p className="font-bold max-w-sm">
          Hi! I am Enola and I'm excited to present my portfolio, which is
          dedicated to showcasing that kids like me can work, play, and be just
          as creative as anyone else.{" "}
        </p>
        <Link
          href="/"
          className="font-bold py-2 px-5 bg-btn rounded-lg text-white shadow-lg shadow-pur"
        >
          Contact Me
        </Link>
      </div>
      <Image className='flex-1' src="/enola/sleeping enola.svg" width={300} height={300} />
    </section>
  );
}