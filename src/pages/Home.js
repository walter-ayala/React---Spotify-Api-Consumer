import React from 'react'
import styled from 'styled-components'
import Categories from '../components/Home/Categories'
import TopTracks from '../components/Home/TopTracks'
import TracksRecommended from '../components/Home/TracksRecommended'
import ThemeLayout from '../components/Layouts/ThemeLayout'

const Home = () => {
  return (
    <ThemeLayout>
      <MainWrapper>
        <FlexContainer>
          <TracksRecommended />
          <Container>
            <Categories />
            <TopTracks />
          </Container>
        </FlexContainer>
      </MainWrapper>
    </ThemeLayout>
  )
}

const MainWrapper = styled.div`
  display: flex;
  font-family: sans-serif;
  min-height: 100vh;
  background-color: ${(props) => props.theme.black};
`;

const FlexContainer = styled.div`
  width: 100%;
  //add extra padding for bottom navigation in small devices
  @media only screen and (max-width: 769px) {
    padding-bottom: 112px;
  }
  display: flex;
  gap: 32px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 32px;
  gap: 36px;
  flex-direction: column;
  background-color: ${(props)=> props.theme.primary};
`;

export default Home