import RNPickerSelect from 'react-native-picker-select';
import { View } from 'react-native';

export const Dropdown = ({ selectedValue, onValueChange }) => {

    return (
        <View>
            <RNPickerSelect
                onValueChange={onValueChange}
                items={[
                    { label: 'ºC para ºF', value: 'ºC para ºF' },
                    { label: 'km/h para mph', value: 'km/h para mph' },
                ]}
                value={selectedValue}
            />
        </View>
    );
};