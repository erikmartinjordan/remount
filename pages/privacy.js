import Head from 'next/head'
import logo from '../public/logo.svg'
import Link from 'next/link'
import styles from '../styles/privacy.module.css'

const Privacy = () => {

    return(
        <div className = {styles.Privacy}>
            <Head>
                <title>Remount - Privacy</title>
            </Head>
            <Link href = '/' passHref>
                <img src = {logo.src} alt = 'logo' height = {30} width = {30}/>
            </Link>
            <h2>Do you upload the images to a server?</h2>
            <p>No, they remain in your browser.</p>
            <h2>What does this track?</h2>
            <p>Number of pageviews and number of total downloads.</p>
            <h2>Why?</h2>
            <p>To know if people are using the app.</p>
            <h2>Where is the data stored?</h2>
            <p>Firebase.</p>
            <h2>Where are the custom colors stored?</h2>
            <p>In your localStorage variable.</p>
            <h2>How to delete my colors?</h2>
            <p>Open the Inspector and run localStorage.clear().</p>
        </div>
    )

}

export default Privacy