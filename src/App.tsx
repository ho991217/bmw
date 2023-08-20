import { styled } from "styled-components";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import { TRANSITION, ZINDEX } from "./constants";

import XM from "./assets/images/bmw-xm-4-suv-base.png";
import XM_LIGHT from "./assets/images/bmw-xm-teaser.png";
import HALF_CENTURY_LOGO from "./assets/images/50BMWMLogo.png";
import ENGINE from "./assets/images/BMW-Overview_Engine.png";
import TRANSMISSION from "./assets/images/bmwddl-50-yrs-m-overview-engine-03-desktop-1.png";
import BRAKE_DISK from "./assets/images/bmwddl-50-yrs-m-overview-engine-04-desktop-1.png";
import TRACKLEVEL from "./assets/images/bmwm-landing-page-engineering-01-desktop-1.png";
import PIONEER from "./assets/images/bmwddl-50-yrs-m-overview-engine-07-desktop-1.png";
import M_I_LOGO from "./assets/images/m-and-i-emblems-png-bmwimg-1.png";
import OLD_BMW from "./assets/images/bmwddl-50-yrs-m-overview-history-01-desktop-1.png";
import M1 from "./assets/images/1.png";
import M2 from "./assets/images/2.png";
import M3 from "./assets/images/3.png";
import M4 from "./assets/images/4.png";
import M5 from "./assets/images/5.png";
import M6 from "./assets/images/6.png";
import M7 from "./assets/images/7.png";
import M8 from "./assets/images/8.png";
import M9 from "./assets/images/9.png";
import M10 from "./assets/images/10.png";
import M11 from "./assets/images/11.png";
import M12 from "./assets/images/12.png";
import M13 from "./assets/images/13.png";
import M14 from "./assets/images/14.png";
import M15 from "./assets/images/15.png";
import M16 from "./assets/images/16.png";
import M17 from "./assets/images/17.png";
import M18 from "./assets/images/18.png";
import M19 from "./assets/images/19.png";
import M20 from "./assets/images/20.png";
import M21 from "./assets/images/21.png";
import M22 from "./assets/images/22.png";
import M23 from "./assets/images/23.png";

const History = [
   {
      img: M1,
      title: "1972년 BMW 터보 프로토타입 개발",
      description:
         "걸윙(Gull-Wing)도어와 유럽 최초 맬리어블 범퍼를 장착한 모델",
   },
   {
      img: M2,
      title: "1972년 BMW 3.0 CSL 출시",
      description: "70년대 레이싱 버전 중 가장 성공적인 투어링카",
   },
   {
      img: M3,
      title: "1979년 320터보 노리스링 우승",
      description:
         "Manfred Winkelhock/Markus Höttinger\nBMW 예거마이스터 320터보로 노리스링(Norisring) 에서 우승",
   },
   {
      img: M4,
      title: "1979년 BMW M1",
      description: "앤디워홀이 디자인한 르망 24시간 레이스용 BMW M1 아트카",
   },
   {
      img: M5,
      title: "1972년 GmbH 설립",
      description: "BMW Motorsport GmbH 설립 (현재의 BMW M)",
   },
   {
      img: M6,
      title: "1973년 BMW 3.0 CSL 금메달",
      description:
         "BMW 3.0 CSL 뉘르부르크링(Nürburgring)\n24시간 내구 레이스 금메달",
   },
   //
   {
      img: M7,
      title: "1983년 BMW 엔진 F1 월드 챔피언십 우승",
      description:
         "BMW 터보 엔진 장착한 넬슨 피케의 자동차가\n포뮬러 1 월드 챔피언십 우승",
   },
   {
      img: M8,
      title: "1984년 BMW M5 출시, 전설의 탄생",
      description: "최초의 BMW M5 출시, 상시 세계에서 가장 빠른 세단",
   },
   {
      img: M9,
      title: "1978년 BMW M1 출시 ",
      description: "레이스 시리즈에서 영감을 받은 슈퍼카",
   },
   {
      img: M10,
      title: "1986년 BMW M3 출시, M 시대의 도래",
      description:
         "M3의 유일한 퓨어 레이싱 카이자 M3의 이름이\n지금까지 존재하게 만든 차량으로 전설의 시작인 모델.",
   },
   {
      img: M11,
      title: "1987년 BMW M3 투어링 카 월드 챔피언 등극",
      description: "BMW M3 로버트 라바글리아의 M3로 투어링 카 월드 챔피언 등극",
   },
   {
      img: M12,
      title: "1993년 BMW M GmbH로 사명 변경",
      description: "BMW Motorsport GmbH에서 BMW M GmbH로 사명 변경",
   },
   {
      img: M13,
      title: "2001년 BMW M3 GTR",
      description: "요르그 뮬러, 아메리칸 르망 시리즈 우승",
   },
   {
      img: M14,
      title: "2004년 & 2005년 BMW M3 GTR ",
      description: "뉘르부르크링(Nürburgring) 24시간 내구 레이스 우승",
   },
   {
      img: M15,
      title: "2009년 BMW X6 M 출시 ",
      description: "세계 최초 스포츠 액티비티 쿠페 (SAC)",
   },
   {
      img: M16,
      title: "2011년 BMW 1시리즈 M 쿠페 출시",
      description: "1시리즈 쿠페 모델을 기반으로 만들어진 1M의 등장",
   },
   {
      img: M17,
      title: "2012년 BMW Motorsport DTM 매년 최소 1개 이상 수상",
      description: "BMW Motorsport DTM 레이스 매년 최소 1개 이상의 상 수상",
   },
   {
      img: M18,
      title: "2013년 BMW M6 그란 쿠페 출시",
      description: "BMW M6의 4도어 모델 M6 그란 쿠페 출시",
   },
   {
      img: M19,
      title: "2015년 BMW M4 GTS 출시 ",
      description: "혁신적인 워터 인젝션 기술을 장착한 첫 로드카",
   },
   {
      img: M20,
      title: "2017년 BMW M4 CS 출시",
      description: "기존 M4에서 성능아 강화된 M4 CS 출시",
   },
   {
      img: M21,
      title: "2021년 M5 CS 출시",
      description: "627마력의 트랙용 스포츠 세단",
   },
   {
      img: M22,
      title: "2021년 BMW Concept XM 출시",
      description: "BMW M의 파격적인 새로운 차량 컨셉",
   },
   {
      img: M23,
      title: "2022년 BMW i4 M50 출시 ",
      description: "첫 순수 전기차 M 모델",
   },
];

const Main = styled.main`
   width: 1440px;
   padding-top: 84px;
   overflow: hidden auto;
   position: relative;
   margin: 0 auto;
   min-height: calc(100vh - 84px);
`;

const InnerContainer = styled.div`
   display: flex;
   position: relative;
   align-items: center;
   justify-content: space-between;
   width: 1440px;
   margin: 0 auto;
`;

const THEXM = styled(motion.h1)`
   font-size: 291px;
   font-weight: 400;
   line-height: normal;
   margin: 0 auto 0 auto;
   text-align: center;
   z-index: ${ZINDEX.BACKGROUND};
`;

const CarImage = styled(motion.img).attrs({ src: XM, alt: "BMW XM" })`
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   top: -400px;
   z-index: ${ZINDEX.CAR};
`;

const CarLight = styled(motion.img).attrs({ src: XM_LIGHT, alt: "BMW XM" })`
   position: absolute;
   top: -200px;
   left: 50%;
   transform: translateX(-50%);
   z-index: ${ZINDEX.CAR_LIGHT};
`;

const CarWrapper = styled(motion.div)`
   position: relative;
   margin: 0 auto;
   overflow: visible;
`;

const HalfCenturiesWrapper = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 550px;
   margin-bottom: 230px;
   * {
      z-index: ${ZINDEX.CAR_LIGHT};
   }
   span {
      font-size: 2rem;
      font-weight: 400;
   }
   img {
      width: 24rem;
   }
`;

const Skewed = styled(motion.div)`
   position: absolute;
   z-index: ${ZINDEX.BACKGROUND};
   top: 0;
   height: 4000px;
   width: 500px;
   display: flex;
   transform: skew(-30deg);
   overflow: hidden;
   div {
      z-index: ${ZINDEX.BACKGROUND};
      height: 100%;
      width: 50%;
   }
   div:first-child {
      background-color: #121212;
   }
   div:last-child {
      background-color: #1c1c1c;
   }
`;

const TheMContainer = styled(motion.div)`
   margin: 0 auto;
   width: 440px;
   position: relative;
   display: flex;
   justify-content: center;
`;

const TheMSvg = styled(motion.svg)`
   position: absolute;
   &:first-child {
      left: 0;
   }
   &:nth-child(2) {
      left: 65px;
   }
   &:nth-child(3) {
      left: 130px;
   }
   &:nth-child(4) {
      right: 0;
   }
`;

const CommentBlock = styled(motion.div)<{ direction: "left" | "right" }>`
   display: flex;
   flex-direction: column;
   margin: ${({ direction }) =>
      direction === "left" ? "0 0 0 96px" : "0 96px 0 0"};
   align-items: ${({ direction }) =>
      direction === "left" ? "flex-start" : "flex-end"};
   h3 {
      font-size: 28px;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -1.12px;
      margin-bottom: 19px;
   }
   p {
      line-height: normal;
      letter-spacing: -0.64px;
      color: #b8b8b8;
      font-size: 16px;
      text-align: ${({ direction }) => direction};
      line-height: 1.5rem;
   }
`;

const TheMDescription = styled(motion.div)`
   text-align: center;
   margin-top: 500px;
   * {
   }
   h3 {
      font-size: 2.4rem;
      margin-bottom: 2rem;
      font-weight: 400;
      z-index: ${ZINDEX.CAR_LIGHT};
   }
   p {
      line-height: 1.5em;
      font-weight: 100;
      color: #b8b8b8;
      z-index: ${ZINDEX.CAR_LIGHT};
   }
   a {
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.3rem;
      text-decoration: none;
      color: #b8b8b8;
      z-index: ${ZINDEX.CAR_LIGHT};
   }
`;

const EnginImg = styled(motion.div)`
   z-index: -3;
   box-shadow: 0px 0px 200px 500px rgba(0, 0, 0, 0.9) inset;
   img {
      z-index: -10;
      left: 50%;
      transform: translateX(-50%);
      position: relative;
      mix-blend-mode: screen;
   }
`;

const Detail = styled.div`
   background-color: #fff;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   margin: 0 auto;
   * {
      color: #262626;
   }
`;

const HorizontalScroll = styled.div`
   overflow-x: scroll;
   display: flex;
   width: 100%;
   margin: 0 auto;
   padding: 0 96px;
   gap: 32px;
`;

const Box = styled.div`
   width: 457px;

   img {
      width: 457px;
      object-fit: contain;
      border-radius: 15px;
   }
`;

function App() {
   const container = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
            ease: "easeInOut",
         },
      },
   };

   const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
   };
   return (
      <>
         <Navigation />
         <Main>
            <Skewed
               initial={{
                  opacity: 0,
               }}
               animate={{
                  opacity: 0.5,
               }}
               transition={TRANSITION}
            >
               <div />
               <div />
            </Skewed>
            <THEXM
               initial={{
                  opacity: 0,
                  y: 30,
               }}
               animate={{
                  opacity: 1,
                  y: 0,
               }}
               transition={TRANSITION}
            >
               THE XM
            </THEXM>
            <CarWrapper
               initial={{ scale: 0.85 }}
               animate={{ scale: 1 }}
               transition={TRANSITION}
            >
               <CarLight
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ...TRANSITION, delay: 0 }}
               />
               <CarImage
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ...TRANSITION }}
               />
            </CarWrapper>
            <HalfCenturiesWrapper
               initial={{ opacity: 0, translateY: 30 }}
               animate={{ opacity: 1, translateY: 0 }}
               transition={TRANSITION}
            >
               <span>BMW M 50주년</span>
               <img src={HALF_CENTURY_LOGO} alt="BMW M 50주년" />
            </HalfCenturiesWrapper>
            <TheMContainer
               variants={container}
               initial="hidden"
               whileInView="show"
               transition={{
                  delayChildren: 1,
               }}
            >
               <TheMSvg
                  width="156"
                  height="153"
                  viewBox="0 0 156 153"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  variants={item}
               >
                  <path
                     d="M155.295 0L64.7094 153H0L90.5859 0H155.295Z"
                     fill="#0066B1"
                  />
               </TheMSvg>
               <TheMSvg
                  width="157"
                  height="153"
                  viewBox="0 0 157 153"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  variants={item}
               >
                  <path
                     d="M156.005 0L65.4102 153H0.709961L91.2958 0H156.005Z"
                     fill="#003D78"
                  />
               </TheMSvg>
               <TheMSvg
                  width="156"
                  height="153"
                  viewBox="0 0 156 153"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  variants={item}
               >
                  <path
                     d="M155.705 0L65.1196 153H0.410156L91.0052 0H155.705Z"
                     fill="#E22718"
                  />
               </TheMSvg>
               <TheMSvg
                  width="246"
                  height="153"
                  viewBox="0 0 246 153"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  variants={item}
               >
                  <path
                     d="M150.173 0V63.2402L187.591 0H246V153H191.352L191.362 89.7598L153.898 153H102.282V89.7598L64.8189 153H0.118652L90.7045 0H150.173Z"
                     fill="white"
                  />
               </TheMSvg>
            </TheMContainer>
            <TheMDescription
               variants={item}
               initial="hidden"
               whileInView="show"
               transition={{
                  delay: 0.5,
                  duration: 1,
               }}
            >
               <h3>세상에서 가장 강력한 글자 M</h3>
               <p>
                  BMW M은 혁신적인 드라이빙 다이내믹스를 경험할 수 있는 특별한
                  모델으로 고성능 엔진의 강력한 퍼포먼스와
                  <br /> 첨단 기술을 결합하여 끊임없이 완벽을 향해 질주해왔으며,
                  그 역사는 50여 년 전으로 거슬러 올라갑니다.
                  <br /> 일상 속 실용적인 드라이빙까지 겸비해 어느 것 하나 빠질
                  것 없는 BMW M의 도로위의 전설은 오늘도 계속됩니다.
               </p>
               <a href="/">
                  BMW M 모델 알아보기
                  <svg
                     width="22"
                     height="22"
                     viewBox="0 0 22 22"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <circle cx="11" cy="11" r="11" fill="#D9D9D9" />
                     <path
                        d="M14.5555 11.0708L9.66036 6.17573C9.54714 6.06242 9.396 6 9.23485 6C9.07369 6 8.92256 6.06242 8.80934 6.17573L8.44885 6.53613C8.21427 6.77098 8.21427 7.15267 8.44885 7.38715L12.5594 11.4977L8.44428 15.6128C8.33107 15.7262 8.26855 15.8772 8.26855 16.0383C8.26855 16.1995 8.33107 16.3506 8.44428 16.464L8.80478 16.8243C8.91809 16.9376 9.06913 17 9.23029 17C9.39144 17 9.54258 16.9376 9.6558 16.8243L14.5555 11.9247C14.669 11.8111 14.7313 11.6593 14.731 11.498C14.7313 11.336 14.669 11.1844 14.5555 11.0708Z"
                        fill="black"
                     />
                  </svg>
               </a>
            </TheMDescription>
            <EnginImg
               variants={{
                  hidden: {
                     boxShadow:
                        "0px -350px 100px 500px rgba(0, 0, 0, 0.9) inset",
                  },
                  show: {
                     boxShadow: "0px 0px 200px 200px rgba(0, 0, 0, 0.9) inset",
                  },
               }}
               initial="hidden"
               whileInView="show"
               transition={{ delay: 1, duration: 1 }}
            >
               <motion.img src={ENGINE} alt="BMW M 엔진" />
            </EnginImg>
            <InnerContainer
               style={{
                  transform: "translateY(-200px)",
               }}
            >
               <CommentBlock direction="left">
                  <h3>웅장한 성능의 엔진</h3>
                  <p>
                     세계에서 가장 존경받는 엔지니어들의 전설적인 엔지니어링.
                     <br />
                     혁신적인 M TwinPower Turbo 기술은 속도 지연 없이 터보의
                     모든 힘을 생성합니다.
                     <br />단 3초 만에 0~60mph의 속도로 가속할 수 있습니다.
                  </p>
               </CommentBlock>
               <CommentBlock direction="right">
                  <h3>강력한 변속기</h3>
                  <p>
                     성능을 추구하는 사람들은 BMW M3 세단과 BMW M4 쿠페의
                     <br /> 표준 6단 수동 변속기를 좋아할 것이고, 드라이브로직이
                     장착된 8단 M 스포츠 변속기가
                     <br /> 장착된 모델을 선택하는 운전자들은 순간 변속과 더
                     빠른 가속을 즐길 것입니다.
                  </p>
               </CommentBlock>
            </InnerContainer>
            <InnerContainer>
               <CommentBlock direction="left">
                  <h3>지능적인 컨트롤</h3>
                  <p>
                     배전 모드를 조정할 수 있는 BMW의 가장 성능 중심적인 <br />
                     4륜 구동 시스템인 MaxDrive를 통해 0~60mph의 속도로
                     <br />
                     탁월한 제어력을 경험해 보십시오.
                  </p>
               </CommentBlock>
               <img src={TRANSMISSION} alt="BMW M xDrive" />
            </InnerContainer>
            <InnerContainer>
               <img src={BRAKE_DISK} alt="BMW M xDrive" />
               <CommentBlock direction="right">
                  <h3>지능적인 컨트롤</h3>
                  <p>
                     배전 모드를 조정할 수 있는 BMW의 가장 성능 중심적인
                     <br />
                     4륜 구동 시스템인 MaxDrive를 통해 0~60mph의 속도로
                     <br />
                     탁월한 제어력을 경험해 보십시오.
                  </p>
               </CommentBlock>
            </InnerContainer>
            <InnerContainer
               style={{
                  alignItems: "flex-end",
                  height: 720,
                  paddingBottom: 96,
               }}
            >
               <img
                  style={{
                     position: "absolute",
                     top: "0",
                     width: 1440,
                     zIndex: "-1",
                  }}
                  src={TRACKLEVEL}
                  alt="BMW M xDrive"
               />
               <CommentBlock direction="left">
                  <h6
                     style={{
                        fontSize: 16,
                        margin: 0,
                     }}
                  >
                     엔지니어링
                  </h6>
                  <h3
                     style={{
                        marginTop: 5,
                        marginBottom: 16,
                     }}
                  >
                     TRACK-LEVEL
                     <br /> PERFORMANCE
                  </h3>
                  <p
                     style={{
                        margin: 0,
                        fontWeight: 400,
                     }}
                  >
                     BMW M은 다음 수준의 성능 핸들링과 제동력만으로 <br />
                     비교할 수 있는 동력과 토크를 제공합니다.
                  </p>
               </CommentBlock>
            </InnerContainer>
            <InnerContainer
               style={{
                  alignItems: "flex-end",
                  height: 720,
                  paddingBottom: 96,
               }}
            >
               <img
                  style={{
                     position: "absolute",
                     top: "0",
                     width: 1440,
                     zIndex: "-1",
                  }}
                  src={PIONEER}
                  alt="BMW M xDrive"
               />
               <CommentBlock direction="left">
                  <img src={M_I_LOGO} alt="lo" />
                  <h3
                     style={{
                        marginTop: 33,
                        marginBottom: 16,
                     }}
                  >
                     힘의 개척자
                  </h3>
                  <p
                     style={{
                        margin: 0,
                        fontWeight: 400,
                     }}
                  >
                     배전 모드를 조정할 수 있는 BMW의 가장 성능 중심적인 <br />
                     4륜 구동 시스템인 MaxDrive를 통해 0~60mph의 속도로 <br />
                     탁월한 제어력을 경험해 보십시오.
                  </p>
               </CommentBlock>
            </InnerContainer>
         </Main>
         <Detail>
            <InnerContainer>
               <img src={OLD_BMW} alt="BMW M xDrive" />
            </InnerContainer>
            <InnerContainer>
               <h3
                  style={{
                     fontWeight: 400,
                     marginLeft: 96,
                     fontSize: 28,
                  }}
               >
                  BMW M 50년의 역사
               </h3>
               <p
                  style={{
                     marginRight: 96,
                     fontSize: 14,
                     color: "#4D4D4D",
                     lineHeight: 1.5,
                  }}
               >
                  BMW M3 CSL부터 BMW M1 그리고 Concept XM까지, 시대를 앞서간
                  그리고 어쩌면 지금도 시대를 앞서고 있는 BMW M 모델들은
                  <br />
                  BMW M의 50년 역사에서 모터스포츠의 아이콘, 전설 그리고 우상이
                  되었습니다. BMW M의 반세기의 역사적인 순간을 확인해보세요.
               </p>
            </InnerContainer>
            <HorizontalScroll>
               {History.map((item) => (
                  <Box key={item.title}>
                     <img src={item.img} alt={item.title} />
                     <h3>{item.title}</h3>
                     <p>{item.description}</p>
                  </Box>
               ))}
            </HorizontalScroll>
         </Detail>
      </>
   );
}

export default App;
