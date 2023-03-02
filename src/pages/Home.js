import React from 'react'
import { Container, FlexContainer, MainWrapper } from '../components/CommonStyledComponents/CommonStyledComponents'
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

export default Home