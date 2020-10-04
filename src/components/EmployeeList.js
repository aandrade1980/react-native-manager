import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native';
import {map} from 'lodash';

import {employeesFetch} from '../actions';

import EmployeeListItem from './EmployeeListItem';

const EmployeeList = () => {
  const employees = useSelector((state) =>
    map(state.employees, (val, uid) => ({...val, uid})),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(employeesFetch());
  }, [dispatch]);

  const renderItem = (item) => {
    return <EmployeeListItem employee={item} />;
  };

  return (
    <FlatList
      data={employees}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={(item) => item.uid}
    />
  );
};

export default EmployeeList;
