import styles from '../styles/palette.module.css'

const Settings = ({ margin, padding, width, setMargin, setPadding, setWidth }) => {

    return(
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
    )

}

export default Settings