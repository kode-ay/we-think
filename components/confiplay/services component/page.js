import Image from 'next/image';

export default function Services() {
  return (
    <section className="py-10 px-20 flex flex-col gap-12">
      <h1 className="text-4xl font-bold text-center">Services</h1>
      <div className="services flex items-center justify-between w-full">
        <div className="service flex flex-col gap-7 items-center">
          <Image
            src="/confiplay/app development.png"
            width={140}
            height={140}
          />
          <p>App Development</p>
        </div>
        <div className="service flex flex-col gap-7 items-center">
          <Image src="/confiplay/branding.png" width={140} height={140} />
          <p>Branding</p>
        </div>
        <div className="service flex flex-col gap-7 items-center">
          <Image
            src="/confiplay/design thinking.png"
            width={140}
            height={140}
          />
          <p>Design Thinking</p>
        </div>
        <div className="service flex flex-col gap-7 items-center">
          <Image
            src="/confiplay/web development.png"
            width={140}
            height={140}
          />
          <p>Web Development</p>
        </div>
      </div>
    </section>
  );
}