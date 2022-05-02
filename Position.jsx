import { TouchableOpacity, Text } from 'react-native';

const Position = ({ position, turn, setTurn, winner }) => {

    function insertPosition() {
        if (winner == '') {
            if (turn === false) {
                if (position.turn === '') {
                    position.turn = 'X'
                    setTurn(!turn)
                }
            } else {
                if (position.turn === '') {
                    position.turn = 'O'
                    setTurn(!turn)
                }
            }
        }
    }

    return <TouchableOpacity style={
        {
            height: 100,
            width: 100,
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderLeftWidth: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
        onPress={insertPosition}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{position.turn}</Text>
    </TouchableOpacity >
}
export default Position;