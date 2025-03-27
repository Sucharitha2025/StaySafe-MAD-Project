import {ScrollView, StyleSheet} from 'react-native';
import UserItem from './UserItem.js';


const UserList = ({ users, onSelect, onFavourite }) => {

    return (
        <ScrollView style={styles.container}>
            {users.map((user) => (
                <UserItem 
                    key={user.UserID} 
                    user={user} 
                    onSelect={onSelect} 
                    onFavourite={onFavourite} 
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default UserList; 