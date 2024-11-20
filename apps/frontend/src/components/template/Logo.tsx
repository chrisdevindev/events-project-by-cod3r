import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return (
    <Link href="/" className={`${font.className} flex items-center gap-2`}>
      <Image src="/logo.svg" alt="logo" width={50} height={50} />
      <h1 className="leading-5 flex flex-col items-center text-lg">
        <div>
          CONVIT<span className="text-blue-300">3</span>
        </div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  );
}
