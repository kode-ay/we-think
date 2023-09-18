import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="px-20">
      <div className="top flex justify-between items-center">
        <h1 className="text-4xl font-bold">About Us</h1> 
        <Link href="/" className="text-sm font-semibold flex gap-3 items-center">
          <span>Read More</span>
          <Image src="/confiplay/left.svg" width={11} height={10} />
        </Link>
      </div>
      <div className="main py-10 flex justify-between items-center">
        <Image src="/confiplay/me.jpg" width={457} height={400} />
        <div className="text max-w-xl flex flex-col gap-10">
          <h2 className='font-bold text-2xl'>We are ConfiPL-AY!</h2>
          <p className='font-light text-lg'>
            We are a highly motivated and results-oriented team of Front-End
            Developers and Graphic Designers. <br />
            <br />
            Continuously expanding our skills and staying updated with industry
            trends, we collaborate effectively to deliver innovative and
            seamless digital experiences.
          </p>
          <Link href="/" className="text-sm font-semibold flex gap-3 items-center">
            <span>View Projects</span>
            <Image src="/confiplay/down.svg" width={11} height={10} />
          </Link>
        </div>
      </div>
    </section>
  );
}