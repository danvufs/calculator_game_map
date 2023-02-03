import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from '../entities';
import Physics from '../physics';


const INITIAL_POINTS = 0;

export default function App() {
  const [running, setRunning] = useState(false)
  const [gameEngine, setGameEngine] = useState(null)
  const [currentPoints, setCurrentPoints] = useState(INITIAL_POINTS)

  useEffect(() => {
    setRunning(false)
  }, [])

  const handleNewPoint = () => {
    setCurrentPoints(currentPoints + 1);
  };

  const handleGameOver = () => {
    setRunning(false);
    gameEngine.stop();
  };

  const handleGameStart = () => {
    setCurrentPoints(INITIAL_POINTS);
    setRunning(true);
    gameEngine.swap(entities());
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', margin: 20, color: 'blue' }}>{currentPoints}</Text>
      <GameEngine
        ref={(ref) => { setGameEngine(ref) }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          switch (e.type) {
            case 'game_over':
              handleGameOver();
              break;
            case 'new_point':
              handleNewPoint();
              break;
          }
        }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>
      {!running ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{ backgroundColor: 'orange', paddingHorizontal: 30, paddingVertical: 10, marginTop: 20 }}
  onPress={handleGameStart}>
  <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30 }}>
    START GAME
  </Text>
</TouchableOpacity>
        </View> : null}
    </View>
  );
}
