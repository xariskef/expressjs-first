import { MessageSquare, Shield, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    { 
      title: "Άμεση Επικοινωνία", 
      description: "Συνομιλήστε σε πραγματικό χρόνο με άλλου�� χρήστες",
      icon: MessageSquare
    },
    { 
      title: "Ασφάλεια", 
      description: "Προηγμένα μέτρα ασφαλείας για την προστασία των συνομιλιών σας",
      icon: Shield
    },
    { 
      title: "Γρήγορη Απόδοση", 
      description: "Βελτιστοποιημένο για ταχύτητα και αποδοτικότητα",
      icon: Zap
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Τα Χαρακτηριστικά μας</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

