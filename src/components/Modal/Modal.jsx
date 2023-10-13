import css from './Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ src, alt, handleClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  return (
    <div
      className={css.Overlay}
      onClick={e => e.target === e.currentTarget && handleClose()}
    >
      <div className={css.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
