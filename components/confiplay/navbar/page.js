"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function Navbar() {
  const navRef = useRef(null);
  const [posi, setPosi] = useState(false);
  window.addEventListener("scroll", () => {
    // console.log(navRef.current.getBoundingClientRect().top);
    if (navRef.current.getBoundingClientRect().top <= 0)
      setPosi(true);
    else 
      setPosi(false);
  });

  return (
    <nav
      ref={navRef}
      className={`${
        posi ? "fixed top-0" : "absolute bottom-0"
      } w-full border-t-2 border-b-2 border-neutral-700 py-3 px-20 text-lt my-ani flex justify-between items-center backdrop-blur-md`}
    >
      <div className="go-down w-9 h-9 flex justify-center items-center rounded-full border-neutral-600 border-2">
        <Image src="/confiplay/down.svg" width={11} height={10} />
      </div>
      <div className="links flex items-center gap-40">
        <div className="logo font-bold">Confi-PL-AY!</div>

        <div className="navig flex items-center gap-4">
          <div className="txt">
            <ul className="flex gap-7 font-extralight text-xs">
              <li>
                <Link href="/">about us</Link>
              </li>
              <li>
                <Link href="/">case studies</Link>
              </li>
              <li>
                <Link href="/">contact us</Link>
              </li>
            </ul>
          </div>
          <span>|</span>
          <div className="ico">
            <ul className="flex gap-4 text-xs">
              <li>
                <Link href="/">X</Link>
              </li>
              <li>
                <Link href="/">In</Link>
              </li>
              <li>
                <Link href="/">Wh</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}