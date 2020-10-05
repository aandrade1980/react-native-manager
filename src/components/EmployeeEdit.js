import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {each} from 'lodash';
import Communications from 'react-native-communications';

import {employeeUpdate, employeeSave, employeeDelete} from '../actions';

import EmployeeForm from './EmployeeForm';
import {Card, CardSection, Button, Confirm} from './common';

const EmployeeEdit = ({employee}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const employeeForm = useSelector((state) => state.employeeForm);
  const {name, phone, shift} = employeeForm;

  useEffect(() => {
    each(employee, (value, prop) => dispatch(employeeUpdate({prop, value})));
  }, [dispatch, employee]);

  const onButtonPress = () =>
    dispatch(employeeSave({name, phone, shift, uid: employee.uid}));

  const onTextPress = () =>
    Communications.text(phone, `Your upcoming shift is on ${shift}`);

  const onAccept = () => dispatch(employeeDelete({uid: employee.uid}));

  const onDecline = () => setShowModal(false);

  return (
    <Card>
      <EmployeeForm />
      <CardSection>
        <Button onPress={onButtonPress}>Save Changes</Button>
      </CardSection>
      <CardSection>
        <Button onPress={onTextPress}>Text Schedule</Button>
      </CardSection>
      <CardSection>
        <Button onPress={() => setShowModal(!showModal)}>Fire Employee</Button>
      </CardSection>
      <Confirm visible={showModal} onAccept={onAccept} onDecline={onDecline}>
        Are you sure you want to delete this?
      </Confirm>
    </Card>
  );
};

export default EmployeeEdit;
