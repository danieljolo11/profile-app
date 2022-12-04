import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from './components/home';
import useAuth from './authProvider';


const StackNavigator = () => {

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();
    const { token } = useAuth();
  
    const isLoggedIn = () => {
      const DrawerNavigator = () => {
        return (
          <Drawer.Navigator
            style={{ flex: 1 }}
            // drawerContent={(props) => <Menu {...props} />}
            initialRouteName="home"
          >
            <Drawer.Screen
              name="home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Drawer.Navigator>
        );
      };
  
      return (
        token && (
          <>
            <Stack.Screen
              name="drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
          </>
        )
      );
    };
  
    // const isNotLoggedIn = () => {
    //   return (
    //     !token && (
    //       <>
    //         <Stack.Screen
    //           name="Login"
    //           component={Login}
    //           options={{ headerShown: false }}
    //         />
    //       </>
    //     )
    //   );
    // };

    
    return (
        <Stack.Navigator>
          {isLoggedIn()}
          {/* {isNotLoggedIn()} */}
        </Stack.Navigator>
      );
    
}

export default StackNavigator