import styles from '../../styles/Footer.module.css'
export default function Footer() {
    return(
        <footer id='footer'>
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>
                    <div></div>
                    <ul className={styles.footerList}>
                        <li className={styles.footerListItem}>
                            <a className={styles.linkHighlight}>믿을 수 있는 중고거래</a>
                        </li>
                        <li className={styles.footerListItem}>
                            <a className={styles.linkHighlight}>자주 묻는 질문</a>
                        </li>
                    </ul>
                    <ul className={styles.footerList}>
                        <li className={styles.footerListItem}>
                            <a className={styles.linkHighlight}>광고주 센터</a>
                        </li>
                        <li className={styles.footerListItem}>
                            <a className={styles.linkHighlight}>동네가게</a>
                        </li>
                    </ul>
                    <ul className={styles.footerList}>
                        <li className={styles.footerListItem}>
                            <a className={styles.linkHighlight}>회사소개</a>
                        </li>
                        <li className={styles.footerListItem}>
                            <a className={styles.linkHighlight}>채용</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerBottom}>
                    <div id='copyright'>
                        <div className={styles.copyrightText}>©2021. Conner</div>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}