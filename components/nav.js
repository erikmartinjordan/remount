import { DownloadIcon } from '@primer/octicons-react'
import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver'
import Image from 'next/image'
import logo from '../public/logo.svg'
import styles from '../styles/nav.module.css'

const Nav = ({ screenshot }) => {

    const handleDownload = async () => {

        let blob = await domtoimage.toBlob(document.getElementById('Screen'))
        
        window.saveAs(blob, 'capture.png')

    }

    return screenshot
    ?   <div className = {styles.Nav}>
            <Image src = {logo} alt = 'logo' height = {30} width = {30}/>
            <button onClick = {handleDownload}><DownloadIcon/>Download picture</button>
        </div>
    :   null

}

export default Nav