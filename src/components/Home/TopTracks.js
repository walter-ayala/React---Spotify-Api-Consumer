import React from 'react'
import styled from 'styled-components'
import useTopTracks from '../../hooks/useTopTracks'

const TopTracks = () => {
  const { tracks, loading } = useTopTracks()

  return (
    <div>
      <TitleSection>Lo Más Escuchado</TitleSection>
      <MainContainer>
        {
          tracks.map((song) => (
            <CategoryContain>
              <ImageTrack src={song.track.album.images[0].url } alt="avatar" />
              <NameTrack>{song.track.name}</NameTrack>
              <Subtitles>{song.track.artists[0].name}</Subtitles>
            </CategoryContain>
          ))
        }
      </MainContainer>
    </div>
  )
}

const TitleSection = styled.h3`
  color: ${(props) => props.theme.white};
`
const ImageTrack = styled.img`
  width: 100px;
  border-radius: 10px;
  object-fit: fill;
  height: 100px;
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  width: 100%;
  gap: 40px 20px;
`

const CategoryContain = styled.div`
  display: flex;
  flex-direction: column;
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

export default TopTracks