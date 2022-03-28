import Colors from './colors'
import Settings from './settings'
import Position from './position'
import About from './about'
import styles from '../styles/palette.module.css'

const Palette = ({ background, margin, padding, position, screenshot, width, setBackground, setMargin, setPadding, setPosition, setWidth }) => {

    return (
        <div className = {styles.Background}>
            <Colors
                background = {background}
                setBackground = {setBackground}
            />
            <div className = {styles.Separator}/>
            <Settings
                margin = {margin}
                padding = {padding}
                width = {width}
                setMargin = {setMargin}
                setPadding = {setPadding}
                setWidth = {setWidth}
            />
            <div className = {styles.Separator}/>
            <Position
                position = {position}
                setPosition = {setPosition}
            />
            <div className = {styles.Separator}/>
            <About/>
        </div>
    )

}

export default Palette