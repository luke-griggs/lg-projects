import Navbar from '../components/Navbar'
import Image from 'next/image'
import Main from '../components/Main'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
    return (
        <div>
        <Navbar />
        <Main />
        <About />
        <Contact />
        
        </div>
    
    )    
}
