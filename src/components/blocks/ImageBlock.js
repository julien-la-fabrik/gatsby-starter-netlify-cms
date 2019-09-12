import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'


export const ImageBlock = ({ content }) => {
  // console.log(content);
  return (
    <PreviewCompatibleImage imageInfo={content.image} />
    
  )
}
export default ImageBlock
