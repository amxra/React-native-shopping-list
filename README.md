# React-native-shopping-list

Setting up a react native app

'react-native init appName' : to initialise a react-native app



# React Native Commands

1. "react-native run-ios" to fire up IOS app

2. "react-native run-android" to fire up android app

# Extras

* sudo npm i -g react-native-cli : Install react-native-cli

* "open -a simulator" : CLI command to open ios simulator

* 'npm i react-native-vector-icons' to access icons, install in project

* Link any assest installed, e.g for linking vector icons 'react-native link react-native-vector-icons'

* npm i uuid , for randomised id when needed

# Setting up react router for native app

1. Run 'npm i react-router-native' to install react router. 
2. Import { Native Router } into app.js and wrap all component in app with it.
3. Import { Route } from react-router-native into app.js and create routes e.g <Route  exact path="/" component={Entries} />
4. Import { Link } from 'react-router-native' into nave and create links e.g <Link to="/" underlayColor="#f0f4f7"></Link>

# Setting fixed footer to bottom of screen 
  * Set container to flex:1
  * Set footer to display: "relative"
  * Wrap rest of page content in <ScrollView> native container 
