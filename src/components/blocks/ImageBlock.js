import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'


export const ImageBlock = ({ content }) => {
  // console.log(content);
  return (
    <div className="uk-width-1-2@s uk-width-1-3@m">
      <PreviewCompatibleImage imageInfo={content.image} />
    </div>
  )
}
export default ImageBlock
