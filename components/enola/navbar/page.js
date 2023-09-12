import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="px-20 py-6 flex justify-between items-center">
      <Image src="/enola/enola.png" width={94} height={28} />
      <ul className="links flex items-center gap-3">
        <Link href="/" className='font-bold p-4'>About</Link>
        <Link href="/" className='font-bold p-4'>Character</Link>
        <Link href="/" className='font-bold p-4'>Route</Link>
        <Link href="/" className='font-bold p-4'>Support</Link>
      </ul>
      <Link href="/" className='font-bold py-2 px-5 bg-btn rounded-lg text-white shadow-lg shadow-pur'>Contact Me</Link>
    </nav>
  );
}