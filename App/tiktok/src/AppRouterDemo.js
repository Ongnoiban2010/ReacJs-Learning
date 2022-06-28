import { Routes, Route, Outlet, Link } from 'react-router-dom'
import HomePage from './pages/Home'
import NewPage from './pages/New'
import ContactPage from './pages/Contact'

function AppRouterDemo() {
    return ( <
        div >
        <
        nav >
        <
        ul >
        <
        li >
        <
        Link to = "/" > Home < /Link> <
        /li> <
        li >
        <
        Link to = "/news" > News < /Link> <
        /li> <
        li >
        <
        Link to = "/contact" > Contact < /Link> <
        /li> <
        /ul> <
        /nav>

        <
        Routes >
        <
        Route path = "/"
        element = { < HomePage / > }
        /> <
        Route path = "/news"
        element = { < NewPage / > }
        /> <
        Route path = "/contact"
        element = { < ContactPage / > }
        /> <
        Route path = "/admin"
        element = { < AdminPage / > }
        /> <
        /Routes> <
        /div>
    )
}

export default AppRouterDemo