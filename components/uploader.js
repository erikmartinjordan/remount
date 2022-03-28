import { styleDrag, stylePic } from '../utils/colors'
import styles from '../styles/uploader.module.css'

const Uploader = ({ background, margin, padding, position, screenshot, width, setScreenshot }) => {

    const readImage = (e) => {

        e.preventDefault()
        e.stopPropagation()

        let file = e.target.files[0] || document.querySelector('input[type="file"]').files[0]

        let reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = () => setScreenshot(reader.result)

    }

    const openDialog = () => {

        document.getElementById('upload').click()
        
    }

    return(
        <div className = {styles.Upload}>
            <h2>Upload a photo and add a <span className = {styles.Gradient}>background</span>. <br/> Drag & drop or click to replace it.</h2>
            <div className = {styles.Drag} onDragOver = {e => e.preventDefault()} onDrop = {readImage} onClick = {openDialog} style = {styleDrag(background, padding, position, width)} id = 'Screen'>
                <img src = {screenshot} alt = {'Uploaded picture'} style = {stylePic(margin, position)}/>
            </div>
            <input onChange = {readImage} id = 'upload' type = 'file' title = '' style = {{ opacity: 0 }}/>
        </div> 
    )
}

export default Uploader