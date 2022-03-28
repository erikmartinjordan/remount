import Head from 'next/head'
import logo from '../public/logo.svg'
import Link from 'next/link'
import styles from '../styles/about.module.css'

const About = () => {

    return(
        <div className = {styles.About}>
            <Head>
                <title>Remount - About</title>
            </Head>
            <Link href = '/' passHref>
                <img src = {logo.src} alt = 'logo' height = {30} width = {30}/>
            </Link>
            <h2>What does this do?</h2>
            <p>Remount let&apos;s you import a picture (screenshot), and embed it on a background.</p>
            <h2>How to use it?</h2>
            <ul>
                <li>Upload a picture (click on the center box or drag an drop)</li>
                <li>Select a background or customise with HEX colors</li>
                <li>Adjust the picture&apos;s position</li>
                <li>Click the download button</li>
            </ul>
            <h2>Exports</h2>
            <p>Only png exports are supported so far.</p>
            <h2>Contributions</h2>
            <p>Feel free to contribute or leave feedback <Link href = 'https://github.com/erikmartinjordan/remount'>here</Link>. </p>
            <h2>Who made this?</h2>
            <p>This is a side project created by <Link href = 'https://erikmartinjordan.com'>Erik Martín Jordán</Link>.</p>
            <hr/>
            <p>Cheers,</p>
            <p>🏄‍♂️</p>
        </div>
    )

}

export default About