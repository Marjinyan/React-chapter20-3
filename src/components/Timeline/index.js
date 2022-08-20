import React from 'react'
import { PictureContext } from '../../context/SliderContext'

class Timeline extends React.Component{
    static contextType = PictureContext
    render(){
        const {photos, currentIndex, setActivePicture} = this.context
        return <div className="photo-list">
            {
            photos.map((elm, index) => {
                let activeImg=index === currentIndex ? "active" : null
                    return <img
                        className={activeImg}
                        key={index}
                        alt="timeline item"
                        src={require("../../"+elm)}
                        onClick={() => setActivePicture(index)}
                    />
                })
            }
        </div>
    }
}
export default Timeline