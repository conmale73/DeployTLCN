import { Facebook, Youtube } from 'react-bootstrap-icons';
import styles from './footer.module.scss';
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.wrap}>
                    <ul>
                        <li>Track An Order</li>
                        <li>Create a Return</li>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                    <ul>
                        <li>Discover MR PORTER</li>
                        <li>MR PORTER RESELL </li>
                        <li>Advertising</li>
                        <li>Affiliates</li>
                        <li>Careers</li>
                    </ul>
                    <ul>
                        <li>MR PORTER Health In Mind</li>
                        <li>EIP Loyalty Programme</li>
                        <li>Cookie Policy</li>
                        <li>Cookie Center</li>
                    </ul>
                    <div className={styles.logo}>
                        <i>
                            <Facebook />
                            &ensp;<span>846k Subcribers</span>
                        </i>
                        &ensp;
                        <i>
                            <Youtube />
                            &ensp;<span>846k Subcribers</span>
                        </i>
                        <img src="/images/ct.png" />
                        <p>Website</p>
                        <img src="/images/vl.png" />
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>
                © 2022 Mr Porter
                </p>
            </div>
        </footer>
    );
}

export default Footer;
