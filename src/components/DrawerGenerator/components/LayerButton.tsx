import styles from '../styles/buttons.module.css'

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
}
export const LayerButton = ({ onClick , text} :Props) => {
  return (
    <button
        onClick={ onClick }
        className={styles.addLayerButton}
    >
       {text}
    </button>
  )
}
