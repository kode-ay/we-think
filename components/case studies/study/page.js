import Link from "next/link";
import Image from "next/image";

export default function Study() {
  return (
    <div>
      <div className="tags">
        <div className="tag">Website</div>
        <div className="tag">Portfolio</div>
      </div>
      <div className="name">Portfolio</div>
      <div className="title">
        Lets create that beautiful portfolio for your business
      </div>
      <div className="description">
        A well-curated portfolio is a powerful marketing tool that can help you
        attract new clients and grow your business.
      </div>
      <Link href="/" className="text-sm font-semibold flex gap-3 items-center">
        <span>View Project</span>
        <Image src="/confiplay/left.svg" width={11} height={10} />
      </Link>
      <Image src="/projects.jpg" width={100} height={100} />
    </div>
  );
}
