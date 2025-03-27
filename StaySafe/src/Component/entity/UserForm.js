import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import useLoad from '../API/useLoad';
import Icons from '../UI/Icon';
import Form from '../UI/Form';


const defaultUser = {
    UserFirstname: null,
    UserLastname: null,
    UserPhone: null,
    UserUsername: null,
    UserImageURL: null,
    UserStatus: null,
};
  

const UserForm = ({ originalUser, onSubmit, onCancel }) => {

    defaultUser.UserID = Math.floor(100000 + Math.random() * 900000);
    defaultUser.UserImageURL = 
    'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg';  


    const status = [
        { value: 1, label: ' Planned ' },
        { value: 2, label: ' Started ' },
        { value: 3, label: ' Paused ' },
        { value: 4, label: ' Cancelled ' },
        { value: 5, label: ' Completed ' },
        { value: 6, label: ' Panic ' },
    ];

    const [user, setUser] = useState(originalUser || defaultUser);



    const handleChange = (field, value) => setUser( {...user, [field]: value });
    const handleSubmit = () => onSubmit(user); 

    const submitLabel = originalUser ? 'Modify' : 'Add';
    const submitIcon = originalUser ? <Icons.Edit /> : <Icons.Add />;

    return(
        <Form
            onSubmit={handleSubmit}
            onCancel={onCancel}
            submitLabel={submitLabel}
            submitIcon={submitIcon}
        >
          <Form.InputText 
              label='First Name' 
              value={user.UserFirstname}
              onChange={(value) => handleChange('UserFirstname', value)}
            />

            <Form.InputText 
              label='Last Name' 
              value={user.UserLastname}
              onChange={(value) => handleChange('UserLastname', value)}
            />

          <Form.InputText 
              label='Phone Number' 
              value={user.UserPhone}
              onChange={(value) => handleChange('UserPhone', value)}
            />

            <Form.InputText 
              label='Username' 
              value={user.UserUsername}
              onChange={(value) => handleChange('UserUsername', value)}
            />

            <Form.InputText 
              label='Image URL' 
              value={user.UserImageURL}
              onChange={(value) => handleChange('UserImageURL', value)}
            />

            <Form.InputSelect 
              label='Status' 
              value={user.UserStatus}
              onChange={(value) => handleChange('UserStatus', value)}
              prompt='Select your status...'
              options={status}
            />
        </Form>
    );
};

const styles = StyleSheet.create({});

export default UserForm;