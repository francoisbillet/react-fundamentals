import * as React from 'react'
import '../box-styles.css'

// const smallBox = <div className="box box--small" style={{backgroundColor: "lightblue", fontStyle: "italic"}}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={{backgroundColor: "pink", fontStyle: "italic"}}>medium pink box</div>
// const largeBox = <div className='box box--large' style={{backgroundColor: "orange", fontStyle: "italic"}}>large orange box</div>

// const Box = ({className = '', style, ...otherProps}) => {
//   return (
//     <div className={`box ${className}`} style={{...style, fontStyle: 'italic'}} {...otherProps}/>
//   )
// }

const Box = ({size, style, children}) => {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div className={`box ${sizeClassName}`.trim()} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)

const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)

const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
