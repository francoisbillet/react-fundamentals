import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [userName, setUserName] = React.useState('')

  const submitEventHandler = e => {
    e.preventDefault()
    onSubmitUsername(userName)
  }

  const handleChange = e => {
    const {value} = e.target
    setUserName(value.toLowerCase())
  }

  return (
    <form onSubmit={submitEventHandler}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          id="userName"
          type="text"
          value={userName}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
