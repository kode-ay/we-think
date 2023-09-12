"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [img, setImg] = useState("heroo");
  const changeImg = (img) => {
    setImg(img);
  }

  return (
    <main className="px-40 py-20 pr-0 flex justify-between items-center h-screen bg-grad text-white">
      <div className="text flex flex-col justify-between items-start h-full max-w-lg">
        <Image src="/we think/we think.png" width={192} height={62} />
        <h1 className="font-bold text-7xl font-mainSlim">
          cool projects for you!
        </h1>
        <ul className="links flex flex-col gap-8 font-main">
          <li onMouseOver={() => changeImg("confiplay")}>
            <Link href="/confiplay" className="opacity-70 text-2xl">
              &gt; Confi-PLAY
            </Link>
          </li>
          <li onMouseOver={() => changeImg("enola")}>
            <Link href="/enola" className="opacity-70 text-2xl">
              &gt; Enola
            </Link>
          </li>
        </ul>
        <h3 className="px-12 py-5 font-bold text-5xl bg-white bg-opacity-5 rounded-full font-mainSlim flex gap-2 items-center">
          <span className="text-pur">&lt;</span>welcome
          <span className="text-pur">/&gt;</span>
          <Image src="/we think/star.png" width={27} height={27} />
        </h3>
      </div>
      <div className="image relative flex justify-end items-center">
        <Link href={`/${img}`}>
          <Image
            src={`/we think/${img}.jpg`}
            width={614}
            height={392}
            className="relative z-10 rounded-l-3xl"
          />
        </Link>
        <Image
          src="/we think/gradient.png"
          width={514}
          height={514}
          className="grad absolute"
        />
      </div>
    </main>
  );
}
