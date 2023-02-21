import React from 'react'
import styled from 'styled-components'
import useCategories from '../../hooks/useCategories'

const Categories = () => {
  const { categories, loading } = useCategories()

  return (
    <div>
      <TitleSection>Categorías</TitleSection>
      <MainContainer>
        {
          categories.map((category) => (
            <CategoryContain key={category.name}>
              <ImageTrack src={category.icons[0].url} alt="avatar" />
              <CategoryName>{category.name}</CategoryName>
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
  gap: 10px 20px;
`

const CategoryName = styled.p`
  color: ${(props) => props.theme.white};
  text-align: center;
`

const CategoryContain = styled.div`
  display: flex;
  flex-direction: column;
`

export default Categories