import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Card from './components/Card';
import Score from './components/Score';
import Instructions from './components/Instructions';


export default function App(props) {
  const initialCards = [
    {
      id: '0',
      color: 'red',
      selected: false,
      position: ''
    },
    {
      id: '1',
      color: 'blue',
      selected: false,
      position: '' 
    },
    {
      id: '2',
      color: 'green',
      selected: false,
      position: '' 
    },
    {
      id: '3',
      color: 'yellow',
      selected: false,
      position: '' 
    },
    {
      id: '4',
      color: 'purple',
      selected: false,
      position: '' 
    },
    {
      id: '5',
      color: 'pink',
      selected: false,
      position: '' 
    },
    {
      id: '6',
      color: 'teal',
      selected: false,
      position: '' 
    },
    {
      id: '7',
      color: 'orange',
      selected: false,
      position: '' 
    },
    {
      id: '8',
      color: 'grey',
      selected: false,
      position: ''
    }
  ];

  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  const [cards, setCards] = useState(initialCards);

  function randomizeOrder () {
    cards.forEach(card =>
    card.position = Math.random()
    );
    cards.sort(function(a,b) {return a.position - b.position})
  }

  randomizeOrder();

  function handleCardSelection(card){
    randomizeOrder();
    const selectedId = card.id;
    let updatedCards = [...cards];
    const index = updatedCards.map(object => object.id).indexOf(selectedId);
    let selectedCard = {...updatedCards[index]};
    
    if (score >= highScore && selectedCard.selected === false) {
      setHighScore(highScore + 1);
    }

    if (score == 8) {
      cards.forEach((object)=>{object.selected = false;})
      console.log(cards)
    }

    if (selectedCard.selected === true){
      setCards(initialCards);
      setScore(0);
    } else {
      selectedCard.selected = true;
      updatedCards[index] = selectedCard;
      setScore(score + 1);
      setCards(updatedCards);
    }
}

  return (
    <View style={styles.container}>
      {props.children}
      < Instructions/>
      <View style={styles.board}>
      {cards.map(function(card, index){
        return < Card 
        key={index}
        id = {card.id}
        color = {card.color} 
        action = {() => handleCardSelection(card)}/>;
      })}
      </View>
      < Score score = {score} highScore = {highScore}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(30, 30, 60);',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    display: 'flex',
    width: '90%',
    aspectRatio: 1,
    marginTop: '10%',
    marginBottom: '10%'
  }
});
