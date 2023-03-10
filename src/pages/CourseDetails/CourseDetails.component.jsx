import React, { useState, useEffect, useRef } from "react";
import { CourseDetailsStyled } from "./CourseDetails.styles";
import { Link, useParams } from "react-router-dom";
import CtaArea from "../../components/CtaArea/CtaArea.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";
// 
import CourseDetailsMainIMG from "../../assets/img/course-details-m.jpg";
import CourseWidgetIMG01 from "../../assets/img/course-widget-1.jpeg";
import InstructorIMG01 from "../../assets/img/course-instructor-1.jpg";
import InstructorIMG02 from "../../assets/img/course-instructor-2.jpg";
import InstructorIMG03 from "../../assets/img/course-instructor-3.jpg";
import Certificate1 from "../../assets/img/certificate-1.png";
import Certificate2 from "../../assets/img/certificate-2.png";
import Certificate3 from "../../assets/img/certificate-3.png";
// 
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
// react icons
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdAccessTime } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { GrCertificate } from "react-icons/gr";
// react-tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";



// 
const CourseDetails = () => {
  const { courseName } = useParams();
  console.log(courseName);

  const [vantaEffect, setVantaEffect] = useState(0);
  const headingRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: headingRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xe1532f,
          shininess: 73.0,
          waveHeight: 5.0,
          waveSpeed: 0.75,
          zoom: 1.73,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <CourseDetailsStyled>
      <div className="heading-wrapper" ref={headingRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-11">
              <h1 className="title">
                Suni ??ntellekt d??rsl??rimiz il?? sah??nin m??t??x??ssisi ol!
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="course-details-content">
              <div className="image-wrapper">
                <img src={CourseDetailsMainIMG} alt="course-details" />
              </div>
              <div className="tabs-wrapper">
                <Tabs>
                  <TabList>
                    <Tab>
                      <HiArrowNarrowRight size={20} className="icon" />
                      S??ni ??ntellekt
                    </Tab>
                    <Tab>
                      <HiArrowNarrowRight size={20} className="icon" />
                      T??dris Proqram??
                    </Tab>
                    <Tab>
                      <HiArrowNarrowRight size={20} className="icon" />
                      ??st??nl??kl??r
                    </Tab>
                    <Tab>
                      <HiArrowNarrowRight size={20} className="icon" />
                      Sertifikatlar
                    </Tab>
                    <Tab>
                      <HiArrowNarrowRight size={20} className="icon" />
                      T??lim??il??r
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className="description-tab-wrapper">
                      <h3 className="title">S??ni intellekt n??dir?</h3>
                      <p>
                        S??ni ??ntellekt sah??si s??r??tl?? inki??af ed??n sah??l??rd??n
                        biridir. M??asir d??vr??m??z??n texnoloji inki??af??n?? n??z??rd??n
                        ke??irdikd??, s??ni intellektin inki??af?? n??tic??sind?? ??rs??y??
                        g??lmi?? yenilikl??ri g??rm??k olar. Y??ks??k g??lir, t??l??bat v??
                        artmaqda olan i?? f??rs??tl??ri s??ni intellekt?? olan mara????n
                        ba??l??ca s??b??bl??rind??ndir. S??ni intellekt?? yiy??l??nm??kl??,
                        y??ks??k statuslu ??irk??tl??rd?? i??l??m??k imkan?? ??ld??
                        edirsiniz. S??ni intellekti ??yr??nm??kl?? t??kc?? bilik yox,
                        problem h??ll etm?? bacar??????, ??traf??n??zdak?? d??nyaya f??rqli
                        bir bax???? qazan??rs??n??z. T??xminl??r?? g??r?? s??ni intellekt
                        cari v?? n??vb??ti onilliyin apar??c?? sah??l??rin siyah??s??nda
                        yerl????ir.
                      </p>
                      <br />
                      <br />
                      <h3 className="title">Niy?? s??ni intellekt?</h3>
                      <p>
                        S??ni ??ntellekt sah??si s??r??tl?? inki??af ed??n sah??l??rd??n
                        biridir. M??asir d??vr??m??z??n texnoloji inki??af??n?? n??z??rd??n
                        ke??irdikd??, s??ni intellektin inki??af?? n??tic??sind?? ??rs??y??
                        g??lmi?? yenilikl??ri g??rm??k olar. Y??ks??k g??lir, t??l??bat v??
                        artmaqda olan i?? f??rs??tl??ri s??ni intellekt?? olan mara????n
                        ba??l??ca s??b??bl??rind??ndir. S??ni intellekt?? yiy??l??nm??kl??,
                        y??ks??k statuslu ??irk??tl??rd?? i??l??m??k imkan?? ??ld??
                        edirsiniz. S??ni intellekti ??yr??nm??kl?? t??kc?? bilik yox,
                        problem h??ll etm?? bacar??????, ??traf??n??zdak?? d??nyaya f??rqli
                        bir bax???? qazan??rs??n??z. T??xminl??r?? g??r?? s??ni intellekt
                        cari v?? n??vb??ti onilliyin apar??c?? sah??l??rin siyah??s??nda
                        yerl????ir.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="curriculum-tab-wrapper">
                      <h3 className="heading-title">T??dris Proqram??</h3>
                      <p>
                        T??dris proqram??m??z 8 ay olmaqla 5 modul ????r??iv??sind??
                        h??yata ke??irilir. Proqram??n ??sas m??qs??di beyn??lxalq
                        sertifikatlara haz??rla??maqla yana????, i???? laz??mi olan
                        bacar??qlara yiy??l??n??r??k ??m??k bazar??na ????xmaqd??r.
                      </p>
                      <ul>
                        Proqrama daxildir:
                        <li>
                          <GiCheckMark size={15} /> Python Fundamental
                        </li>
                        <li>
                          <GiCheckMark size={15} />
                          SQL
                        </li>
                        <li>
                          <GiCheckMark size={15} />
                          X??tti c??br v?? statistika
                        </li>
                        <li>
                          <GiCheckMark size={15} />
                          Machine Learning{" "}
                        </li>
                      </ul>
                      <p>
                        Proqram ????r??iv??sind?? TensorFlow, AWS Cloud Practitioner
                        v?? AWS ML Specialty sertifikatlar?? ??zr?? bilik
                        qazan??rs??n??z. (Sertifikatlar hiss??sin?? ke??id ed??r??k,
                        daha ??trafl?? m??lumat ??ld?? ed?? bil??rsiniz.)
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="advantages-tab-wrapper">
                      <h3 className="heading-title">
                        ??ld?? Ed??c??yiniz ??st??nl??kl??r
                      </h3>
                      <p className="subtitle">
                        T??dris proqram??na qo??ularaq a??a????dak?? ??st??nl??kl??ri ??ld??
                        edirsiniz
                      </p>

                      <ul className="advantages-list">
                        <li className="advantage-item">
                          <h6>
                            <GiCheckMark size={20} />
                            ???? masas??:
                          </h6>
                          <p>
                            - M??rk??zimizd?? yerl????dirilmi?? ??al????ma masalar??ndan
                            7/24 istifad?? imkan??;
                          </p>
                        </li>
                        <li className="advantage-item">
                          <h6>
                            <GiCheckMark size={20} />
                            Mentor:
                          </h6>
                          <p>
                            - D??rs keyfiyy??tini art??rma m??qs??di il??, d??rsl??rd??
                            m????lliml??rl?? yana???? mentorlar siz?? d??st??k g??st??rir;
                          </p>
                          <p>
                            - D??rsd??n ??lav??, m??rk??z t??r??find??n qeyd olunmu??
                            saatlarda mentor d??st??yi;
                          </p>
                        </li>
                        <li className="advantage-item">
                          <h6>
                            <GiCheckMark size={20} />
                            T??cr??b?? imkan??:
                          </h6>
                          <p>
                            - T??dris proqram?? m??dd??tind?? Alas Academy t??r??find??n
                            h??yata ke????n v?? yaxud d??st??kl??nmi?? startaplarda
                            t??cr??b?? qazanmaq imkan??;
                          </p>
                          <p>
                            - T??dris proqram??n?? u??urla ba??a vuran t??l??b??l??r Alas
                            Academy il?? t??r??fda??l??q ed??n m??rk??zl??rd?? t??cr??b??
                            imkan?? qazan??r;
                          </p>
                        </li>
                        <li className="advantage-item">
                          <h6>
                            <GiCheckMark size={20} />
                            ??cma d??st??yi:
                          </h6>
                          <p>
                            - Alas Academyd?? yaranm???? texnoloji icman??n ??zv??
                            olmaqla, ??z??n??z?? daha da ??ox inki??af etdirm??y??
                            ????rait yarad??rs??n??z;
                          </p>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="certificates-tab-wrapper">
                      <div className="certificate-box">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="icon-wrapper">
                              <img src={Certificate3} alt="certificate" />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="content">
                              <h4 className="title">TensorFlow</h4>
                              <p>
                                Machine Learning v?? Deep Learning sah??sind?? olan
                                bilikl??rinizi t??sdiql??y??n beyn??lxalq
                                sertifikatd??r. Qeyd etm??k laz??md??r ki, Alas
                                Academy Google il?? ??m??kda??l??q ????r??ivisind??
                                sertifikatla??d??rma prosesini h??yata ke??ir??n
                                yegan?? m??rk??zdir
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="certificate-box">
                        <div className="row w-100">
                          <div className="col-md-2">
                            <div className="icon-wrapper">
                              <img src={Certificate1} alt="certificate" />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="content">
                              <h4 className="title">AWS Cloud Practitioner</h4>
                              <p>
                                Bulud texnologiyas?? ??zr?? ba??lan????c ??h??miyy??t
                                da????yan sertifikatlardand??r.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="certificate-box">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="icon-wrapper">
                              <img src={Certificate2} alt="certificate" />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="content">
                              <h4 className="title">AWS ML Specialty</h4>
                              <p>
                                Machine Learning ??zr??, ??n y??ks??k d??y??r?? malik
                                sertifikatlardand??r. Qeyd etm??k laz??md??r ki,
                                Alas Academy Amazonla ??m??kda??l??q ????r??iv??d??
                                Amazonun qafqazda yegan?? T??dris m??rk??zi v?? User
                                Groupudur.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="instructors">
                      <div className="instructor">
                        <div className="thumbnail-wrapper">
                          <img src={InstructorIMG01} alt="instructor" />
                          <ul className="instructor-social">
                            <li>
                              <a href="/">
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="content-wrapper">
                          <h6 className="title">To??rul Tah??rov</h6>
                          <span className="subtitle">Founder & Ceo</span>
                          <p>
                            Consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt labore et dolore magna aliqua enim minim
                            veniam quis nostrud exercitation ulla mco laboris
                            nisi ut aliquip ex ea commodo consequat. duis aute
                            irure dolor in reprehenderit in voluptate.
                          </p>
                        </div>
                      </div>

                      <div className="instructor">
                        <div className="thumbnail-wrapper">
                          <img src={InstructorIMG02} alt="instructor" />
                          <ul className="instructor-social">
                            <li>
                              <a href="https://www.linkedin.com/in/amina-kazimova-2462321b7/">
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="content-wrapper">
                          <h6 className="title">??min?? Kaz??mova</h6>
                          <span className="subtitle">Data Analitika</span>
                          <p>
                            Consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt labore et dolore magna aliqua enim minim
                            veniam quis nostrud exercitation ulla mco laboris
                            nisi ut aliquip ex ea commodo consequat. duis aute
                            irure dolor in reprehenderit in voluptate.
                          </p>
                        </div>
                      </div>

                      <div className="instructor">
                        <div className="thumbnail-wrapper">
                          <img src={InstructorIMG03} alt="instructor" />
                          <ul className="instructor-social">
                            <li>
                              <a href="https://www.linkedin.com/in/namin-ramazanov/">
                                <FaLinkedinIn />
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="content-wrapper">
                          <h6 className="title">Namin Ramazanov</h6>
                          <span className="subtitle">Founder & Ceo</span>
                          <p>
                            Consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt labore et dolore magna aliqua enim minim
                            veniam quis nostrud exercitation ulla mco laboris
                            nisi ut aliquip ex ea commodo consequat. duis aute
                            irure dolor in reprehenderit in voluptate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="course-details-sidebar">
              <div className="widget-box course-features">
                <h5>Course Features</h5>
                <ul className="features-list">
                  <li className="feature">
                    <span>
                      <VscFileSubmodule size={22} /> Modullar:
                    </span>
                    <span>5</span>
                  </li>

                  <li className="feature">
                    <span>
                      <MdAccessTime size={22} /> M??dd??t:
                    </span>
                    <span>8 ay</span>
                  </li>

                  <li className="feature">
                    <span>
                      <TfiWorld size={22} /> Dil:
                    </span>
                    <span>Az??rbaycanca</span>
                  </li>

                  <li className="feature">
                    <span>
                      <GrCertificate size={22} /> Sertifikatlar:
                    </span>
                    <span>3</span>
                  </li>
                </ul>

                <CustomButton href="https://forms.gle/hogo3NDrTfRGGbb96">
                  Kursa Ba??la
                </CustomButton>
              </div>

              <div className="widget-box course-certification">
                <h5 className="title">Sertifikatlar</h5>
                <div className="certificate-item">
                  <div className="image-wrapper">
                    <img src={Certificate3} alt="certificate" />
                  </div>
                  <p className="text">TensorFlow</p>
                </div>

                <div className="certificate-item">
                  <div className="image-wrapper">
                    <img src={Certificate2} alt="certificate" />
                  </div>
                  <p className="text">AWS ML Specialty</p>
                </div>

                <div className="certificate-item">
                  <div className="image-wrapper">
                    <img src={Certificate1} alt="certificate" />
                  </div>
                  <p className="text">AWS Cloud Practitioner</p>
                </div>
              </div>

              <div className="widget-box other-courses">
                <h5 className="title">Dig??r Kurslar??m??z</h5>

                <ul className="courses-list">
                  <li className="course">
                    <img src={CourseWidgetIMG01} alt="course" />
                    <div className="course-info">
                      <h6>Data Science</h6>
                      <Link to={'/tedris-proqramlarimiz/data-science'}>??trafl??...</Link>
                    </div>
                  </li>

                  <li className="course">
                    <img src={CourseWidgetIMG01} alt="course" />
                    <div className="course-info">
                      <h6>Data Analitika</h6>
                      <Link to={'/tedris-proqramlarimiz/data-analitika'}>??trafl??...</Link>
                    </div>
                  </li>

                  <li className="course">
                    <img src={CourseWidgetIMG01} alt="course" />
                    <div className="course-info">
                      <h6>Kiber T??hl??k??sizlik</h6>
                      <Link to={'/tedris-proqramlarimiz/kiber-tehlukesizlik'}>??trafl??...</Link>
                    </div>
                  </li>
                  <li className="course">
                    <img src={CourseWidgetIMG01} alt="course" />
                    <div className="course-info">
                      <h6>Back-End Proqramla??d??rma</h6>
                      <Link to={'/tedris-proqramlarimiz/backend-proqramlasdirma'}>??trafl??...</Link>
                    </div>
                  </li>
                  <li className="course">
                    <img src={CourseWidgetIMG01} alt="course" />
                    <div className="course-info">
                      <h6>Front-End Proqramla??d??rma</h6>
                      <Link to={'/tedris-proqramlarimiz/frontend-proqramlasdirma'}>??trafl??...</Link>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaArea/>
    </CourseDetailsStyled>
  );
};

export default CourseDetails;
