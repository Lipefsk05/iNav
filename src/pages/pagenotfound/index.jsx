import styles from './PageNotFound.module.css'
import dog from '../../assets/img/dog.svg'

function PageNotFound() {
    return (
        <section className={styles.error}>
            <article>
                <span>4<img src={dog} alt="" />4</span>
                <p>error 404 page not found</p>
            </article>

        </section>
    )
}

export default PageNotFound