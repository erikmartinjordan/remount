import { useState } from 'react'
import Nav from '../components/nav'
import Palette from '../components/palette'
import Uploader from '../components/uploader'
import surf from '../assets/surf.png'

export default function Home() {

    const [background, setBackground] = useState('linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))')
    const [padding, setPadding] = useState(20)
    const [screenshot, setScreenshot] = useState(surf.src)
    const [width, setWidth] = useState(800)

    return(
        <div className = 'Screen'  style = {{background: 'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))'}}>
            <Nav
                screenshot = {screenshot}
            />
            <Uploader 
                background = {background}
                padding = {padding}
                screenshot = {screenshot} 
                width = {width}
                setBackground = {setBackground}
                setPadding = {setPadding}
                setScreenshot = {setScreenshot}
                setWidth = {setWidth}
            />
            <Palette 
                background = {background}
                padding = {padding}
                screenshot = {screenshot}
                width = {width}
                setBackground = {setBackground}
                setPadding = {setPadding}
                setWidth = {setWidth}
            />
        </div>
    )
}
