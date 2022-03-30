import { useEffect, useState } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Palette from '../components/palette'
import Uploader from '../components/uploader'
import surf from '../assets/surf.png'
import styles from '../styles/home.module.css'

const Home = () => {

    const [background, setBackground] = useState(['#642b73', '#c6426e', '#d1678b'])
    const [margin, setMargin] = useState(0)
    const [padding, setPadding] = useState(40)
    const [position, setPosition] = useState('center')
    const [screenshot, setScreenshot] = useState(surf.src)
    const [width, setWidth] = useState(0)

    useEffect(() => {

        setWidth(Math.min(700, window.innerWidth))

    }, [])

    return(
        <div className = {styles.Screen}>
            <Head>
                <title>Remount - Upload a photo and customise the background</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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

export default Home