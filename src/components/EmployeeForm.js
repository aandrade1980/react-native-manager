import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

import {employeeUpdate} from '../actions';

import {CardSection, Input} from './common';

const EmployeeForm = () => {
  const employeeForm = useSelector((state) => state.employeeForm);
  const dispatch = useDispatch();

  const {name, phone, shift} = employeeForm;
  return (
    <View>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={name}
          onChangeText={(value) =>
            dispatch(employeeUpdate({prop: 'name', value}))
          }
        />
      </CardSection>
      <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
          value={phone}
          onChangeText={(value) =>
            dispatch(employeeUpdate({prop: 'phone', value}))
          }
        />
      </CardSection>
      <CardSection style={styles.pickerCardSectionStyle}>
        <Text style={styles.pickerLabelStyle}>Shift</Text>
        <Picker
          selectedValue={shift}
          style={styles.pickerStyle}
          onValueChange={(value) =>
            dispatch(employeeUpdate({prop: 'shift', value}))
          }>
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerStyle: {flex: 2},
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    alignSelf: 'center',
  },
  pickerCardSectionStyle: {flexDirection: 'row'},
});

export default EmployeeForm;
