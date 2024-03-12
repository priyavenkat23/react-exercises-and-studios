
import React from 'react';
import styles from './Ingredients.module.css';


export default function RecipeIngredients(){
    const ingredientList = ["Onion", "Tomatoes", "Chilli", "Curry Leaves","Egg"];
    return(
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                 <li>{ingredientList[0]}</li>
                 <li>{ingredientList[1]}</li>
                 <li>{ingredientList[2]}</li>
                 <li>{ingredientList[3]}</li>
                <li>{ingredientList[4]}</li>
            </ul>
        </div>        
    );
}