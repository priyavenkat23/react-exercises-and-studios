export default function BookList() {
   let pageTitle = "The Boxcar children";
   let book1 = "https://m.media-amazon.com/images/I/717gwL0i2CL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71a7QtIhPVL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/61ZcCPDXBxL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Chapter 1" />
         <img src={book2} alt="Chapter 2" />
         <img src={book3} alt="Chapter 3" />
      </div>      
   );
}