import React from 'react'
import Header from './sections/header/Header'
import Experience from './sections/experience/Experience'
import Projects from './sections/projects/Projects'
import TechStack from './sections/techSatck/TechStack'
import Contact from './sections/contact/Contact'

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
            <TechStack/>
        </section>
        <section>
            <Contact/>
        </section>
    </div>
    )
}

export default page