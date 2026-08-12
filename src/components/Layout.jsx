import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}