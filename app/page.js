import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="px-40 py-20 flex justify-between items-center h-screen bg-grad text-white">
      <div className="text flex flex-col justify-between items-start h-full max-w-lg">
        <Image src="/we think/we think.png" width={192} height={62} />
        <h1 className="font-bold text-7xl">cool projects for you!</h1>
        <ul className="links flex flex-col gap-8">
          <li>
            <Link href="/confiplay" className='opacity-70'>&gt; Confi-PLAY</Link>
          </li>
          <li>
            <Link href="/enola" className='opacity-70'>&gt; Enola</Link>
          </li>
        </ul>
        <h3>welcome</h3>
      </div>
      {/* <h1 className="flex items-center gap-2 p-5 justify-center text-2xl">
        <Image src="/we think/we think.png" width={200} height={200} />
      </h1>
      <div className="links flex justify-center gap-10 items-center p-10">
        <Link href="/enola" className="px-8 py-5 rounded-lg bg-slate-100">
          <Image src="/enola/enola.png" width={150} height={150} />
        </Link>
        <Link href="/confiplay" className="p-8 rounded-lg bg-sky-700">
          <Image src="/confiplay/confiplay.png" width={150} height={150} />
        </Link>
      </div> */}
    </main>
  );
}
