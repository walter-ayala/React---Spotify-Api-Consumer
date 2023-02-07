import { kebabCase } from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useRecommendations from '../../hooks/useRecommendations'
import millisToMinutesAndSeconds from '../../utils/millisToMinutes'

const TracksRecommended = () => {
  const { tracks, loading } = useRecommendations()

  return (
    <TrackSection>
      <TitleSection>Canciones Recomendadas</TitleSection>
      {
        tracks.map((track) => (
          <StyledLink key={track.name} state={{detail: track}} to={`detail/${kebabCase(track.name)}`} >
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
  width: 20%;
  flex-direction: column;
  gap: 10px;
  padding: 32px;
`

const MainContainer = styled.div`
  display:flex;
  width: 100%;
  gap: 10px;
  align-items:center;
  height: 85px;
  justify-content: space-between;
`

const ImageTrack = styled.img`
  width: 80px;
  border-radius: 10px;
  heigth: 80px;
  object-fit: contain;
`

const TitleSection = styled.h3`
  color: ${(props) => props.theme.white};
`

const NameTrack = styled.h4`
  color: ${(props) => props.theme.white};
  margin: 2px 0px;
  display: -webkit-box;
  max-width: 400px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Subtitles = styled.h5`
  color: ${(props) => props.theme.gray};
  margin: 2px 0px;
`

const InformationContainer = styled.div`
  align-items: flex-start;
  flex: 1;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default TracksRecommended