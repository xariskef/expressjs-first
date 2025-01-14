import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Επικοινωνήστε μαζί μας</h1>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Ονοματεπώνυμο</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Μήνυμα</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 border rounded-md"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Αποστολή
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

