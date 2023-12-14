import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, showImage} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = imageDetails

  const imageShow = () => {
    showImage(imageUrl, imageAltText)
  }
  return (
    <li className="list-container">
      <button onClick={imageShow} className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}
export default ThumbnailItem
