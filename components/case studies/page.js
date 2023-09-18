import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudies() {
  return (
    <section className="px-20 py-10 pt-16">
      <div className="top flex justify-between items-center">
        <h1 className="text-4xl font-bold">Case Studies</h1>
        <Link
          href="/"
          className="text-sm font-semibold flex gap-3 items-center"
        >
          <span>View All</span>
          <Image src="/confiplay/left.svg" width={11} height={10} />
        </Link>
      </div>
    </section>
  );
}