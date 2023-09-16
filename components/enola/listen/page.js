import Link from 'next/link';
import Image from 'next/image';

export default function Listen() {
  return (
    <section className="px-20 py-6 pt-32 flex flex-col flex-wrap gap-6">
      <div className="top flex items-center justify-between">
        <h1 className="font-head text-6xl font-bold max-w-2xl">
          We are all different
        </h1>
        <Link
          href="/"
          className="font-bold py-2 px-5 bg-transparent border-pur border-2 rounded-lg text-pur shadow-lg shadow-pur"
        >
          Listen to Us
        </Link>
      </div>
      <div className="imgs flex justify-between gap-4">
        <Image className='flex-1 w-full max-w-full' src="/enola/kid1.svg" width={100} height={100} />
        <Image className='flex-1 w-full max-w-full' src="/enola/kid2.svg" width={100} height={100} />
        <Image className='flex-1 w-full max-w-full' src="/enola/kid3.svg" width={100} height={100} />
        <Image className='flex-1 w-full max-w-full' src="/enola/kid4.svg" width={100} height={100} />
      </div>
    </section>
  );
}