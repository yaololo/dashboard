import React, { useState } from 'react'
import styled from 'styled-components'

const ImgPlaceHolder = styled.div`
  width: 100%;
  height: 240px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f4;
`

const Img = styled.img<{ isLoading: boolean }>`
  width: 100%;
  height: auto;
`

type Props = {
  alt: string
  fallback?: string
  height?: number | string
  src: string
  width?: number | string
  onLoaded?: () => void
  onLoadFail?: () => void
} & React.ImgHTMLAttributes<HTMLImageElement>

const Image: React.FC<Props> = (props) => {
  const { alt, src, style, onLoaded, onLoadFail } = props

  const [isLoading, setIsLoading] = useState(true)

  const handleOnLoad = () => {
    setIsLoading(false)
    onLoaded?.()
  }

  const handleLoadFail = () => {
    setIsLoading(false)
    onLoadFail?.()
  }

  return (
    <>
      <Img
        src={src}
        alt={alt}
        style={style}
        onLoad={handleOnLoad}
        onError={handleLoadFail}
        loading="lazy"
        isLoading={isLoading}
      />
      {isLoading ? (
        <ImgPlaceHolder>
          <div>lazy loading...</div>
        </ImgPlaceHolder>
      ) : null}
    </>
  )
}

export default Image
