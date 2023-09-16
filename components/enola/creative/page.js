import Image from 'next/image';

export default function Creative() {
  return (
    <section className="relative mx-20 my-6 mt-32 px-16 py-14 pb-80 flex justify-between items-center flex-wrap rounded-3xl bg-lite">
      <div></div>
      <Image className='absolute bottom-11 left-9 max-w-full' src="/enola/girl play.svg" width={1300} height={1300} />
      <div className="text flex flex-col gap-6 items-end text-right">
        <h1 className="font-head text-6xl font-bold max-w-3xl">
          Creativity is in every child
        </h1>
        <p className="font-bold max-w-md">
          My mission is to create designs that tell a story of better living,
          making people's lives more convenient and efficient.
        </p>
        <div className="nums flex gap-16">
          <div className="num flex flex-col items-center gap-3">
            <span className="font-head text-6xl font-bold max-w-2xl">160+</span>
            <h3 className="font-bold max-w-min text-center">
              Partnering Children
            </h3>
          </div>
          <div className="num flex flex-col items-center gap-3">
            <span className="font-head text-6xl font-bold max-w-2xl">50+</span>
            <h3 className="font-bold max-w-min text-center">Active Games</h3>
          </div>
          <div className="num flex flex-col items-center gap-3">
            <span className="font-head text-6xl font-bold max-w-2xl">500+</span>
            <h3 className="font-bold max-w-min text-center">
              Positive Feedbacks
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}