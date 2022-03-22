import { DownloadIcon } from '@primer/octicons-react'
import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver'

const Nav = ({ screenshot }) => {

    const handleDownload = async () => {

        let blob = await domtoimage.toBlob(document.getElementById('Screen'))
        
        window.saveAs(blob, 'capture.png')

    }

    return screenshot
    ?   <div className = 'Nav'>
            <button onClick = {handleDownload}><DownloadIcon/>Download</button>
        </div>
    :   null

}

export default Nav