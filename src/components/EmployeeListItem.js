import React from 'react';
import {Text, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {CardSection} from './common';

const EmployeeListItem = ({employee}) => {
  const {name} = employee;

  const onRowPress = () => Actions.employeeEdit({employee});

  return (
    <TouchableWithoutFeedback onPress={onRowPress}>
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>{name}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default EmployeeListItem;
