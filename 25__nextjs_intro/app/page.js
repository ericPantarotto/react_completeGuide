import Link from 'next/link';
// import Header from '../components/header';
import Header from '@/components/header';

export default function Home() {
  console.info('testing where this gets printed');

  return (
    <main>
      {/* <img src='/logo.png' alt='A server surrounded by magic sparkles.' />
      <h1>Welcome to this NextJS Course!</h1> */}
      <Header />

      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/* <a href='/about'>About Us</a> */}
        <Link href='/about'>About us</Link>
      </p>
    </main>
  );
}
