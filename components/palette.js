import { FoldIcon, FoldDownIcon, FoldUpIcon } from '@primer/octicons-react'
import styles from '../styles/palette.module.css'
import Link from 'next/link'

console.log(styles)

const Palette = ({ background, margin, padding, position, screenshot, width, setBackground, setMargin, setPadding, setPosition, setWidth }) => {

    const colors = [
        ['#0f2027', '#203a43', '#2c5364'],
        ['#642b73', '#c6426e', '#d1678b'],
        ['#1b1b1b', '#3e3e3e', '#595959'],
        ['#380036', '#7b2e8e', '#945db7'],
        ['#9e768f', '#d6b4d0', '#e6ccd9'],
        ['#864ba2', '#c39ecb', '#d9c9dd'],
        ['#c6ffdd', '#fbd786', '#f7797d'],
        ['#b0f3f1', '#d9f9f9', '#eefdfd'],
        ['#aa4b6b', '#6b6b83', '#3b8d99'],
        ['#0d324d', '#2a5c73', '#4a849b'],
    ]

    return screenshot
    ?   <div className = {styles.Background}>
            {colors.map(color => <div className = {color[0] === background[0] && color[1] === background[1] && color[2] === background[2] ? styles.PaletteSelected : styles.Palette} onClick = {() => setBackground(color)} style = {{background: `linear-gradient(to right, ${color[0]}, ${color[1]}, ${color[2]})`}}></div>)}
            <div className = {styles.Custom}>
                <div className = {styles.Hex}><input placeholder = {'Color 1'} value = {background[0]} onChange = {e => setBackground([e.target.value, background[1], background[2]])}/><div style = {{background: background[0]}}></div></div>
                <div className = {styles.Hex}><input placeholder = {'Color 2'} value = {background[1]} onChange = {e => setBackground([background[0], e.target.value, background[2]])}/><div style = {{background: background[1]}}></div></div>
                <div className = {styles.Hex}><input placeholder = {'Color 3'} value = {background[2]} onChange = {e => setBackground([background[0], background[1], e.target.value])}/><div style = {{background: background[2]}}></div></div>
            </div>
            <div className = {styles.Separator}/>
            <div className = {styles.Settings}>
                <table>
                    <tbody>
                        <tr>
                            <td><span>Width</span></td>
                            <td><input type = 'range' min = '1' max = '1500' value = {width} className = 'slider' id = 'width' onChange = {e => setWidth(e.target.value)}/></td>
                            <td><span>{width}px</span></td>
                        </tr>
                        <tr>
                            <td><span>Padding</span></td>
                            <td><input type = 'range' min = '0' max = '200' value = {padding} className = 'slider' id = 'padding' onChange = {e => setPadding(e.target.value)}/></td>
                            <td><span>{padding}px</span></td>
                        </tr>
                        <tr>
                            <td><span>Margin</span></td>
                            <td><input type = 'range' min = '-200' max = '200' value = {margin} className = 'slider' id = 'padding' onChange = {e => setMargin(e.target.value)}/></td>
                            <td><span>{margin}px</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className = {styles.Separator}/>
            <div className = {styles.Position}>
                <div className = {position === 'center' ? styles.IconSelected : styles.Icon} onClick = {() => setPosition('center')}><FoldIcon/></div>
                <div className = {position === 'top'    ? styles.IconSelected : styles.Icon} onClick = {() => setPosition('top')}><FoldDownIcon/></div>
                <div className = {position === 'bottom' ? styles.IconSelected : styles.Icon} onClick = {() => setPosition('bottom')}><FoldUpIcon/></div>
            </div>
            <div className = {styles.Separator}/>
            <div className = {styles.About}>
                <Link href = '/about'>About</Link>
                <Link href = '/privacy'>Privacy</Link>
                <Link href = 'https://github.com/erikmartinjordan'>Source</Link>
            </div>
        </div>
    :   null

}

export default Palette