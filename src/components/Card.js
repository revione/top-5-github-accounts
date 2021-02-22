import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: white;
  width: 100vw;
  right: -110vw;

  ${({ showCard }) =>
    showCard &&
    `
    right: 0;
  `}

  transition: all 0.25s linear;
`

const Header = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
`

const Back = styled.button`
  position: absolute;
  left: 16px;
  border: 0;
  background-color: transparent;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
  }
`

const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 16px;
`

const Main = styled.div`
  display: flex;
  padding: 16px;

  p {
    margin-top: 0;
    margin-bottom: 5px;
    font-weight: 500;
  }
`

const Name = styled.p``

const Location = styled.p`
  color: #c5c5c5;
  font-size: 0.9em;
`

const ContainerData = styled.div`
  border-bottom: 1px solid #c5c5c5;
  width: 100%;
`

export default function Card({ showCard, back, user }) {
  const { avatar_url, login, name, location } = user
  return (
    <Container showCard={showCard}>
      <Header>
        <Back onClick={back}>&lt; back</Back>
        Person
      </Header>
      <Main>
        <Avatar src={avatar_url} alt={login} />
        <ContainerData>
          <Name>{name}</Name>
          <Location>{location}</Location>
        </ContainerData>
      </Main>
    </Container>
  )
}
