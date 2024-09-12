import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em;
  background-color: #f4f4f4;
  height: 100vh;
  box-sizing: border-box;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: white;
  padding: 3em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ImagePlaceholder = styled.div`
  width: 90%;
  height: 70%;
  background-color: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  margin-bottom: 1.5em;
`;

const Text = styled.p`
  font-size: 1.5em;
  text-align: center;
  line-height: 1.5;
`;

const RightSection = styled.div`
  width: 50%;
  padding: 3em;
  background-color: #fff8f0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  max-height: 90vh; /* 화면 크기에 맞춰 스크롤 가능하게 설정 */
`;

const FontSection = styled.div`
  margin-bottom: 2em;
  text-align: center;
  font-size: 1.5em;
`;

const ColorSection = styled.div`
  margin-bottom: 2em;
  text-align: center;
  font-size: 1.5em;
`;

const ColorPalette = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const ColorBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.color};
`;

const FeatureSection = styled.div`
  text-align: center;
  font-size: 1.5em;

  ul {
    padding: 0;
  }

  li {
    list-style-type: none; 
    margin-bottom: 0.5em;
  }
`;

function FourthSection() {
  return (
    <Container>
      <LeftSection>
        <ImagePlaceholder>IMG</ImagePlaceholder>
        <Text>
          저는 퍼블리셔 3년차인 김지연 이라고 합니다! <br/>배울 것도 많은 아직이지만, <br/> 더 나아갈 수 있다는 목표가 생긴 것만으로도 더 배우고 싶고,<br/> 앞으로 나아가고 싶어요! <br/>여기까지 봐주셔서 감사합니다!
        </Text>
      </LeftSection>
      <RightSection>
        <FontSection>
          <h3>사용한 Font</h3>
          <p>Courier New</p>
          <p>전체적으로 사용될 폰트를 찾기전에 기준을 잡았습니다. <br/>
              다양한 굵기가 있을 것, <br/>
              가독성이 있을 것, <br/>
              2가지의 기준을 잡고 폰트를 확인 했습니다.</p>
        </FontSection>
        <ColorSection>
          <h3>사용한 Color</h3>
          <ColorPalette>
            <ColorBox color="#ff6b6b" />
            <ColorBox color="#ff85a1" />
            <ColorBox color="#a085ff" />
            <ColorBox color="#85a1ff" />
            <ColorBox color="#85ff85" />
          </ColorPalette>
          <p>다양한 색상들 중에서도 좋아하는 색상을 넣을지, <br/>
              무난한 색상을 넣을지 고민하다가, 자기소개서 포트폴리오를 만드는 만큼, <br/>
              제가 좋아하는 색상들을 추려서 보시는 분들의 눈을 아프지 않게, <br/>
              제 콘텐츠가 눈에 들어올 수 있도록 색상을 선택했습니다.</p>
        </ColorSection>
        <FeatureSection>
          <h3>사용한 기능</h3>
          <ul>
            <li>REACT</li>
            <li>Netlify</li>
            <li>Styled-components</li>
          </ul>
        </FeatureSection>
      </RightSection>
    </Container>
  );
}

export default FourthSection;
