//MARLON FREITAS CAMPOS
//PAULO CESAR WERNECK JUNIOR
//BACHARELADO EM ENGENHARIA DA COMPUTAÇÃO - 9º PERÍODO

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import Game from './Game';

export default function App() {

  
  const [turn, setTurn] = useState(false)

  const [position, setPosition] = useState([
      {
          id: 1,
          turn: ''
      },
      {
          id: 2,
          turn: ''
      },
      {
          id: 3,
          turn: ''
      },
      {
          id: 4,
          turn: ''
      },
      {
          id: 5,
          turn: ''
      },
      {
          id: 6,
          turn: ''
      },
      {
          id: 7,
          turn: ''
      },
      {
          id: 8,
          turn: ''
      },
      {
          id: 9,
          turn: ''
      }
  ])

  const [winner, setWinner] = useState('');

  function restartGame() {
    setPosition([{
        id: 1,
        turn: ''
    },
    {
        id: 2,
        turn: ''
    },
    {
        id: 3,
        turn: ''
    },
    {
        id: 4,
        turn: ''
    },
    {
        id: 5,
        turn: ''
    },
    {
        id: 6,
        turn: ''
    },
    {
        id: 7,
        turn: ''
    },
    {
        id: 8,
        turn: ''
    },
    {
        id: 9,
        turn: ''
    }])

    setTurn(false)

    setWinner('')
}

  useEffect(() => {
      var i;
      var a = 1;

      for (i in position) {
          if (position[i].turn != '') {
              a++
          }
      }

      if (a == 10) {
          setWinner('Deu velha!')
      }

      if (
          (position[0].turn === position[1].turn && position[1].turn === position[2].turn) ||
          (position[0].turn === position[3].turn && position[3].turn === position[6].turn) ||
          (position[0].turn === position[4].turn && position[4].turn === position[8].turn)
      ) {
          if (position[0].turn != '') {
              setWinner('O ' + position[0].turn + ' venceu!')
          }
      }

      if (
          (position[3].turn === position[4].turn && position[4].turn === position[5].turn)
      ) {
          if (position[3].turn != '') {
              setWinner('O ' + position[3].turn + ' venceu!')
          }
      }

      if (
          (position[6].turn === position[7].turn && position[7].turn === position[8].turn)
      ) {
          if (position[6].turn != '') {
              setWinner('O ' + position[6].turn + ' venceu!')
          }
      }

      if (
          (position[1].turn === position[4].turn && position[4].turn === position[7].turn)
      ) {
          if (position[1].turn != '') {
              setWinner('O ' + position[1].turn + ' venceu!')
          }
      }

      if (
          (position[2].turn === position[5].turn && position[5].turn === position[8].turn) ||
          (position[2].turn === position[4].turn && position[4].turn === position[6].turn)
      ) {
          if (position[2].turn != '') {
              setWinner('O ' + position[2].turn + ' venceu!')
          }
      }

  }, [turn])

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 36, marginBottom: 20}}>Jogo da Velha</Text>
        <Game
        winner={winner}
        turn={turn}
        position={position}
        setTurn={setTurn}></Game>
        <Text style={{fontSize: 24, marginBottom: 20}}>{winner}</Text>
        <Button onPress={restartGame} title={'Reiniciar'} style={styles.button} width={"150"}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
