import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';
import NavBar from './components/NavBar';

const App = () => {
  
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
     <Footer />
    </main>
  )
}

// export default App
export default Sentry.withProfiler(App);