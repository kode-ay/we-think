import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const userImgs = '123456';

  return (
    <header className="px-20 py-6 pt-32 flex justify-between items-start flex-wrap max-h-screen">
      <div className="text flex flex-col gap-9 items-start justify-between">
        <h1 className="font-head text-6xl font-bold max-w-2xl">
          We kids can equally be creative
        </h1>
        <p className="font-bold max-w-sm">
          My mission is to create designs that tell a story of better living,
          making people's lives more convenient and efficient.
        </p>
        <Link
          href="/"
          className="font-bold py-2 px-5 bg-btn rounded-lg text-white shadow-lg shadow-pur"
        >
          Contact Me
        </Link>
        <div className="peops flex items-center mt-52">
          <div className="imgs flex">
            {userImgs.split("").map((img, i, x, ind = ['0', '5', '10', '20', '40', '60']) => (
              <Image
                className={`relative -left-${(ind[i])}`}
                src={`/enola/user${img}.png`}
                width={60}
                height={60}
              />
            )) // 1 2 4 8       2 * i
            }
          </div>
          <p className="font-para font-bold">Draw Every Other Child Closer</p>
        </div>
      </div>
      <Image
        src="/enola/Girl with telescope.svg"
        width={300}
        height={300}
        className="flex-1 max-h-full"
      />
    </header>
  );
}