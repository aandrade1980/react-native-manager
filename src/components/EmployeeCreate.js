import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {employeeCreate, employeeClear} from '../actions';

import {Card, CardSection, Button} from './common';

import EmployeeForm from './EmployeeForm';

const EmployeeCreate = () => {
  const dispatch = useDispatch();
  const employeeForm = useSelector((state) => state.employeeForm);
  const {name, phone, shift = 'Monday'} = employeeForm;

  useEffect(() => {
    dispatch(employeeClear());
  }, [dispatch]);

  const onButtonPress = () => dispatch(employeeCreate({name, phone, shift}));

  return (
    <Card>
      <EmployeeForm />
      <CardSection>
        <Button onPress={onButtonPress}>Create</Button>
      </CardSection>
    </Card>
  );
};

export default EmployeeCreate;
