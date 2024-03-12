
import React from 'react';
import styles from './Description.module.css';


 function RecipeAuthor() {
    const authorName = 'Madras Samayal';
    const authorLink = 'https://www.indianhealthyrecipes.com/tomato-curry-tomato-kura-andhra-tomato-curry-recipe/';
    const authorPhoto = 'https://play-lh.googleusercontent.com/E8h2IQDvQKQ4IYYS-7QxBaUXTwdBincKQmxNiUGAWDmNGrYLH12pg42zk1VcTxrpQgg';
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Tomato Curry Egg Recipe Details</a> 
           </div>
        </div>
     );
 }

 class RecipeDescription extends React.Component {
    render() {
        return(
        <div> 
            <div>
               <h1>Tomato Egg Curry</h1>
               <p>Delicious Tomato curry with egg</p>
            </div>
            <RecipeAuthor />
         </div>
         );
    }
}
 export default RecipeDescription;