import React, { useState } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';

function App() {
    const [innerHtml, setInnerHtml] = useState('');

    const handleToggleClick = (content: React.SetStateAction<string>) => {
        setInnerHtml(content);
    };

    const programmer = `
        <h1>Programming</h1>
        <p>I am a web designer and a programmer. I am proficient in HTML, CSS, JavaScript and PHP.</p>
        <div class="${styles['overview-section']}">
          <div>
            <h2>GDHub</h2>
            <p>
              A Hub for all the needed to start with Geometry Dash content
              creation.
            </p>
          </div>
          <img
            src="gdhub.png"
            alt="The homepage of GDHub."
            class="${styles['small-image']}"
          />
        </div>
    `;

    const editor = `
        <h1>Editing</h1>
        <p>I edit videos for mainly two different purpuroses:</p>
        <div class="${styles['overview-section']}">
          <div>
            <h2>GD YouTube</h2>
            <p>
              I make videos about Geometry Dash on <a href="https://www.youtube.com/channel/UCc-MJ1ijeGtfFdMwRdSGlqw">YouTube</a>.
            </p>
          </div>
          <img
            src="esmik-youtube.png"
            alt="My YouTube channel."
            class="${styles['small-image']}"
          />
        </div>
        <div class="${styles['overview-section']}">
          <div>
            <h2>SVAT</h2>
            <p>
              I make videos for the Czech scouting organisation SVAT (Scout Audio-Video Team). Here's a photo of me recording :D
            </p>
          </div>
          <img
            src="recording.jpg"
            alt="The homepage of GDHub."
            class="${Classnames(styles['small-image'])}"
          />
        </div>
    `;
    const musician = `
      <h1>Music</h1>
      <p>I work on music purely on my prog-rock solo project called Ad Astra.</p>
      <div class="${styles['overview-section']}">
        <div>
          <h2>:(</h2>
          <p>
            For now I have no music to show, so here's the cover for my upcoming album,<br> In Spacio Ad Astra.
          </p>
        </div>
        <img
          src="adastralogo.png"
          alt="My YouTube channel."
          class="${styles['small-image']} ${styles['dumbass-gdhub']}"
        />
      </div>
  `;

    return (
        <div className={styles.App}>
            <div className={Classnames(styles.container, styles['bg-container'])}>
                <div className={styles.main}>
                    <div className={styles.main_blob}>
                        <h1 className={Classnames(styles.left, styles.title)}>EsmiK</h1>
                        <div className={styles.blob}>
                            <div className={styles.big_text}>
                                <a
                                    id="programmer_toggle"
                                    className={styles.menu_toggle}
                                    onClick={() => handleToggleClick(programmer)}
                                >
                                    Programmer
                                </a>
                                <br />
                                <a
                                    id="editor_toggle"
                                    className={styles.menu_toggle}
                                    onClick={() => handleToggleClick(editor)}
                                >
                                    Editor
                                </a>
                                <br />
                                <a
                                    id="musician_toggle"
                                    className={styles.menu_toggle}
                                    onClick={() => handleToggleClick(musician)}
                                >
                                    Musician
                                </a>
                            </div>
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
                    <div className={styles.side_blob}>
                        <div className={styles.info_block}>
                            <div className={styles.info_block_container} id="changing-section">
                                {innerHtml ? (
                                    <div dangerouslySetInnerHTML={{ __html: innerHtml }}></div>
                                ) : (
                                    <p className={styles['loading-text']}>
                                        Click on the menu to start...
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.article_blob}>
                    <div className={styles.article_bg} />
                </div>
            </div>
        </div>
    );
}

export default App;
