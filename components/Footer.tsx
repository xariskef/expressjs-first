import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Zlack
            </Link>
            <p className="mt-2 text-sm text-gray-400">© 2023 Zlack. Όλα τα δικαιώματα διατηρούνται.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/terms" className="text-gray-400 hover:text-white transition duration-300">
              Όροι Χρήσης
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition duration-300">
              Πολιτική Απορρήτου
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

