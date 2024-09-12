import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

// 이미지 + 아이콘 임포트 영역
import petImage from '../img/minggo.jpg';
import musicImage from '../img/music.png';
import noteImage from '../img/note.jpg';

// SVG 아이콘 임포트
import { ReactComponent as HtmlIcon } from '../icon/html5.svg';
import { ReactComponent as CssIcon } from '../icon/css3.svg';
import { ReactComponent as JsIcon } from '../icon/javascript.svg';
import { ReactComponent as AWSIcon } from '../icon/amazonwebservices.svg';
import { ReactComponent as DbeaverIcon } from '../icon/dbeaver.svg';
import { ReactComponent as EclipseIcon } from '../icon/eclipseide.svg';
import { ReactComponent as FigmaIcon } from '../icon/figma.svg';
import { ReactComponent as GithubIcon } from '../icon/github.svg';
import { ReactComponent as IntellijIcon } from '../icon/intellijidea.svg';
import { ReactComponent as MariadbIcon } from '../icon/mariadb.svg';
import { ReactComponent as NetlifyIcon } from '../icon/netlify.svg';
import { ReactComponent as NotionIcon } from '../icon/notion.svg';
import { ReactComponent as PostmanIcon } from '../icon/postman.svg';
import { ReactComponent as ReactIcon } from '../icon/react.svg';
import { ReactComponent as ReacthookIcon } from '../icon/reacthookform.svg';
import { ReactComponent as ReactrouterIcon } from '../icon/reactrouter.svg';
import { ReactComponent as SlackIcon } from '../icon/slack.svg';
import { ReactComponent as SpringIcon } from '../icon/spring.svg';
import { ReactComponent as SpringbootIcon } from '../icon/springboot.svg';
import { ReactComponent as StyledcomponentsIcon } from '../icon/styledcomponents.svg';

const SecondSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [interestModalIsOpen, setInterestModalIsOpen] = useState(false);
  const [interestModalContent, setInterestModalContent] = useState({ title: '', description: '', imageUrl: '' });
  const [counter, setCounter] = useState(0);
  const [skillModalIsOpen, setSkillModalIsOpen] = useState(false);
  const [targetCount, setTargetCount] = useState(0); // 목표 숫자 설정
  const [isCounting, setIsCounting] = useState(false); // 카운트 상태 추가

  const interests = [
    { title: '반려동물', description: '저희집 강아지 밍고라고 합니다! <br> 너무 귀엽지 않나요', imageUrl: petImage },
    { title: '노래', description: '음악을 듣는 걸 좋아해요! <br>Music...is..my life...', imageUrl: musicImage },
    { title: '필기', description: '손으로 쓰면서 계획하는 걸 좋아해요.<br>펜으로 쓰는 스걱거림을 좋아해서 필기를 자주 하는 편입니다!', imageUrl: noteImage },
  ];

  // 스킬별 목표 숫자 설정
  const skills = [
    { name: 'HTML5', icon: <HtmlIcon width={100} height={100} />, target: 97 }, 
    { name: 'CSS3', icon: <CssIcon width={100} height={100} />, target: 98 },
    { name: 'AWS', icon: <AWSIcon width={100} height={100} />, target: 45 },
    { name: 'dbeaver', icon: <DbeaverIcon width={100} height={100} />, target: 50 },
    { name: 'eclipse', icon: <EclipseIcon width={100} height={100} />, target: 67 },
    { name: 'figma', icon: <FigmaIcon width={100} height={100} />, target: 90 },
    { name: 'github', icon: <GithubIcon width={100} height={100} />, target: 93 },
    { name: 'intellijidea', icon: <IntellijIcon width={100} height={100} />, target: 45 },
    { name: 'mariadb', icon: <MariadbIcon width={100} height={100} />, target: 50 },
    { name: 'netlify', icon: <NetlifyIcon width={100} height={100} />, target: 80 },
    { name: 'notion', icon: <NotionIcon width={100} height={100} />, target: 97 },
    { name: 'postman', icon: <PostmanIcon width={100} height={100} />, target: 66 },
    { name: 'react', icon: <ReactIcon width={100} height={100} />, target: 87 },
    { name: 'reacthookform', icon: <ReacthookIcon width={100} height={100} />, target: 84 },
    { name: 'reactrouter', icon: <ReactrouterIcon width={100} height={100} />, target: 83 },
    { name: 'slack', icon: <SlackIcon width={100} height={100} />, target: 75 },
    { name: 'spring', icon: <SpringIcon width={100} height={100} />, target: 60 },
    { name: 'springboot', icon: <SpringbootIcon width={100} height={100} />, target: 59 },
    { name: 'styledcomponents', icon: <StyledcomponentsIcon width={100} height={100} />, target: 93 },
    { name: 'JavaScript', icon: <JsIcon width={100} height={100} />, target: 86 }
  ];

  const pages = [
    {
      title: "직업을 선택한 이유",
      content: (
        <>
          <Subsection>
            <h3>퍼블리셔를 알게 된 계기</h3>
            <p>유기견 보호소에 관심이 있어 SNS로 자주 보다가 사이트를 들어가게 되었습니다.
            유기견 보호소 사이트는 자극적인 색상과 굵은 폰트로만 이루어져 있어,
            사람들의 관심을 끌 수 있을까 라는 생각이 들었고 홈페이지를 만드는 방법을 찾아보다  
            퍼블리셔라는 직업을 알게 되었고, 더 많은 검색을 해보게 됬을 때, 국비 지원이라는 
            프로그램들이 많았고 국비 지원 프로그램을 통해 퍼블리셔 과정을 배우게 되었습니다. </p>
          </Subsection>
          <Subsection>
            <h3>풀스택을 배우게 된 계기 </h3>
            <p>퍼블리셔의 직업으로 3년을 근무하면서, 디자인의 업무 보다는 코드를 치면서
              재밌는 감정을 느끼게 되었고 더 배울 수 있을까 라는 궁금증으로 국비 지원을
              한번 더 지원해 배우게 되었습니다.
            </p>
          </Subsection>
          <Subsection>
            <h3>앞으로의 목표</h3>
            <p>퍼블리셔와 프론트앤드 개발자를 하면서 아직 어려운 백엔드 개발자를 공부하면서,
              완전한 풀스택 개발자가 되어버리고 싶다..!
            </p>
          </Subsection>
        </>
      )
    },
    {
      title: "현재 저는 이런 것들을 배웠어요!",
      content: (
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index} onClick={() => openSkillModal(skill.target)}>
              {skill.icon}
              <p>{skill.name}</p>
            </Skill>
          ))}
        </SkillsContainer>
      )
    },
    {
      title: "내 관심사",
      content: (
        <PuzzleContainer>
          {interests.map((interest, index) => (
            <PuzzlePiece key={index} onClick={() => openInterestModal(interest)}>
              {interest.title}
            </PuzzlePiece>
          ))}
        </PuzzleContainer>
      )
    },
  ];

  const openInterestModal = (interest) => {
    setInterestModalContent(interest);
    setInterestModalIsOpen(true);
  };

  const closeInterestModal = () => {
    setInterestModalIsOpen(false);
  };

  // 스킬 클릭 시 목표 숫자를 받아서 모달을 여는 함수
  const openSkillModal = (target) => {
    setSkillModalIsOpen(true);
    setTargetCount(target);
    setCounter(0); // 카운터 초기화
    setIsCounting(true); // 카운트 시작
  };

  // 카운트 진행 함수
  useEffect(() => {
    if (isCounting && counter < targetCount) {
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev >= targetCount) {
            clearInterval(interval);
            setIsCounting(false); // 카운트 중지
            return targetCount;
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
    }
  }, [counter, isCounting, targetCount]);

  const closeSkillModal = () => {
    setSkillModalIsOpen(false);
    setCounter(0); // 모달 닫을 때 카운터 초기화
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : pages.length - 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
  };

  return (
    <Section>
      <Content>
        <h2>{pages[currentPage].title}</h2>
        {pages[currentPage].content}
      </Content>
      <ButtonGroup>
        <Button onClick={handlePrevClick}>{"<"}</Button>
        <Button onClick={handleNextClick}>{">"}</Button>
      </ButtonGroup>

      {/* 관심사 모달 */}
      <Modal
        isOpen={interestModalIsOpen}
        onRequestClose={closeInterestModal}
        contentLabel="관심사 설명"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h2>{interestModalContent.title}</h2>
        <ModalImage src={interestModalContent.imageUrl} alt={interestModalContent.title} />
        <p dangerouslySetInnerHTML={{ __html: interestModalContent.description }}></p>
        <button onClick={closeInterestModal}>Close</button>
      </Modal>

      {/* 스킬 모달 */}
      <Modal
        isOpen={skillModalIsOpen}
        onRequestClose={closeSkillModal}
        contentLabel="스킬 업로드"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h2>Skill Loading...</h2>
        {/* 카운터가 목표 숫자에 도달할 때까지 숫자를 출력 */}
        <p>{counter}% 가능해요!</p>
        <button onClick={closeSkillModal}>Close</button>
      </Modal>
    </Section>
  );
};

export default SecondSection;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #282c34;
  color: white;
`;

const Content = styled.div`
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin: 0 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background: #3D4C53;
  color: white;
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1.5em;
  transition: background 0.2s;

  &:hover {
    background: #26A69A;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    font-size: 1.2em;
    margin-top: 10px;
  }
`;

const PuzzleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const PuzzlePiece = styled.div`
  width: 100px;
  height: 100px;
  background-color: #61dafb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1.2em;
  text-align: center;
`;

const Subsection = styled.div`
  margin: 20px 0;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  h3 {
    margin-bottom: 10px;
    font-size: 1.5em;
  }

  p {
    font-size: 1.2em;
    line-height: 1.3;
  }
`;

const ModalImage = styled.img`
  width: 300px; 
  height: auto; 
  max-width: 100%; 
  border-radius: 10px; 
`;
