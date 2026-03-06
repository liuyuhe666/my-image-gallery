import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/constants";
import GithubFill from "supercons/GithubFill";
import TwitterFill from "supercons/TwitterFill";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-white fixed inset-x-0 top-0 z-10 border-b border-gray-950/5">
            <div className="flex items-center justify-center gap-4">
                <Image src={siteInfo.author.avatar} alt={siteInfo.author.name} width={32} height={32} className="rounded-md" />
                <h1 className="text-sm font-semibold lg:text-base">{siteInfo.name}</h1>
            </div>
            <div className="flex items-end justify-center gap-2">
                <Link href={`https://github.com/${siteInfo.social.github}`} target="_blank">
                    <GithubFill />
                </Link>
                <Link href={`https://x.com/${siteInfo.social.twitter}`} target="_blank">
                    <TwitterFill />
                </Link>
            </div>
        </header>
    );
}