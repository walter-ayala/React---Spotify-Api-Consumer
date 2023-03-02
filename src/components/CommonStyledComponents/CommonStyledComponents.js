import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0px 32px 0px 32px;
`;

export const MainWrapper = styled.div`
  display: flex;
  font-family: sans-serif;
  min-height: 100vh;
  background-color: ${(props) => props.theme.black};
`;

export const FlexContainer = styled.div`
  width: 100%;
  @media only screen and (max-width: 769px) {
    padding-bottom: 0px;
  }
  display: flex;
  gap: 32px;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 32px;
  gap: 36px;
  flex-direction: column;
  overflow-y: scroll;
  height: 100vh;
  background-color: ${(props)=> props.theme.primary};
`;

export const NameTrack = styled.h4`
  color: ${(props) => props.theme.white};
  margin: 2px 0px;
  display: -webkit-box;
  max-width: 400px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Subtitles = styled.h5`
  color: ${(props) => props.theme.gray};
  margin: 2px 0px;
`