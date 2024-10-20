import React from 'react';
import Header from './sections/header/Header';
import Experience from './sections/experience/Experience';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';

interface Props {}

const page = () => {
    return (
        <div>
            <section>
                <Header/>
            </section>
            <section>
                <Experience/>
            </section>
            <section>
                <Projects/>
            </section>
            <section>
                <Contact/>
            </section>
            <Footer/>
        </div>
    )
}

export default page