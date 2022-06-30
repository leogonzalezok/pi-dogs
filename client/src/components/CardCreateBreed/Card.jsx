import React from "react";
import styles from "./Card.module.css";

const Card = ({ dog, input, setInput }) => {

  function deleteSpan(e) {
    const arrayFilter = input.temperaments.filter(( t, i ) => i != e.target.id);
    setInput({...input, temperaments: arrayFilter})

  }

  return (
    <div className={styles.card}>
      <div className={styles.container}>
         <img src={dog.image} alt={dog.name}/>
      </div>
      <div className={styles.details}>
        <h3>{dog.name}</h3>
        {dog.weight  ? <p>Peso: {dog.weight} kg</p> : null }
        {dog.height  ? <p>Altura: {dog.height} cm</p> : null }
        {dog.life_span ? <p>Años de vida: {dog.life_span}</p> : null }
        <div className={styles.temperaments}>
        {
          input.temperament.leght > 0 ? <p>Temperaments: </p> :
        input.temperament?.map((temperament, index) => {
          return( <span className={styles.span} key={index} id={index} onClick={(e) => deleteSpan(e)}>{temperament}</span>)
        })
        }
        </div>
      </div>
    </div>
    // <img className={styles.cardIcon} src={dog.image.url}/>
    // <p className={styles.cardDescription}>
    //   {dog.id + dog.name}
    // </p>
  );
};
export default Card;