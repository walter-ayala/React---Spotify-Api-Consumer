import React from 'react'
import styled from 'styled-components'
import useRecommendations from '../../hooks/useRecommendations'
import empty from '../../utils/empty'
import millisToMinutesAndSeconds from '../../utils/millisToMinutes'
import { NameTrack, StyledLink, Subtitles } from '../CommonStyledComponents/CommonStyledComponents'

const TracksRecommended = ({artist}) => {
  const { tracks, loading } = useRecommendations(artist)

  if(loading && empty(tracks)) return null

  return (
    <TrackSection>
      <TitleSection>Canciones Recomendadas</TitleSection>
      {
        tracks.map((track) => (
          <StyledLink key={track.id} state={{ track }} to={`/detail/${track.id}`} >
            <MainContainer >
              <ImageTrack src={track.album.images[0].url} alt="avatar" />
              <InformationContainer>
                <NameTrack>{track.name}</NameTrack>
                <Subtitles>{track.artists[0].name}</Subtitles>
              </InformationContainer>
              <Subtitles>{millisToMinutesAndSeconds(track.duration_ms)}</Subtitles>
            </MainContainer>
          </StyledLink>
        ))
      }
    </TrackSection>
  )
}

const TrackSection = styled.div`
  display:flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  height: 100vh;
  width: 35%;
  min-width: auto;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`

const MainContainer = styled.div`
  display:flex;
  width: 100%;
  gap: 10px;
  align-items:center;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

const ImageTrack = styled.img`
  width: 80px;
  border-radius: 10px;
  heigth: 80px;
  object-fit: contain;
  @media only screen and (max-width: 1200px) {
    width: 100px;
  }
`

const TitleSection = styled.h3`
  color: ${(props) => props.theme.white};
  position: sticky;
  top:0;
  background-color: black;
  padding: 32px 32px 32px 32px;
  margin: 0px;
  display: flex;
  min-width: auto;
`

const InformationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  flex-direction: column;
  @media only screen and (max-width: 1200px) {
    align-items: center;
    justify-content: center;
  }
`

export default TracksRecommended