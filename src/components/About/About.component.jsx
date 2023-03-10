import React, { useState } from "react";
import { AboutStyled } from "./About.styles";
import AboutMain from "../../assets/img/about-main.jpg";
import AboutVideoBack from "../../assets/img/about-02.webp";
import { FaPlay, FaRegCheckCircle } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <AboutStyled id="about">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="about-image-gallery">
              <img src={AboutMain} alt="about" className="about-image-main"/>
              <div
                className="video-box"
                data-sal-delay="150"
                data-sal="slide-down"
                data-sal-duration="800"
              >
                <div className="inner">
                  <div className="thumb">
                    <img src={AboutVideoBack} alt="About" />
                    <div
                      className="popup-icon"
                      onClick={() => setIsVideoOpen(true)}
                    >
                      <FaPlay size={15} />
                    </div>
                  </div>
                  <div className="loading-bar">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              {
              //   <div className="award-status bounce-slide">
              //   <div className="inner">
              //     <div className="icon">
              //       <FaRegCheckCircle size={30} />
              //     </div>
              //     <div className="content">
              //       <h6 className="title">29+</h6>
              //       <span className="subtitle">Wonderful Awards</span>
              //     </div>
              //   </div>
              // </div>
              }
            </div>
          </div>
          <div
            className="col-lg-6"
            data-sal-delay="150"
            data-sal="slide-left"
            data-sal-duration="800"
          >
            <div className="about-content">
              <div className="section-title">
                <span className="pre-title">Haqq??m??zda</span>
                <h2 className="title">
                  <span>Alas Academy</span> il?? proqramla??d??rma kayeran?? ba??la
                </h2>
                <p>
                  Alas Academy, f??aliyy??tini 2020-ci ild?? ???TensorFlow User Group
                  Azerbaijan??? ad?? il?? ba??lam????d??r v?? s??ni intellekt t??drisi il??
                  m??????ul olmu??dur. 2022-ci ilin sonundan etibar??n ???Alas Academy???
                  adi alt??nda daha geni?? sah??l??rin t??drisil?? fa??liyy??tini davam
                  etdirir.
                </p>
              </div>
              <ul className="features-list">
                <li>
                  <GiCheckMark />
                  Qafqazdak?? Yegan?? AWS partnyoru
                </li>
                <li>
                  <GiCheckMark />
                  ??lk??d??ki r??smi TensorFlow User Group-u
                </li>
                <li>
                  <GiCheckMark />
                  100% il?? t??min olunma g??st??ricisi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVideoOpen}
        videoId="vU-tZ_HiUQo"
        onClose={() => setIsVideoOpen(false)}
      />
    </AboutStyled>
  );
};

export default About;
