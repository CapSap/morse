import styles from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Morse Code Keyer</h1>
      <p>Turn your dits and dahs into english or vice reversa</p>
      <p>
        Please note you must place a space inbetween your mose code characters.
        Happy coding
      </p>
    </div>
  );
};

export default Heading;
