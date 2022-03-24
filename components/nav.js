import { DownloadIcon } from '@primer/octicons-react'
import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver'
import Image from 'next/image'
import logo from '../public/logo.svg'

const Nav = ({ screenshot }) => {

    const handleDownload = async () => {

        let blob = await domtoimage.toBlob(document.getElementById('Screen'))
        
        window.saveAs(blob, 'capture.png')

    }

    return screenshot
    ?   <div className = 'Nav'>
            <Image src = {logo} alt = 'logo' height = {30} width = {30}/>
            <button onClick = {handleDownload}><DownloadIcon/>Download picture</button>
        </div>
    :   null

}

export default Nav