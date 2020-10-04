import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {each} from 'lodash';

import {employeeUpdate, employeeSave} from '../actions';

import EmployeeForm from './EmployeeForm';
import {Card, CardSection, Button} from './common';

const EmployeeEdit = ({employee}) => {
  const dispatch = useDispatch();
  const employeeForm = useSelector((state) => state.employeeForm);
  const {name, phone, shift} = employeeForm;

  useEffect(() => {
    each(employee, (value, prop) => dispatch(employeeUpdate({prop, value})));
  }, [dispatch, employee]);

  const onButtonPress = () =>
    dispatch(employeeSave({name, phone, shift, uid: employee.uid}));

  return (
    <Card>
      <EmployeeForm />
      <CardSection>
        <Button onPress={onButtonPress}>Save Changes</Button>
      </CardSection>
    </Card>
  );
};

export default EmployeeEdit;
