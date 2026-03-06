import Link from "next/link";
import { siteInfo } from "@/constants";

export default function Footer() {
    return (
        <footer className="text-center text-white p-4">
            Made with ❤️ by <Link href={siteInfo.author.url} target="_blank">{siteInfo.author.name}</Link>
        </footer>
    );
}