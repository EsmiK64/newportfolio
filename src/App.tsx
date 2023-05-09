import styles from './App.module.scss';
import Classnames from 'classnames';

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.container}>
                <h1 className={Classnames(styles.left, styles.title)}>EsmiK</h1>
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
                        fill="#ccc"
                        d="M33,304c-58.4-39.4-26-152.3-3.7-213.3c15.2-41,58.7-58,135.4-79.7c76.7-21.3,157.2-10.3,215.2,20.9c58.4,31.2,93.8,82.7,110.5,139.5c16.3,56.8,13.8,118.5-22.5,153.7s-106.4,43.3-179.8,45.4S91.4,343,33,304z"
                    />
                </svg>
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 500 370.7"
                    className={styles.small_blob}
                >
                    <path
                        fill="#ccc"
                        d="M33,304c-58.4-39.4-26-152.3-3.7-213.3c15.2-41,58.7-58,135.4-79.7c76.7-21.3,157.2-10.3,215.2,20.9c58.4,31.2,93.8,82.7,110.5,139.5c16.3,56.8,13.8,118.5-22.5,153.7s-106.4,43.3-179.8,45.4S91.4,343,33,304z"
                    />
                </svg>
            </div>
        </div>
    );
}

export default App;
