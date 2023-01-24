import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [error, setError] = React.useState(null)

  const submitEventHandler = e => {
    e.preventDefault()
    onSubmitUsername(inputRef.current.value) // or e.target.elements.userName.value
  }

  const handleChange = e => {
    const currentValue = inputRef.current.value;
    const isValid = currentValue === currentValue.toLowerCase();
    setError(isValid ? null : 'Error: we only accept lower-case characters')
  }

  return (
    <form onSubmit={submitEventHandler}>
      <div>
        <label htmlFor="lastName">Last name:</label>
        <input id="lastName" />
        <label htmlFor="userName">Username:</label>
        <input id="userName" type="text" ref={inputRef} onChange={handleChange} />
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
      {error && <span style={{color: "red"}}>{error}</span>}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
