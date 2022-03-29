import { useEffect, useState } from 'react'
import { palette, stylePalette } from '../utils/styles'
import { PlusCircleIcon } from '@primer/octicons-react'
import styles from '../styles/palette.module.css'

const Colors = ({ background, setBackground }) => {

    const [colors, setColors] = useState(palette)
    const [displayCustom, setDisplayCustom] = useState(false)

    useEffect(() => {

        const handleClick = (e) => {

            if(!document.getElementById('Custom')?.contains(e.target) && displayCustom) {

                if(!JSON.stringify(colors).includes(JSON.stringify(background))){

                    setColors([...colors, background])

                }

                setDisplayCustom(!displayCustom)

            }

        }

        window.addEventListener('click', handleClick)

        return () => window.removeEventListener('click', handleClick)

    }, [background, displayCustom])

    return(
        <div className = {styles.Colors}>
            {colors.map((color, i) => <div key = {i} className = {JSON.stringify(color) === JSON.stringify(background) ? styles.PaletteSelected : styles.Palette} onClick = {() => setBackground(color)} style = {stylePalette(color)}></div>)}
            <div onClick = {() => setDisplayCustom(true)} style = {{ position: 'relative', margin: '2px'}}>
                <PlusCircleIcon size = {20} className = {styles.Plus}/>
                { displayCustom
                ? <div className = {styles.Custom} id = 'Custom'>
                    <div className = {styles.Hex}><input placeholder = {'Color 1'} value = {background[0]} onChange = {e => setBackground([e.target.value, background[1], background[2]])}/><div style = {{background: background[0]}}></div></div>
                    <div className = {styles.Hex}><input placeholder = {'Color 2'} value = {background[1]} onChange = {e => setBackground([background[0], e.target.value, background[2]])}/><div style = {{background: background[1]}}></div></div>
                    <div className = {styles.Hex}><input placeholder = {'Color 3'} value = {background[2]} onChange = {e => setBackground([background[0], background[1], e.target.value])}/><div style = {{background: background[2]}}></div></div>
                </div>
                : null}
            </div>
        </div>
    )
}

export default Colors