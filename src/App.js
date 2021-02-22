import React, { useEffect, useCallback, useState } from 'react'
import Card from './components/Card'

import './App.css'

const NAMES = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh']

function App() {
  const [users, setUsers] = useState([])
  const [showCard, setshowCard] = useState(false)
  const [userSelected, setUserSelected] = useState(false)

  const usersCallback = useCallback(async name => {
    const URI = `https://api.github.com/users/${name}`
    try {
      const res = await fetch(URI)
      return await res.json()
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    console.log('cuantas veces entra?')
    NAMES.forEach(name => {
      usersCallback(name)
        .then(res => {
          setUsers(prev => [...prev, { ...res }])
        })
        .catch(err => console.log(err))
    })
  }, [usersCallback])

  useEffect(() => {
    console.log('users => ', users)
  }, [users])

  function openCard(user) {
    setUserSelected(user)
    setshowCard(true)
  }

  function closeCard(user) {
    setshowCard(false)
  }

  return (
    <div className='App'>
      <header className='App-header'>Home</header>
      <div class='users'>
        <h2>Top 5 GitHub Users</h2>
        <p>Tap the username to see more information</p>
        <div>
          {users.map(user => (
            <button key={Math.random() * 100} onClick={() => openCard(user)}>
              {user.login}
            </button>
          ))}
        </div>
        <Card showCard={showCard} user={userSelected} back={closeCard} />
      </div>
    </div>
  )
}

export default App
