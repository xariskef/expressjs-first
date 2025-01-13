export default function Features() {
  const features = [
    { title: "Εύκολη Χρήση", description: "Διαισθητικό περιβάλλον για όλους τους χρήστες" },
    { title: "Γρήγορη Απόδοση", description: "Βελτιστοποιημένο για ταχύτητα και αποδοτικότητα" },
    { title: "Ασφάλεια", description: "Προηγμένα μέτρα ασφαλείας για την προστασία των δεδομένων σας" },
  ]

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Τα Χαρακτηριστικά μας</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

