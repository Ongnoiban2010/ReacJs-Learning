import {useLocation} from 'react-router-dom'

function Contact() {
    const location2 = useLocation();
    console.log(location2)
    return (
        <h1>Contact page</h1>
    )
}

export default Contact