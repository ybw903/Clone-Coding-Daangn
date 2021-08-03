import styles from '../../styles/Header.module.css';
export default function Header() {

    const serachInputPlaceholder = "동네 이름, 물품명 등을 검색해보세요!"

    return(
        <header id={styles.fixedBar} className={styles.fixedBarBoxShadow}>
            <div id={styles.fixedBarWrap}>
                <h1 id={styles.fixedBarLogoTitle}>
                    <img className={styles.fixedLogo} alt="땅근마켓" src="/img/logo.png"/>
                </h1>
                <section id={styles.fixedBarSearch}>
                    <div className={styles.searchInputWrap}>
                        <input type="text"  className={styles.fixedSearchInput} placeholder={serachInputPlaceholder}></input>
                        <button id={styles.headerSearchButton}>
                            <img className={styles.fixedSearchIcon} alt="Search" src="/img/search-icon.svg"></img>
                        </button>
                    </div>
                </section>
                <section>
                </section>
            </div>
        </header>
    );
}