import Head from 'next/head';

import Particles from 'react-particles-js';
import { Links } from '../components/Links';
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Mefivs | Dev</title>
            </Head>
            <section>
                <div>
                    <Profile />
                </div>
                <div>
                    <Links />
                </div>
            </section>

            <Particles
                params={{
                    particles: {
                        number: {
                            value: 160,
                            density: {
                                enable: false
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                speed: 4,
                                size_min: 0.3
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            random: true,
                            speed: 1,
                            direction: "top",
                            out_mode: "out"
                        }
                    }
                }}
            />
        </div>
    );
}