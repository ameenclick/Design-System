import Loader from '../loaders/Loader'
import MediaProps from './type'

export const Media: React.FC<MediaProps> = ({
    src,
    alt,
    classes,
    title=""
}: MediaProps) => {
  return (
    src?
    <img src={src} alt={alt} className={classes} title={title} />
    :
    <Loader variant="spinner" variantType="primary" style="width: 3rem; height: 3rem;" />
  )
}

export default Media
