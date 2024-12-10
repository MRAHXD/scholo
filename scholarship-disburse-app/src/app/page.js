import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonial.jsx';
import Footer from '../components/Footer';
import "./globals.css";




export default function Home() {
  return (
    <>
      <Head>
        <title>Scholarship Portal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </>
  )
}
