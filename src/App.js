import './App.css'
import axios from 'axios'
import ListUser from './components/ListUser'
import { useEffect, useState } from 'react'

function App() {
  const [utilisateurs, setUtilisateurs] = useState([])

  useEffect(() => {
    const getData = async () => {
      const users = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      setUtilisateurs(users.data)
    }
    getData()
  }, [])
  return (
    <div className="App">
      {utilisateurs ? (
        <div>
          <ListUser utilisateurs={utilisateurs} />
        </div>
      ) : (
        "pas d'utilisateurs !"
      )}
    </div>
  )
}

export default App
