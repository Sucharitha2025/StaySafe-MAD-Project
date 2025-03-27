import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Icons from './Icon';
import { Button, ButtonTray } from './Button';


const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {

    return (
        <KeyboardAvoidingView style={styles.formContainer}>
            <ScrollView contentContainerStyle={styles.formItems}>{children}</ScrollView>

            <ButtonTray>
                <Button label={submitLabel} icon={submitIcon} onClick={onSubmit} />
                <Button label='Cancel' icon={<Icons.Close />} onClick={onCancel} />
            </ButtonTray>
        </KeyboardAvoidingView>
    );
};

const InputText = ({ label, value, onChange }) => {

    return (
        <View style={styles.item}>
            <Text style={styles.itemLabel}>{label}</Text>
            <TextInput value={value} onChangeText={onChange} style={styles.itemTextInput} />
        </View>

    );
};

const InputSelect = ({ label, value, onChange, prompt, options, isLoading=false }) => {

    const selectListData = options.map((option) => ({
        key: option.value,
        value: option.label,
    }));

    return (
        <View style={styles.item}>
            <Text style={styles.itemLabel}>{label}</Text>

            { isLoading ? (
                <View style={styles.itemLoading}>
                <Text style={styles.itemLoadingText}>Loading records ...</Text>
                </View>
            )   :   (

                <SelectList
                    setSelected={onChange}
                    data={selectListData}
                    placeholder={prompt}
                    defaultOption={selectListData.find((item) => item.key === value)}
                    boxStyles={styles.selectListBoxStyle}
                    dropdownStyles={styles.selectListDropdownStyle}
                />
        )}
        </View>

    );
};

Form.InputText = InputText;
Form.InputSelect = InputSelect;


const styles = StyleSheet.create({


    selectListBoxStyle: {
        height: 50,
        backgroundColor: "whitesmoke",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "lightgrey",
        paddingLeft: 10,
        paddingTop: 15,

    },

    selectListDropdownStyle: {

        borderColor: "lightgrey",
    },
});


export default Form;