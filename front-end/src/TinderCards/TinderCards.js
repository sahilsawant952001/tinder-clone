import React,{useEffect, useState} from 'react'
import classes from "../TinderCards/TinderCards.module.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people,setPeople] = useState([])

    useEffect(()=>{
        async function fetchHandler(){
            try{
              const response = await fetch('http://localhost:8001/tinder');
              if(!response.ok){
                throw new Error("SOMETHING WENT WRONG");
              }
              const data = await response.json();
              setPeople(data);
            } catch(error){
              console.log(error);
            }
          }
        fetchHandler();
    },[])

    const swiped = () => {

    }

    const outOfFrame = () => {
        
    }
    
    console.log(people);

    return (
        <div className={classes.tinderCards}>
            <div className={classes.tinderCards__cardContainer}>
                {people.map((person) => {
                
                return <TinderCard
                                className={classes.swipe}
                                key={person.name}
                                preventSwipe={["up","down"]}
                                onSwipe={(dir) => swiped(dir,person.name)}
                                onCardLeftScreen = {()=> outOfFrame(person.name)}
                        >
                            <div
                                style={{backgroundImage:`url(${person.url})`,backgroundRepeat: "no-repeat"}}    
                                className={classes.card}
                            >
                                <h3>{person.name}</h3>   
                            </div>
                        </TinderCard>
                })}
            </div>
        </div>
    )
}

export default TinderCards
