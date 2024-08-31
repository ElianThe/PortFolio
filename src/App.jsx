import { BrowserRouter } from 'react-router-dom'; //gére la navigation
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Interest } from './components';

const App = () => {
    return (
        <BrowserRouter>
            {/* bg = background;  */}
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                {/*<Interest />*/}
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
