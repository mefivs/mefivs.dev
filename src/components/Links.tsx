import styles from '../styles/components/Links.module.css';

export function Links() {
    return (
        <div className={styles.linksContainer}>
            <strong>Meus links:</strong>
            <div className={styles.links}>
                <a href="#">Github</a>
                <a href="#">Instagram</a>
                <a href="#">Linkedin</a>
                <a href="#">Spotify</a>
                <a href="#">Twitch</a>
                <a href="#">Discord</a>
            </div>
        </div>
    );
}