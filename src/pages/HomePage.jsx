import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Consultation from '../components/Consultation/Consultation'
import Instagram from '../components/Instagram/Instagram'
import Colaborations from '../components/Colaborations/Colaborations'
import DataStudies from '../components/DataStudies/DataStudies'
import Podcast from '../components/Podcast/Podcast'
import Courses from '../components/Courses/Courses'
import Blog from '../components/Blog/Blog'
import Footer from '../components/Footer/Footer'


const HomePage = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <Consultation />
            <Colaborations />
            <DataStudies />
            <Podcast />
            <Courses />
            {/* <Blog /> */}
            <Instagram />
            <Footer />
        </>
    )
}

export default HomePage