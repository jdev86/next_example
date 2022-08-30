import styles from './component-library.module.css';

/* eslint-disable-next-line */
export interface ComponentLibraryProps {}

export function ComponentLibrary(props: ComponentLibraryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ComponentLibrary!</h1>
    </div>
  );
}

export default ComponentLibrary;
