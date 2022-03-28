import { useEffect, useState } from 'react'
import { DownloadIcon } from '@primer/octicons-react'
import moment from 'moment'
import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver'
import { db, ref, runTransaction } from '../components/firebase'
import logo from '../public/logo.svg'
import styles from '../styles/nav.module.css'
import { onValue } from 'firebase/database'

const Nav = ({ screenshot }) => {

    const [online, setOnline] = useState(0)

    useEffect(() => {

         let unsubscribe = onValue(ref(db, 'concurrent'), snapshot => { 

            setOnline(Object.keys(snapshot.val() || {}).length) 

        })

        return () => unsubscribe()

    }, [])

    const handleDownload = async () => {

        let blob = await domtoimage.toBlob(document.getElementById('Screen'))
        
        window.saveAs(blob, 'capture.png')

        runTransaction(ref(db, 'downloads/' + moment().format('YYYY-MM')), value => value + 1)

    }

    return screenshot
    ?   <div className = {styles.Nav}>
            <div className = {styles.Left}>
                <img src = {logo.src} alt = {'logo'} width = {32} height = {32} />
            </div>
            <div className = {styles.Center}>
                <div className = {styles.Pulse}/>{online} user{online === 1 ? '' : 's'} online
            </div>
            <div className = {styles.Right}>
                <button onClick = {handleDownload}><DownloadIcon/>Download picture</button>
            </div>
        </div>
    :   null

}

export default Nav