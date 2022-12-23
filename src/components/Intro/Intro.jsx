import styles from "./intro.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
const Intro = ({ title, content, links }) => {
    const [Links, setLinks] = useState(links);
    
    const handleClick = (e, key) => {
        e.preventDefault();
        localStorage.setItem('inputSearch', key);
        window.location.href = "/search?key=" + key;
        
    }
    return (
        <div className={styles.intro}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>{content}</div>
            <div className={styles.links}>
                {Links.map((link, index) => {
                    return (
                        <a key={index} className={styles.link} onClick={(e) => handleClick(e, link.key)}>
                            {link.content}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
export default Intro;
