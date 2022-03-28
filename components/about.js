import Link from 'next/link'
import styles from '../styles/palette.module.css'

const About = () => {

    return(
        <div className = {styles.About}>
            <Link href = '/about'>About</Link>
            <Link href = '/privacy'>Privacy</Link>
            <Link href = 'https://github.com/erikmartinjordan/remount'>GitHub</Link>
        </div>
    )

}

export default About