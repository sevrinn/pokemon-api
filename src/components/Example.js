import React, {useState, useEffect} from 'react';
 const Example = (props) => {
   const [people, setPeople] = useState([]);

   useEffect(() => {
     fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(response => setPeople(response.results))
   }, []);
   console.log(people);
   return (
     <div>

       {people.length > 0 && people.map((person, index)=>{
         
         return (
           <>
            <div key={index}>
            <p>Name: {person.name}</p>
            <p>Height: {person.height}cm</p>
            </div>
           </>
           );
       })}
     </div>
   );
 }

 export default Example; 

/**
 * This component fetches data from the starwars api
 * if it gets the results successfully, it turns the 
 * json results into a variable and sets that variable
 * to setPeople, setting the state of people to an array
 * of names
 * 
 * returns a div inside of which is an expression
 * if the length of people is more than 0 , map out people
 * returning a div with the name of each person in the 
 * people array
 */
