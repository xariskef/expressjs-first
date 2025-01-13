import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          DemoSite
        </Link>
        <ul className="flex items-center space-x-4">
          <li><Link href="/">Αρχική</Link></li>
          <li><Link href="/about">Σχετικά</Link></li>
          <li><Link href="/contact">Επικοινωνία</Link></li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Εγγραφή
        </button>
      </nav>
    </header>
  )
}

