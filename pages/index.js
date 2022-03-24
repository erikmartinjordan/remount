import { useState } from 'react'
import Nav from '../components/nav'
import Palette from '../components/palette'
import Uploader from '../components/uploader'
import surf from '../assets/surf.png'
import styles from '../styles/home.module.css'

export default function Home() {

    const [background, setBackground] = useState(['#0f2027', '#203a43', '#2c5364'])
    const [margin, setMargin] = useState(0)
    const [padding, setPadding] = useState(40)
    const [position, setPosition] = useState('center')
    const [screenshot, setScreenshot] = useState(surf.src)
    const [width, setWidth] = useState(800)

    return(
        <div className = {styles.Screen}>
            <Nav
                screenshot = {screenshot}
            />
            <Uploader 
                background = {background}
                margin = {margin}
                padding = {padding}
                position = {position}
                screenshot = {screenshot} 
                width = {width}
                setBackground = {setBackground}
                setMargin = {setMargin}
                setPadding = {setPadding}
                setScreenshot = {setScreenshot}
                setWidth = {setWidth}
            />
            <Palette 
                background = {background}
                margin = {margin}
                padding = {padding}
                position = {position}
                screenshot = {screenshot}
                width = {width}
                setBackground = {setBackground}
                setMargin = {setMargin}
                setPadding = {setPadding}
                setPosition = {setPosition}
                setWidth = {setWidth}
            />
        </div>
    )
}
