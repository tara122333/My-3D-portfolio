import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            {/* <Hero /> */}
          </div>
          {/* <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          */}
          <div className='relative z-0 h-96'>
            <Contact />
            {/* <StarsCanvas /> */}
          </div> 
        </div>
    </>
  );
}

export default App;
