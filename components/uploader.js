import styles from '../styles/uploader.module.css'

const Uploader = ({ background, margin, padding, position, screenshot, width, setScreenshot }) => {

    const styleDrag = {
        background: background.filter(color => color !== '').length > 1 ? `linear-gradient(to right, ${background.filter(color => color !== '').join()})` : background[0],
        padding: `${padding}px`,
        width: `${width}px`,
        paddingBottom: position === 'bottom' ? '0px' : `${padding}px`,
        paddingTop: position === 'top' ? '0px' : `${padding}px`
    }

    const stylePic = {
        marginBottom: position === 'bottom' ? `${margin}px` : '0px',
        marginTop: position === 'top' ? `${margin}px` : '0px'
    }

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
            <h2>Upload a photo and add a <span className = {styles.Gradient}>background</span>. <br/> Drag a pic or click to replace it.</h2>
            <div className = {styles.Drag} onDragOver = {e => e.preventDefault()} onDrop = {readImage} onClick = {openDialog} style = {styleDrag} id = 'Screen'>
                <img src = {screenshot} alt = {'Uploaded picture'} style = {stylePic}/>
            </div>
            <input onChange = {readImage} id = 'upload' type = 'file' title = '' style = {{ opacity: 0 }}/>
        </div> 
    )
}

export default Uploader