import Link from 'next/link';

export default function Hero() {
  return (
    <header>
      <div className="text">
        <h1>We kids can equally be creative</h1>
        <p>
          My mission is to create designs that tell a story of better living,
          making people's lives more convenient and efficient.
        </p>
        <Link
          href="/"
          className="font-bold py-2 px-5 bg-btn rounded-lg text-white shadow-lg shadow-pur"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
}