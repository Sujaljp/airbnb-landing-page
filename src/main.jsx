import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import About from './About'
import Review from './Review.jsx'
import arr from './data'

const review = arr.map((element)=>{
  return <Review 
          key = {element.id}
          item={element}
          {...element}/>
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <About/>
    <div className="review">
      {review}
    </div>
  </React.StrictMode>,
)
