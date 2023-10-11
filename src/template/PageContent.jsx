import React from 'react'
import About from './About'
import Contact from './Contact'
import Menu from './Menu'

function PageContent() {
    return (<>
        <div className="w3-content" style={{ maxWidth: 1100 }}>
                <About/>
                <Menu/>
                <Contact/>
        </div>
    </>
    )
}

export default PageContent