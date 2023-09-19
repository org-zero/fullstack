import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLink, faCoffee, faLaptopCode } from '@fortawesome/free-solid-svg-icons';



export default function Navbar() {
  
    const Me = "Aaron - Expert IT";
    //_______________________
    const urls_navbars = { // this a Objects -> choose using urls_0 and mores urls with definition example : urls_1 
      urls_0: "Front-End",urls_1: "Back-End ", urls_2: "Security"
    };
    //_______________________
    const lists = ["Hi Hack your welcome",  "I`m Fullstack Developer", "Write me,  I work for your project!"];
  
    return (
      
<div className='Principal'>
    <div className={styles.Navbar}>
        <div className={styles.ME}> <FontAwesomeIcon icon={faCoffee} color='brown' /> {Me} </div>
        <div className={styles.Links}>
        <Link href="/otra-pagina" className={styles.links_rigth}> <FontAwesomeIcon icon={faCode} color='greenyellow' /> {urls_navbars.urls_0} </Link>
        <Link href="/otra-pagina" className={styles.links_rigth}> <FontAwesomeIcon icon={faCode} color=' rgb(14, 246, 157)' /> {urls_navbars.urls_1} </Link>
        </div>
    </div> 

      <div className={styles.Cover}> <br /><br />
        <ul className={styles.list}>
        <FontAwesomeIcon icon={faLaptopCode} color=' rgb(160, 254, 105)' fontSize={80} />
          {lists.map((url, index) => (
            <li key={index}  className={styles.lists}>{url}</li>
          ))}
        </ul>
      </div>

     <div className={styles.scrollmenu}>
      <a>Connect Networks &rarr;</a>
      <Link href="/otra-pagina" className={styles.links_rigth}> <FontAwesomeIcon icon={faLink} color='rgb(0, 153, 255)' /> Facebook</Link>
      <Link href="/otra-pagina" className={styles.links_rigth}> <FontAwesomeIcon icon={faLink} color=' palevioletred' /> Instagram</Link>
      <Link href="/otra-pagina" className={styles.links_rigth}> <FontAwesomeIcon icon={faLink} color='red' /> Youtube</Link>
      <Link href="/otra-pagina" className={styles.links_rigth}> <FontAwesomeIcon icon={faLink} color='gray' /> Github</Link>
      <Link href="/otra-pagina" className={styles.links_rigth}> <FontAwesomeIcon icon={faLink} color='rgb(18, 61, 90)' /> Linkedin</Link>
      <Link href="/otra-pagina" className={styles.links_rigth}> <FontAwesomeIcon icon={faLink} color='greenyellow' />  Computrabajo</Link>
      
     </div>

</div>  
  )
}


 /*
  `{urls.map((url, index) => ( ... ))}`: Esta es una expresión JSX que se evalúa para crear una 
  lista de elementos. `urls.map()` itera sobre cada elemento del array `urls`.
  - `url`: Representa cada elemento del array `urls` durante la iteración.
  - `index`: Es la posición del elemento en el array.
 `<li key={index}>{url}</li>`: Dentro de la función `map`, se retorna 
 un elemento de lista (`<li>`) para cada elemento del array `urls`.
   - `key={index}`: La prop `key` es importante en React para ayudar a identificar
    de manera única cada elemento de la lista. En este caso, usamos el índice de la 
    iteración como clave (`key`) porque los elementos del array no tienen una propiedad única asociada.
   - `{url}`: Aquí, `url` es el texto que se mostrará dentro de cada elemento de lista.
    */