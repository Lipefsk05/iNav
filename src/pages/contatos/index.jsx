import styles from './Contatos.module.css'
function Contatos() {
    return (
        <main>
            <section className={styles.title}>
                <h2>Fale conosco!</h2>
                <p>Tem alguma pergunta sobre o app ou uma ideia incrível para compartilhar? Adoraríamos ouvir!</p>
            </section>
            <section className={styles.form}>
                <article className={styles.dados}>
                    <div className={styles.seu_nome}>
                        <h3>Nome completo: </h3>
                        <input type="text" />
                    </div>
                    <div className={styles.selection}>
                        <label for="subject"><h3>Assunto</h3></label>
                        <select id="subject" name="subject">
                            <option value="duvida_geral">Dúvida Geral</option>
                            <option value="sugestao">Sugestão</option>
                            <option value="parceria">Proposta de Parceria</option>
                            <option value="imprensa">Imprensa</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                    <div className={styles.texto_assunto}>
                        <h3>Seu texto:</h3>
                        <textarea type="text" name="" id="" />
                    </div>
                </article>
                <button className={styles.send}><span>Enviar</span></button>
            </section>
        </main>
    )
}

export default Contatos