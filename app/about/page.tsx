import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Σχετικά με το Zlack</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            Το Zlack είναι μια σύγχρονη πλατφόρμα επικοινωνίας που στοχεύει στο να κάνει την online συνομιλία πιο εύκολη, γρήγορη και ασφαλή.
          </p>
          <p className="mb-4">
            Η ομάδα μας αποτελείται από παθιασμένους προγραμματιστές και σχεδιαστές που εργάζονται ακατάπαυστα για να προσφέρουν την καλύτερη δυνατή εμπειρία στους χρήστες μας.
          </p>
          <p className="mb-4">
            Με το Zlack, μπορείτε να συνδεθείτε με φίλους, συναδέλφους και νέες γνωριμίες σε ένα ασφαλές και φιλικό περιβάλλον.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4">Η αποστολή μας</h2>
          <p className="mb-4">
            Στόχος μας είναι να δημιουργήσουμε ένα διαδικτυακό χώρο όπου η επικοινωνία είναι απλή, άμεση και προσβάσιμη σε όλους. Πιστεύουμε ότι η καλή επικοινωνία είναι το κλειδί για την επίλυση προβλημάτων και τη δημιουργία ισχυρών σχέσεων.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

