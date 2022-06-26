import styles from './Paragraph.module.css'

console.log(styles)

function Paragraph() {
    return (
        <div>
            <p className={styles.paragraph}>Waiting for upgrade</p>
        </div>
    )
}

export default Paragraph