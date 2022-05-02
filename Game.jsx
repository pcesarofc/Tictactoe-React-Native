import { View, StyleSheet } from 'react-native';
import Position from "./Position";

const Game = ({ position, turn, winner, setTurn }) => {

    return <View style={styles.game}>
        {position.map((position) => (<Position
            position={position}
            turn={turn}
            setTurn={setTurn}
            winner={winner}
        />))}
    </View>
}

const styles = StyleSheet.create({
    game: {
        width: 300,
        height: 300,
        flexDirection: 'row',
        flexWrap: "wrap",
        backgroundColor: "#AFE8FF",
        marginBottom: 20
    }
});
export default Game;