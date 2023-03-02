import React from 'react'
import styled from 'styled-components'
import Spotify from '../../assets/SpotifyLogo'
import { NameTrack, Subtitles } from '../CommonStyledComponents/CommonStyledComponents'

const InformationTrack = ({ track }) => {
console.log(track)
  return (
    <GeneralContainer>
      <RowContainer>
        <ImageTrack src={track.album.images[0].url} alt="avatar" />
        <InformationSection>
          <TitleTrack>{track.name}</TitleTrack>
          <ArtistsTrack>{`${getArtists(track)} (Artista)`}</ArtistsTrack>
        </InformationSection>
        <SpotifySection onClick={()=> window.open(track.external_urls.spotify, '_blank')}>
          <Subtitles>Puedes escucharla en</Subtitles>
          <Spotify/>
        </SpotifySection>
      </RowContainer>
    </GeneralContainer>
  )
}

const getArtists = (track) => track.artists.map(u => u.name).join(', ')

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageTrack = styled.img`
  width: 12vw;
  border-radius: 10px;
  heigth: 8vh;
  object-fit: contain;
  flex: 1;
  @media only screen and (max-width: 769px) {
    display: none
  }
`

const RowContainer = styled.div`
  display: flex;
  margin: 0px 5%;
  @media only screen and (max-width: 769px) {
    flex-direction:  column;
  }
`

const ArtistsTrack = styled.h4`
  color: ${(props) => props.theme.white};
`

const InformationSection = styled.div`
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 5;
  margin: 0px 15px;
  @media only screen and (max-width: 769px) {
    align-items: center;
  }
`

const TitleTrack = styled(NameTrack)`
  font-size: 1.3em;
  @media only screen and (max-width: 769px) {
    font-size: 1.8em;
  }
`

const SpotifySection = styled(InformationSection)`
  display: flex;
  flex:2;
`

export default InformationTrack