import RNPickerSelect from 'react-native-picker-select';
import { View } from 'react-native';

export const Dropdown = ({ placeholder }) => {

    return (
        <View>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'ºC para ºF', value: 'ºC para ºF' },
                    { label: 'km/h para mph', value: 'km/h para mph' },
                ]}
            />
        </View>
    );
};