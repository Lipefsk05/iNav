import styles from './TitleSection.module.css'


function TitleSection({ icon, title}) {
    return (
        <div className={styles.title_section}>
                <img src={icon} alt="" />
                <h2>{title}</h2>
        </div>
    )
}

export default TitleSection

