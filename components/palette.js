import { FoldIcon, FoldDownIcon, FoldUpIcon } from "@primer/octicons-react"

const Palette = ({ background, margin, padding, screenshot, width, setBackground, setMargin, setPadding, setPosition, setWidth }) => {

    const colors = [
        ['#0f2027', '#203a43', '#2c5364'],
        ['#642b73', '#c6426e', '#d1678b'],
        ['#aa4b6b', '#6b6b83', '#3b8d99'],
        ['#ffA17f', '#00223e', '#002a4d'],
    ]

    return screenshot
    ?   <div className = 'Background'>
            {colors.map(color => <div className = {color[0] === background[0] && color[1] === background[1] && color[2] === background[2] ? 'Palette Selected' : 'Palette'} onClick = {() => setBackground(color)} style = {{background: `linear-gradient(to right, ${color[0]}, ${color[1]}, ${color[2]})`}}></div>)}
            <div className = 'Separator'></div>
            <div className = 'Custom'>
                <div className = 'Hex'><input placeholder = {'Color 1'} value = {background[0]} onChange = {e => setBackground([e.target.value, background[1], background[2]])}/><div style = {{background: background[0]}}></div></div>
                <div className = 'Hex'><input placeholder = {'Color 2'} value = {background[1]} onChange = {e => setBackground([background[0], e.target.value, background[2]])}/><div style = {{background: background[1]}}></div></div>
                <div className = 'Hex'><input placeholder = {'Color 3'} value = {background[2]} onChange = {e => setBackground([background[0], background[1], e.target.value])}/><div style = {{background: background[2]}}></div></div>
            </div>
            <div className = 'Separator'></div>
            <div className = 'Settings'>
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
            <div className = 'Separator'></div>
            <div className = 'Position'>
                <div onClick = {() => setPosition('center')}><FoldIcon/></div>
                <div onClick = {() => setPosition('top')}><FoldDownIcon/></div>
                <div onClick = {() => setPosition('bottom')}><FoldUpIcon/></div>
            </div>
        </div>
    :   null

}

export default Palette