import React from 'react'
import Header from './sections/header/Header'
import Experience from './sections/experience/Experience'

interface Props {}

const page = () => {
    return <div>
        <section>
            <Header/>
        </section>
        <section>
            <Experience/>
        </section>
  </div>
}

export default page