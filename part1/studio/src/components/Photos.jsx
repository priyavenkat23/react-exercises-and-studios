import styles from './Description.module.css';

export default function RecipePhoto(){
    const imageUrl = 'https://www.licious.in/blog/wp-content/uploads/2022/08/shutterstock_1548758192.jpg'
    return(
        <img src={imageUrl} alt="recipe photo" className = {styles.imageUpdates} />
    );
}