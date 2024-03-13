import './styles.css';

function Button() {
   function onLearnMore(){
      return "Slipsh Splas";
   }
      
   

   return ( 
         <button onClick={onLearnMore}>
         Learn More
         </button>
   );
}

export default Button;