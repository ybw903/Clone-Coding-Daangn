import styles from '../styles/Trust.module.css'

export default function Trust() {
    return (
        <>
            <section className={styles.trustHeader}>
                <h1 className={styles.title}>당신 근처의 믿을 수 있는 중고거래</h1>
                <p className={styles.description}>당근마켓과 함께 가깝고 따뜻한 거래문화를 만들어요.</p>
                <div className={styles.trustHeaderImage}></div>
            </section>
            <div id='trust-content'>
                <section className={styles.trustTop}>
                    <h1 className={styles.mainTitle}>당근마켓은 신뢰할 수 있어요!</h1>
                    <section className={styles.trustSection}>
                        <div></div>
                        <div className={styles.trustDetail}>
                            <h3 className={styles.title}>동네인증한 사용자만 거래해요</h3>
                            <p className={styles.description}>
                                당근마켓에서 거래하려면 동네인증이 필요해요. 동네인증은 설정한 동네에 있어야만 할 수 있어요.
                                GPS를 이용하여 우리 동네를 인증한 진짜 이웃들과 거래하세요. 거래하려는 상대방의 인증 횟수를 보면
                                얼마나 자주 이 동네에서 사용했는지 알 수 있어요.
                            </p>
                        </div>
                    </section>
                    <section className={styles.trustSection}>
                        <div></div>
                        <div className={styles.trustDetail}>
                            <h3 className={styles.title}>1:1 당근채팅으로 대화해요.</h3>
                            <p className={styles.description}>
                                당근마켓 내의 채팅을 통해 거래하는 게 가장 안전해요. 개인정보 공유 없이도 쉽고 편하게 거래할 수 있어요.
                                1:1 채팅으로 약속을 잡고 만나서 거래하세요. 채팅 내의 거래약속 알림을 설정하면 약속 시간 전에 알림을 받을 수 있어요. 
                            </p>
                        </div>
                    </section>
                    <section className={styles.trustSection}>
                        <div></div>
                        <div className={styles.trustDetail}>
                            <h3 className={styles.title}>당신 근처에서 만나서 거래해요</h3>
                            <p className={styles.description}>
                                중고거래 사기의 대부분은 택배거래에서 발생한다는 사실, 알고 계셨나요? 당근마켓은 택배거래보다 직거래를 권장해요.
                                만나서 거래할 때는 누구나 찾기 쉽고 안전한 공공장소가 좋아요. 당근마켓에서 가까운 이웃과 따뜻하게 거래하세요.
                            </p>
                        </div>
                    </section>
                    <section className={styles.trustSection}>
                        <div></div>
                        <div className={styles.trustDetail}>
                            <h3 className={styles.title}>매너온도로 따뜻함을 확인해요</h3>
                            <p className={styles.description}>
                                거래하기 전 상대방의 매너온도를 확인하세요. 36.5도에서 시작하는 매너온도는 당근마켓 내의 다양한 활동을 종합하여 정해져요.
                                따뜻한 거래를 많이 한 이웃은 매너온도도 높답니다. 매너온도가 낮은 사용자를 발견한다면, 프로필의 가입일, 인증횟수, 재거래희먕률,
                                후기 등을 꼼꼼히 확인해보세요.
                            </p>
                        </div>
                    </section>
                </section>
                <section className={styles.trustBottom}>
                    <h1 className={styles.mainTitle}>지금 이 순간에도 당신을 위해 노력하고 있어요!</h1>
                    <div className={styles.trustContainer}>
                        <section className={styles.trustSection}>
                            <div></div>
                            <div className={styles.trustDetail}>
                                <h3 className={styles.title}>사기꾼을 실시간으로 제재해요</h3>
                                <p className={styles.description}>
                                    당근마켓은 사용자 보호를 위해 다양한 사기사례를 분석하고 있어요. 사기 등의 행위가 발견되는 즉시 해당 사용자의 서비스 이용을 제한해요.
                                    사기를 저지른 사용자가 탈퇴하거나 재가입해도 서비스를 이용할 수 없으니 안심하세요.
                                </p>
                            </div>
                        </section>
                        <section className={styles.trustSection}>
                            <div></div>
                            <div className={styles.trustDetail}>
                                <h3 className={styles.title}>채팅 메시지로 미리 알려줘요</h3>
                                <p className={styles.description}>
                                    당근마켓 채팅을 이용하면 다양한 안내 및 경고 메시지들을 받을 수 있어요. 
                                    상대방의 사기 이력이나 유사한 사기 사례를 주의하라고 알려주기도 하고, 사기가 진행되지 않도록 대화 도중 채팅을 막기도 해요. 
                                    지금 이 순간에도 사기 사례를 분석하여 고도화하고 있어요.
                                </p>
                            </div>
                        </section>
                        <section className={styles.trustSection}>
                            <div></div>
                            <div className={styles.trustDetail}>
                                <h3 className={styles.title}>게시글을 분석해요</h3>
                                <p className={styles.description}>
                                    머신러닝 기술을 이용해 게시글을 분석해요. 판매금지품목이나 전문판매업자의 판매 게시글, 허위 게시글, 광고 게시글, 중복 게시글 등은 노출되지 않아요.
                                    신뢰할 수 있는 우리 동네 마켓을 만들기 위해 노력하고 있어요.
                                </p>
                            </div>
                        </section>
                        <section className={styles.trustSection}>
                            <div></div>
                            <div className={styles.trustDetail}>
                                <h3 className={styles.title}>수사기관과 함께 해요</h3>
                                <p className={styles.description}>
                                    거래 사기 이력이 있는 사용자는 서비스를 사용할 수 없어요. 
                                    사기 등 거래 관련 문제는 빠르게 해결될 수 있도록 당근마켓 팀도 함께 노력해요. 
                                    신고를 권장하고, 수사기관의 요청에 적극 협조하고 있어요. 서울지방경찰청과 사기예방캠페인도 함께 진행했어요.
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}