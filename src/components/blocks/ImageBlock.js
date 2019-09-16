import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'


export const ImageBlock = ({ content }) => {
  // console.log(content);
  //
  return (
    <PreviewCompatibleImage imageInfo={content} />
  )
}
export default ImageBlock
