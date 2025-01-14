import Link from 'next/link'

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Καλώς ήρθατε στο Zlack</h1>
        <p className="text-xl mb-8">Ανακαλύψτε μια νέα εμπειρία επικοινωνίας</p>
        <Link href="/chat" className="bg-white text-blue-600 hover:bg-blue-100 transition duration-300 font-bold py-3 px-6 rounded-lg text-lg inline-block">
          Ξεκινήστε τη συνομιλία
        </Link>
      </div>
    </section>
  )
}

