import Image from "next/image";
import mainFullLogoSvg from '@/assets/svgs/main-full-logo.svg'


export default function Home() {
  return (
    <div className="mt-40 flex items-center flex-col space-y-10">
      <h1 className="text-4xl">Welcome to JobCompass</h1>
      <Image src={mainFullLogoSvg} alt="JobCompass" width={400} height={100} />
    </div>
  );
}
