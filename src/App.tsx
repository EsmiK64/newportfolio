import styles from './App.module.scss';
import Classnames from 'classnames';

function programming_section() {

}

function App() {
    return (
        <div className={styles.App}>
            <div className={Classnames(styles.container, styles['bg-container'])}>
                <div className={styles.info_block}>
                    <div className={styles.info_block_container} id="programming-section active">
                        <h1>Programming</h1>
                        <p>I am a webdesigner and a programmer. My main projects include:</p>
                        <div className={styles['overview-section']}>
                            <div>
                                <h2>GDHub</h2>
                                <p>
                                    A Hub for all the needed to start with Geometry Dash content
                                    creation.
                                </p>
                            </div>
                            <img
                                src="/src/assets/gdhub.png"
                                alt="The homepage of GDHub."
                                className={styles['small-image']}
                            />
                        </div>
                        <div className={styles['overview-section']}>
                            <div>
                                <h2>GDVault</h2>
                                <p>
                                    GD Vault offers hundreds of guides to Geometry Dash Secret Ways,
                                    allowing you to complete levels with ease.
                                </p>
                            </div>
                            <img
                                src="/src/assets/gdvault.png"
                                alt="The homepage of GDHub."
                                className={Classnames(
                                    styles['small-image'],
                                    styles['dumbass-gdvault']
                                )}
                            />
                        </div>
                    </div>
                    <div className={styles.info_block_container} id="programming-section">
                        <h1>Programming</h1>
                        <p>I am a webdesigner and a programmer. My main projects include:</p>
                        <div className={styles['overview-section']}>
                            <div>
                                <h2>GDHub</h2>
                                <p>
                                    A Hub for all the needed to start with Geometry Dash content
                                    creation.
                                </p>
                            </div>
                            <img
                                src="/src/assets/gdhub.png"
                                alt="The homepage of GDHub."
                                className={styles['small-image']}
                            />
                        </div>
                        <div className={styles['overview-section']}>
                            <div>
                                <h2>GDVault</h2>
                                <p>
                                    GD Vault offers hundreds of guides to Geometry Dash Secret Ways,
                                    allowing you to complete levels with ease.
                                </p>
                            </div>
                            <img
                                src="/src/assets/gdvault.png"
                                alt="The homepage of GDHub."
                                className={Classnames(
                                    styles['small-image'],
                                    styles['dumbass-gdvault']
                                )}
                            />
                        </div>
                    </div>
                </div>
                <h1 className={Classnames(styles.left, styles.title)}>EsmiK</h1>
                <div>
                    <p className={styles.big_text}>
                        <p onClick={document.getElementById('active').removeId}>Programmer</p>
                        <br />
                        <p>Editor</p>
                        <br />
                        <p>Musician</p>
                    </p>
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 500 370.7"
                        className={styles.big_blob}
                    >
                        <path
                            fill="rgba(255, 255, 255, 0.5)"
                            d="M33,304c-58.4-39.4-26-152.3-3.7-213.3c15.2-41,58.7-58,135.4-79.7c76.7-21.3,157.2-10.3,215.2,20.9c58.4,31.2,93.8,82.7,110.5,139.5c16.3,56.8,13.8,118.5-22.5,153.7s-106.4,43.3-179.8,45.4S91.4,343,33,304z"
                            className={styles.shadow}
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default App;
