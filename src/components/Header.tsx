import Image from 'next/image'
import Link from 'next/link'

import { siteInfo } from '@/constants'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold tracking-tight text-slate-900">{siteInfo.title}</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={siteInfo.repo}
            target="_blank"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
          >
            Star on GitHub
          </Link>
        </div>
      </div>
    </header>
  )
}
