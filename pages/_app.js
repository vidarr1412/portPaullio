import '../styles/globals.css';
import Navbar from '../components/Nav';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-4 max-w-1xl mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
}
