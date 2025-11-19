import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Counter from './components/Counter';
import FAQ from './components/FAQ';
import Tabs from './components/Tabs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App(){
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main>
        <Services />
        <Gallery />
        <Videos />
        <Counter />
        <FAQ />
        <Tabs />
        <section>
          <h2>Location</h2>
          <p>We are located in Homa Bay, Legacy Plaza – 2nd Floor, Door No. 25</p>
        </section>
        <section>
          <h2>Working Days</h2>
          <table>
            <thead><tr><th>Day</th><th>Time</th></tr></thead>
            <tbody>
              <tr><td>Monday</td><td>8am - 5pm</td></tr>
              <tr><td>Tuesday</td><td>8am - 5pm</td></tr>
              <tr><td>Wednesday</td><td>8am - 5pm</td></tr>
              <tr><td>Thursday</td><td>8am - 5pm</td></tr>
              <tr><td>Friday</td><td>8am - 5pm</td></tr>
              <tr><td>Saturday</td><td>Closed</td></tr>
              <tr><td>Sunday</td><td>8am - 5pm</td></tr>
            </tbody>
          </table>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}