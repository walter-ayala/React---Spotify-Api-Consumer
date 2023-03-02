import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, FlexContainer, MainWrapper } from '../components/CommonStyledComponents/CommonStyledComponents'
import TracksRecommended from '../components/Home/TracksRecommended'
import ThemeLayout from '../components/Layouts/ThemeLayout'
import useSelectedTrack from '../hooks/useSelectedTrack'
import empty from '../utils/empty'
import styled from 'styled-components'
import InformationTrack from '../components/Detail/InformationTrack'

const Detail = () => {
  const { state } = useLocation()
  const { dataTrack, loading, artists } = useSelectedTrack(state?.track)

  return (
    <ThemeLayout>
      <MainWrapper>
        <FlexContainer>
          <TracksRecommended artist={artists} />
          <Container>
            {!empty(dataTrack) && <CoverImage src={dataTrack.album.images[0].url} alt='cover image' />}
            {!empty(dataTrack) && <InformationTrack track={dataTrack} />}
          </Container>
        </FlexContainer>
      </MainWrapper>
    </ThemeLayout>
  )
}

const CoverImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: fill;
  height: auto;
  max-height: 35vh;
  display: none;
  @media only screen and (max-width: 769px) {
    display: flex;
  }
`

export default Detail