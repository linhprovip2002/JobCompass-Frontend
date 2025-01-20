import { linkFooter } from '@/lib/data/link-footer';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import footerLogo from '@/assets/svgs/footer-logo.svg';
import Image from 'next/image';

export function FooterSection() {
    return (
        <footer className="bg-gray-950">
            <div className="px-3 lg:px-0 mx-auto pt-24 pb-20 container max-w-screen-xl grid grid-cols-5 gap-10">
                <div className="col-span-5 lg:col-span-2 max-w-80 text-gray-500 mx-auto">
                    <div className="mb-6">
                        <Image src={footerLogo} alt="JobCompass" height={26} width={180} />
                    </div>
                    <p className="mb-3 text-lg">
                        Call now: <span className="text-white font-medium">(319) 555-0115</span>
                    </p>
                    <p>6391 Elgin St. Celina, Delaware 10299, New York, United States of America</p>
                </div>
                <div className="col-span-5 lg:col-span-3 flex items-start justify-between flex-wrap gap-y-5 [&_div]:basis-1/2 xl:[&_div]:basis-1/4">
                    {linkFooter.map((section, index) => (
                        <div key={index}>
                            <p className="mb-4 text-xl text-white font-medium">{section.title}</p>
                            {section.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="mb-2 group flex items-center text-base font-normal text-gray-500 -translate-x-4 hover:translate-x-0 transition-all"
                                >
                                    <LuArrowRight className="text-transparent group-hover:text-white transition-all" />
                                    <span className="group-hover:translate-x-0.5 group-hover:text-white transition-all">
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-t border-t-gray-800">
                <div className="px-3 mx-auto py-6 container max-w-screen-xl flex items-center justify-center md:justify-between flex-wrap gap-5 text-gray-500">
                    <span className="text-sm">@ 2024 MyJob - Job Portal. All rights Reserved</span>
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://facebook.com/"
                            target="_blank"
                            className="size-5 hover:text-white hover:scale-110 transition-all"
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            href="https://www.youtube.com/"
                            target="_blank"
                            className="size-5 hover:text-white hover:scale-110 transition-all"
                        >
                            <FaYoutube />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            target="_blank"
                            className="size-5 hover:text-white hover:scale-110 transition-all"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            href="https://x.com/"
                            target="_blank"
                            className="size-5 hover:text-white hover:scale-110 transition-all"
                        >
                            <FaXTwitter />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
