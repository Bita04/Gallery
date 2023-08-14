import styles from "./index.module.css";
interface ImageViewerProps {
  src: string;
}
const ImageViewer = ({ src }: ImageViewerProps) => {
  return (
    <div className={styles.fullscreen}>
      <img alt="img" src={src} className={styles.img} />
    </div>
  );
};

export default ImageViewer;
