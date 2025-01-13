import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 DemoSite. Όλα τα δικαιώματα διατηρούνται.</p>
        <div className="mt-4">
          <Link href="/terms" className="text-blue-600 hover:underline mr-4">Όροι Χρήσης</Link>
          <Link href="/privacy" className="text-blue-600 hover:underline">Πολιτική Απορρήτου</Link>
        </div>
      </div>
    </footer>
  )
}

