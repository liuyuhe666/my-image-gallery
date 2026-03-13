import Image from 'next/image'
import Link from 'next/link'
import GithubFill from 'supercons/GithubFill'
import TwitterxFill from 'supercons/TwitterxFill'

import { siteInfo } from '@/constants'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-12 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Link
            href={siteInfo.author.url}
            target="_blank"
          >
            <Image
              src={siteInfo.author.avatar}
              alt={siteInfo.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
          </Link>
          <span className="text-sm text-slate-500">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            {siteInfo.author.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`https://github.com/${siteInfo.social.github}`}
            target="_blank"
          >
            <GithubFill />
          </Link>
          <Link href={`https://twitter.com/${siteInfo.social.twitter}`} target="_blank">
            <TwitterxFill />
          </Link>
        </div>
      </div>
    </footer>
  )
}
