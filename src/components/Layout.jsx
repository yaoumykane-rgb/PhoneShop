import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="grow w-full"> {/* J'ai changé flex-grow en grow */}
        {children}
      </main>
      <Footer />
    </div>
  );
}