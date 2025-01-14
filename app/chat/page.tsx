import { Metadata } from 'next'
import Chat from '../../components/Chat'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Zlack Chat',
  description: 'Start chatting with Zlack',
}

export default function ChatPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Chat />
      </main>
      <Footer />
    </div>
  )
}

