import React from 'react'
import { PictureContext } from '../../context/SliderContext'
import Timeline from '../Timeline'

class Slider extends React.Component{
    static contextType = PictureContext
    render(){
        const {photos, currentIndex} = this.context
        const {goNext, goPrev} = this.context
        return <div className="slider">
            <img 
                src={require("../../"+photos[currentIndex])} 
                className="main-photo"
                alt='maim'
            />
            <div>
                <button onClick={goPrev}>prev</button>
                <button onClick={goNext}>next</button>
            </div>
            <Timeline/>
        </div>
    }
}
export default Slider