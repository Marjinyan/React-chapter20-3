import React from 'react'
import Slider from './components/Slider'
import PictureContextProvider from './context/SliderContext'
import './App.css'

class App extends React.Component{
  render() {
    return <PictureContextProvider>
      <Slider/>
    </PictureContextProvider>
  }
}
export default App