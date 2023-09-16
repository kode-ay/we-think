import Link from 'next/link';
import Image from 'next/image';

export default function Fun() {
  return (
    <section className="px-20 py-6 pt-32 flex justify-between items-center flex-wrap">
      <Image className='flex-1' src="/enola/fun kids.svg" width={300} height={300} />
      <div className="text flex flex-col gap-6 items-end text-right">
        <h1 className="font-head text-6xl font-bold max-w-xl">
          Enola Says: Creativity and Fun
        </h1>
        <p className="font-bold max-w-sm">
          Let your imagination run wild and have a blast with me, where
          creativity meets fun! Come join me and discover a world of endless
          possibilities!"
        </p>
        <Link
          href="/"
          className="font-bold py-2 px-5 bg-btn rounded-lg text-white shadow-lg shadow-pur"
        >
          Play a Game?
        </Link>
      </div>
    </section>
  );
}