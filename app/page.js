import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <h1 className="flex items-center gap-2 p-5 justify-center text-2xl">
        <Image src="/we think.png" width={200} height={200} />
      </h1>
      <div className="links flex justify-center gap-10 items-center p-10">
        <Link href="/enola" className='px-8 py-5 rounded-lg bg-slate-100'>
          <Image src="/enola/enola.png" width={150} height={150} />
        </Link>
        <Link href="/confiplay" className='p-8 rounded-lg bg-sky-700'>
          <Image src="/confiplay/confiplay.png" width={150} height={150} />
        </Link>
      </div>
    </main>
  );
}
