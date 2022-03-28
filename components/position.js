import { FoldIcon, FoldDownIcon, FoldUpIcon } from '@primer/octicons-react'
import styles from '../styles/palette.module.css'

const Position = ({ position, setPosition }) => {

    return(
        <div className = {styles.Position}>
            <div className = {position === 'center' ? styles.IconSelected : styles.Icon} onClick = {() => setPosition('center')}><FoldIcon/></div>
            <div className = {position === 'top'    ? styles.IconSelected : styles.Icon} onClick = {() => setPosition('top')}><FoldDownIcon/></div>
            <div className = {position === 'bottom' ? styles.IconSelected : styles.Icon} onClick = {() => setPosition('bottom')}><FoldUpIcon/></div>
        </div>
    )

}

export default Position