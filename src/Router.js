import React from 'react';
import {StyleSheet} from 'react-native';
import {Scene, Router, Stack, Actions} from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import Employeelist from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            titleStyle={styles.sceneStyle}
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={Employeelist}
            titleStyle={styles.sceneStyle}
            title="Employees"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            titleStyle={styles.sceneStyle}
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
            titleStyle={styles.sceneStyle}
          />
        </Scene>
      </Stack>
    </Router>
  );
};

const styles = StyleSheet.create({
  sceneStyle: {
    textAlign: 'center',
    flex: 1,
  },
});

export default RouterComponent;
