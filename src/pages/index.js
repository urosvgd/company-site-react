import { useState } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';

import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Footer from '../components/Footer';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
