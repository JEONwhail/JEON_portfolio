import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const SecondSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '', imageUrl: '' });

  const interests = [
    { title: '코딩', description: '저는 코딩을 즐깁니다.', imageUrl: 'coding_image.png' },
    { title: '음악', description: '음악을 듣는 것을 좋아합니다.', imageUrl: 'music_image.png' },
    { title: '여행', description: '여행을 통해 새로운 경험을 쌓는 것을 좋아합니다.', imageUrl: 'travel_image.png' },
    // 필요한 만큼 추가
  ];

  const pages = [
    {
      title: "직업을 선택한 이유",
      content: (
        <>
          <Subsection>
            <h3>퍼블리셔?</h3>
            <p>유기견 보호소에 관심이 있어 SNS로 자주 보다가 사이트를 들어가게 되었습니다.
            유기견 보호소 사이트는 자극적인 색상과 굵은 폰트로만 이루어져 있어,
            사람들의 관심을 끌 수 있을까 라는 생각이 들었고 홈페이지를 만드는 방법을 찾아보다  
            퍼블리셔라는 직업을 알게 되었고, 더 많은 검색을 해보게 됬을 때, 국비 지원이라는 
            프로그램들이 많았고 국비 지원 프로그램을 통해 퍼블리셔 과정을 배우게 되었습니다. </p>
          </Subsection>
          <Subsection>
            <h3>풀스택?? </h3>
            <p>퍼블리셔의 직업으로 3년을 근무하면서, 디자인의 업무 보다는 코드를 치면서
              재밌는 감정을 느끼게 되었고 더 배울 수 있을까 라는 궁금증으로 국비 지원을
              한번 더 지원해 배우게 되었습니다.
            </p>
          </Subsection>
          <Subsection>
            <h3>목표</h3>
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
          <Skill>
            <img src="html5_logo.png" alt="HTML5" />
            <p>HTML5</p>
          </Skill>
          <Skill>
            <img src="css3_logo.png" alt="CSS3" />
            <p>CSS3</p>
          </Skill>
          <Skill>
            <img src="javascript_logo.png" alt="JavaScript" />
            <p>JavaScript</p>
          </Skill>
          {/* 필요한 만큼 추가 */}
        </SkillsContainer>
      )
    },
    {
      title: "내 관심사",
      content: (
        <PuzzleContainer>
          {interests.map((interest, index) => (
            <PuzzlePiece key={index} onClick={() => openModal(interest)}>
              {interest.title}
            </PuzzlePiece>
          ))}
        </PuzzleContainer>
      )
    },
    {
      title: "TMI",
      content: (
        <TMISection>
          <ListContainer>
            <ListItem>💚 저는 초록색을 좋아해요 💚</ListItem>
            <ListItem>MBTI 는 ESTP 입니다.👍</ListItem>
            <ListItem>🐶강아지를 좋아해요!!</ListItem>
            <ListItem>🥽물에서 노는 걸 좋아합니다!</ListItem>
            {/* 추가 정보들 */}
          </ListContainer>
        </TMISection>
      )
    }
  ];

  const openModal = (interest) => {
    setModalContent(interest);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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
        <h2>{modalContent.title}</h2>
        <img src={modalContent.imageUrl} alt={modalContent.title} />
        <p>{modalContent.description}</p>
        <button onClick={closeModal}>Close</button>
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

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
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

const TMISection = styled.section`
  width: 100vw; /* 전체 너비 */
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4단으로 나누기 */
  gap: 20px; /* 항목 간의 간격 */
  list-style: none; /* 기본 리스트 스타일 제거 */
  padding: 0; /* 기본 패딩 제거 */
  margin: 0; /* 기본 마진 제거 */
  width: 100%; /* 전체 너비 */
  max-width: 1200px; /* 최대 너비 설정 (옵션) */
`;

const ListItem = styled.li`
  font-size: 1.2em;
  color: black; /* 텍스트 색상 */
  padding: 10px;
  background-color: #ffffff; /* 배경색 (옵션) */
  border-radius: 5px; /* 모서리 둥글게 */
  text-align: center;
`;
