import React, {useState} from "react";
import styles from './Review.module.css';
import ReviewModal from "./ReviewModal";

function MainReview(){

    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    }

    return(
        <>
            <div className={styles.responsivewrapper}>

                <div className={styles.locationboxflex}>
                    <p className={styles.maininfomessage}>메이트들의 생생한 리뷰를 확인해보세요</p>
                    <img className={styles.allreview} src="/img/allreviewview.png"></img>
                </div>


                <div className={styles.locationboxflex}>
                    <div className={styles.locationboxflex2}>
                        <div className={styles.box1}>
                            <p className={styles.gagename}>성수완당 본점</p>
                            <div className={styles.locationboxflex}>
                            <img className={styles.rateimg} src="/img/besttextcolor.png"></img>
                            <img className={styles.rateimg} src="/img/sosotext.png"></img>
                            <img className={styles.rateimg} src="/img/badtext.png"></img>
                    </div>
                        </div>
                        <div className={styles.locationboxflex}>
                        <img className={styles.rrr} src="/img/rrr.png"></img>
                        <div className={styles.locationboxflex2}>
                        <div className={styles.rrrcontent}>성수완당에서 혼밥해본 적이 있다면 직접 리뷰를 남겨보세요</div>
                        <div>
                        <button className={styles.modalbutton2} onClick={showModal}><img src="/img/goreview.png"></img></button>
                        {modalOpen && <ReviewModal setModalOpen={setModalOpen} />}
                        </div>
                    </div>
                    </div>
                </div>
             
            
                
                    <div className={styles.locationboxflex2}>

                    <div className={styles.box2}>
                        <div className={styles.locationboxflex}>
                        <img className={styles.bestcontent} alt="" src="/img/bestcontent.png"></img>
                        <img className={styles.count} alt="" src="/img/count.png"></img>
                        </div>
                        <div className={styles.reviewcontent}>말해뭐해 일단 너무 맛있고요... 혼자 건대갔다가 들렀는데 혼밥하기 좋아요 추천</div>
                        <div className={styles.locationboxflex}>
                        <img src="/img/emonga.jpeg" alt="first pic" className={styles.reviewwriterimg}></img>
                        <div className={styles.reviewwriter}>나는야먹짱</div>
                        <div className={styles.reviewdate}> | 2022.01.08</div>
                        </div>
                    </div>
                
                    <div className={styles.box2}>
                            <div className={styles.locationboxflex}>
                            <img className={styles.bestcontent} alt="" src="/img/bestcontent.png"></img>
                            <img className={styles.count} alt="" src="/img/count.png"></img>
                            </div>
                            <div className={styles.reviewcontent}>말해뭐해 일단 너무 맛있고요... 혼자 건대갔다가 들렀는데 혼밥하기 좋아요 추천</div>
                            <div className={styles.locationboxflex}>
                            <img src="/img/emonga.jpeg" alt="first pic" className={styles.reviewwriterimg}></img>
                            <div className={styles.reviewwriter}>나는야먹짱</div>
                            <div className={styles.reviewdate}> | 2022.01.08</div>
                            </div>
                        </div>
                    </div>

                    </div>

            </div>    

    
        </>
    );
}

export default MainReview;