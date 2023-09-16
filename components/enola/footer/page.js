import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex justify-between px-20 py-8">
      <Image src="/enola/enola.png" width={94} height={28} />
      <div className="copyright font-bold">&copy; WeThink 2023</div>
    </footer>
  );
}