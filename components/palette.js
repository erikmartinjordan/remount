const Palette = ({ background, padding, screenshot, width, setBackground, setWidth, setPadding }) => {

    const colors = [
        'linear-gradient(to right, rgb(170, 75, 107), rgb(107, 107, 131), rgb(59, 141, 153))',
        'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))',
        'linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))',
        'linear-gradient(to right, rgb(170, 75, 107), rgb(107, 107, 131), rgb(59, 141, 153))',
        'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))',
        'linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))',
        'linear-gradient(to right, rgb(170, 75, 107), rgb(107, 107, 131), rgb(59, 141, 153))',
        'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))',
        'linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))',
    ]

    return screenshot
    ?   <div className = 'Background'>
            {colors.map(color => <div className = 'Palette' onClick = {() => setBackground(color)} style = {{background: color}}></div>)}
            <div className = 'Separator'></div>
            <div className = 'Sizes'>
                <span>Width: {width}px</span>
                <input type = 'range' min = '1' max = '1500' value = {width} className = 'slider' id = 'width' onChange = {e => setWidth(e.target.value)}/>
            </div>
            <div className = 'Sizes'>
                <span>Padding: {padding}px</span>
                <input type = 'range' min = '0' max = '200' value = {padding} className = 'slider' id = 'padding' onChange = {e => setPadding(e.target.value)}/>
            </div>
            <div className = 'Separator'></div>
        </div>
    :   null

}

export default Palette