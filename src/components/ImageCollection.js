import React, { Component } from 'react'
import ImageBackground from './ImageBackground'
import ImageZoom from './ImageZoom'

import './ImageCollection.css'

export default class ImageCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showZoom: false,
      images: props.images,
      selectedImage: null
    }
  }
  toggle = imgObject =>
    this.setState({
      selectedImage: this.state.showZoom ? null : imgObject,
      showZoom: !this.state.showZoom
    })

  render() {
    const containerClassName = this.props.className
    const { images, showZoom, selectedImage } = this.state
    if (images && images.length) {
      return (
        <div className={containerClassName}>
          {showZoom &&
            selectedImage && (
              <ImageZoom
                image={selectedImage}
                images={images}
                toggleVisabilityFunc={() => this.toggle()}
              />
            )}
          {images.map(img => (
            <ImageBackground
              key={`${img.title}-${img.url}`}
              onClick={() => this.toggle(img)}
              className={this.props.imageHolderClassName}
              url={img.url}
            />
          ))}
        </div>
      )
    } else {
      // no images provided
      return <div />
    }
  }
}