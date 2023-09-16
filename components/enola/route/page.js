import Link from "next/link";
import Image from "next/image";

export default function Route() {
  return (
    <section className="px-20 py-6 pt-32 flex flex-col flex-wrap gap-6 items-center">
      <h1 className="font-head text-6xl font-bold max-w-xl">En Route!</h1>
      <div className="imgs flex items-center justify-between gap-10 w-4/5">
        <div className="img flex flex-col gap-5 flex-1 h-full w-full items-center justify-between">
          <Image
            className="w-full"
            src="/enola/jurassic world.png"
            width={300}
            height={300}
            quality={100}
            priority
          />
          <p className="font-bold max-w-sm">Jurassic World</p>
        </div>
        <div className="img flex flex-col gap-5 flex-1 h-full w-full items-center justify-between">
          <Image
            className="w-full"
            src="/enola/disney land.png"
            width={300}
            height={300}
            quality={100}
            priority
          />
          <p className="font-bold max-w-sm">Disney Land</p>
        </div>
        <div className="img flex flex-col gap-5 flex-1 h-full w-full items-center justify-between">
          <Image
            className="w-full"
            src="/enola/nickelodeon.png"
            width={300}
            height={300}
            quality={100}
            priority
          />
          <p className="font-bold max-w-sm">Nickelodeon</p>
        </div>
      </div>
      <Link
        href="/"
        className="font-bold py-2 px-5 bg-btn rounded-lg text-white shadow-lg shadow-pur"
      >
        Get Creative
      </Link>
    </section>
  );
}
