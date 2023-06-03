import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import StarsCanvas from "./components/canvas/StartCanvas";

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
          */}
          <div className="h-screen w-full bg-secondary">
            sdjbsbfjks
          </div>
          <Works />
          {/* <Feedbacks /> */}
          
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div> 
        </div>
    </>
  );
}

export default App;
