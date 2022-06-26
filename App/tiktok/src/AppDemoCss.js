import Heading from './Heading'
import Paragraph from './Paragraph'
import Button from './Button'

function AppDemoCss() {
    return (
        <div>
            <Heading />
            <Paragraph />
            <Button/>
            <Button primary/>
            <Button primary disable/>
        </div>
    )
}

export default AppDemoCss