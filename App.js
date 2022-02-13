import { StyleSheet, View, StatusBar } from 'react-native';
import { useState } from 'react';
import { AdMobBanner } from 'expo-ads-admob';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
      color: 'orange',
      selected: false,
      position: '' 
    },
    {
      id: '2',
      color: 'yellow',
      selected: false,
      position: '' 
    },
    {
      id: '3',
      color: 'green',
      selected: false,
      position: '' 
    },
    {
      id: '4',
      color: 'blue',
      selected: false,
      position: '' 
    },
    {
      id: '5',
      color: 'indigo',
      selected: false,
      position: '' 
    },
    {
      id: '6',
      color: 'violet',
      selected: false,
      position: '' 
    },
    {
      id: '7',
      color: 'white',
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

//save highscore to async storage
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(score + 1)
      await AsyncStorage.setItem('savedHighScore', jsonValue)
    } catch (error) {
      console.log('error saving high score');
    }
  }

//retrieve highschore from async storage
const getData = async () => {  
  try {    
    const jsonValue = await AsyncStorage.getItem('savedHighScore')    
    jsonValue != null ? setHighScore(jsonValue) : setHighScore(0);
  } catch(error) {    
    console.log('error retrieving high score'); 
  }
}

getData();

//initialize board
  function randomizeOrder () {
    cards.forEach(card =>
    card.position = Math.random()
    );
    cards.sort(function(a,b) {return a.position - b.position})
  }
  randomizeOrder();

//process user input
  async function handleCardSelection(card){
    randomizeOrder();
    const selectedId = card.id;
    let updatedCards = [...cards];
    const index = updatedCards.map(object => object.id).indexOf(selectedId);
    let selectedCard = {...updatedCards[index]};
    
    if (score >= highScore && selectedCard.selected === false) {
      storeData();
    }

    if (score == 8) {
      cards.forEach((object)=>{object.selected = false;})
    }

    if (selectedCard.selected === true){
      setCards(initialCards);
      setScore(0);
    } else {
      selectedCard.selected = true;
      updatedCards[index] = selectedCard;
      setScore(score + 1);
      setCards(updatedCards);
      getData();
    }
}

//generate view
  return (
    <View style={styles.container}>
      {props.children}
      <StatusBar ></StatusBar>
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
      < AdMobBanner
        style={styles.banner}
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-8905729476642330/2451582567"
        servePersonalizedAds = {false}
        >
      </AdMobBanner>
    </View>
  );
}

//android banner ad id: ca-app-pub-8905729476642330/2451582567
//android test banner ad id: ca-app-pub-3940256099942544/6300978111

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
  },
  banner: {
    position: 'absolute',
    bottom: 0
  }
});
