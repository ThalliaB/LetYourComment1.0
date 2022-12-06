import styles from "./Footer.module.css";

import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

function Footer(){
    return(
        <footer className={styles.footer_container}>
            <ul className={styles.social_list}>
                <li><a href="https://www.facebook.com/thallia.brum" target="_blank"><FaFacebook/></a></li>
                <li><a href="https://www.instagram.com/thalliajulliana/" target="_blank"><FaInstagram/></a></li>
                <li><a href="https://www.linkedin.com/in/thallia-brum" target="_blank"><FaLinkedin/></a></li>
            </ul>
            <p className={styles.copyright}><span>LetYourComment</span> &copy; 2022</p>
        </footer>
    )
}

export default Footer;