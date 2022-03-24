import Image from 'next/image'
import logo from '../public/logo.svg'
import Link from 'next/link'
import styles from '../styles/about.module.css'

const About = () => {

    return(
        <div className = {styles.About}>
            <Link href = '/'><Image src = {logo} alt = 'logo' height = {30} width = {30}/></Link>
            <h2>What does this do?</h2>
            <p>Toframeit let's you import a picture (screenshot), and add a background.</p>
            <h2>How to use it?</h2>
            <ul>
                <li>Upload a picture (click on the center box or drag an drop)</li>
                <li>Select a background or customise with HEX colors</li>
                <li>Adjust the picture's position</li>
                <li>Click the download button</li>
            </ul>
            <h2>Exports</h2>
            <p>Only png exports are supported so far.</p>
            <h2>Contributions</h2>
            <p>Feel free to contribute or leave feedback <Link href = 'https://github.com/erikmartinjordan/toframeit'>here</Link>. </p>
            <h2>Who made this?</h2>
            <p>This is a side project created by <Link href = 'https://erikmartinjordan.com'>Erik Martín Jordán</Link>.</p>
            <hr/>
            <p>Cheers,</p>
            <p>🏄‍♂️</p>
        </div>
    )

}

export default About