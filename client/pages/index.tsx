import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Homed.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id={styles.homeMainSectionTop}>
        <div id={styles.homeMainTop}>
          <div>
            <h1 className={styles.homeMainTitle}>
              "당신 근처의"
              <br/>
              "당근 마켓"
            </h1>
            <p className={styles.textM}>
              " 중고 거래부터 동네 정보까지, 이웃과 함께해요."
              <br/>
              "가깝고 따뜻한 당신의 근처를 만들어요."
            </p>
          </div>
        </div>
      </section>
      <section className={styles.homeMainSection}>
        <div></div>
        <div>
          <h1 className={styles.homeMainTitle}>
            "우리 동네"
            <br/>
            "중고 직거래 마켓"
          </h1>
          <p className={styles.textM}>
            동네 주민들과 가깝고 따뜻한 거래를 지금 경험해 보세요.
          </p>
          <div className={styles.homeButtons}>
            <Link href="">
              <a className={styles.homeButton}>인기매물 보기</a>
            </Link>
            <Link href="trust">
              <a className={styles.homeButton}>믿을 수 있는 중고거래</a>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.homeMainSection} style={{backgroundColor:'#E6F3E6'}} >
        <div className={styles.homeMainContent}>
          <div>
            <h1 className={styles.homeMainTitle}>
              이웃과 함께 하는
              <br/>
              동네생활
            </h1>
            <p className={styles.textM}>우리 동네의 다양한 이야기를 이웃과 함께 나누어요.</p>
            <ul className={styles.homeStroyList}>
              <li className={styles.homeStroyListItem}>
                <div className={`${styles.textM}${styles.textBold}${styles.mt3}${styles.mb2}`}>우리동네질문</div>
                <div className={styles.textXS}>궁금한게 있을 땐 이웃에게 물어보세요.</div>
              </li>
              <li className={styles.homeStroyListItem}>
                <div className={styles.textM}>동네분실센터</div>
                <div className={styles.textXS}>무언가를 잃어버렸을 때, 함께 찾을 수 있어요.</div>
              </li>
              <li className={styles.homeStroyListItem}>
                <div className={styles.textM}>동네모임</div>
                <div className={styles.textXS}>관심사가 비슷한 이웃과 온오프라인으로 만나요.</div>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </section>
      <section className={styles.homeMainSection}>
        <div className={styles.homeMainContent}>
          <div></div>
          <div>
            <h1 className={styles.homeMainTitle}>내 근처에서 찾는 동네가게</h1>
            <p className={styles.textM}>
              우리 동네가게를 찾고 있나요?
              <br/>
              동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
            </p>
            <div className={styles.homeButtons}>
              <a className={styles.homeButton}>당근마켓 동네가게 찾기</a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.homeMainSection} style={{backgroundColor:'#F8F9FA'}}>
        <div className={styles.homeHotContent}>
          <h1 className={styles.homeMainTitle}>중고거래 인기매물</h1>
          <div className={styles.cardsWrap}></div>
          <div className={styles.textCenter}>
            <a className={styles.textBold}>인기매물 더 보기</a>
          </div>
        </div>
      </section>
    </div>
  )
}
