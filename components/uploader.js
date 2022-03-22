import { UploadIcon } from '@primer/octicons-react'

const Uploader = ({ background, padding, screenshot, width, setBackground, setScreenshot }) => {

    const style = {
        background: background,
        padding: `${padding}px`,
        width: `${width}px`,
    }

    const readImage = (e) => {

        e.preventDefault()
        e.stopPropagation()

        let file = e.dataTransfer.files[0] || document.querySelector('input[type="file"]').files[0]

        let reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = () => setScreenshot(reader.result)

    }

    const openDialog = () => {

        document.getElementById('upload').click()
        
    }

    return(
        <div className = 'Upload'>
            <h2>Upload a photo and add a background. <br/> Drag a photo or click to replace it.</h2>
            <div className = 'Drag' onDragOver = {e => e.preventDefault()} onDrop = {readImage} onClick = {openDialog} style = {style} id = 'Screen'>
                <img src = {screenshot} alt = {'Uploaded picture'}/>
            </div>
            <input onChange = {readImage} id = 'upload' type = 'file' title = '' style = {{ opacity: 0 }}/>
        </div> 
    )
}

export default Uploader