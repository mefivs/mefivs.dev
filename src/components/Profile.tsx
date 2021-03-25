import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/mefivs.png" alt="Matheus Gonçalves Dórea" />
            <div>
                <strong>Matheus Gonçalves Dórea</strong>
                <p>Tenho 21 anos, sou Técnico em Informática, desenvolvedor Front-end e atualmente estou estudando tecnologias javascript visando me tornar um desenvolvedor Full-stack.</p>
                <div className={styles.imagesContainer}>
                    <strong>Experiência com: </strong>
                    <div>
                        <img src="html5.svg" alt="HTML5" title="HTML5" />
                        <img src="css3.svg" alt="CSS3" title="CSS3"/>
                        <img src="js.svg" alt="JavaScript" title="JavaScript" />
                        <img src="react.svg" alt="ReactJS" title="ReactJS" />
                    </div>
                </div>
            </div>
        </div>
    );
}