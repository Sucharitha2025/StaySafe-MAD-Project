import { StyleSheet, Text, View} from 'react-native';
import Selector from '../UI/Selector';
import Favourite from '../UI/Favourite';

const UserItem = ({ user, onSelect, onFavourite }) => {

    const handleSelect = () => onSelect(user);
    const handleFavourite = () => onFavourite(user);

    return(
        <Selector onPress={handleSelect} pressedStyle={styles.pressedItem}>
            <View style={styles.item}>
                <Favourite isFavourite={user.UserFavourite} onSelect={handleFavourite} />
                <Text style={styles.text}>
                    {user.UserFirstname} {user.UserLastname} 
                </Text>
            </View>
        </Selector>
    );
};

const styles = StyleSheet.create({
    item: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        paddingLeft: 10,
    },
    pressedItem: {
        backgroundColor: 'azure',
    },
});

export default UserItem;