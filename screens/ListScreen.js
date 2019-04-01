import * as React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text, TouchableWithoutFeedback, } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons'
import Animated from 'react-native-reanimated';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


const Today = () => (
  <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
              <View style={styles.wrapOne}>
                <Text style={styles.getStartedTitle}>Jeremy Morgan</Text>
                <Text style={styles.getStartedText}>Marketing Executive</Text>
                <Text style={styles.getStartedText}>ACME Corp, LA</Text>
              </View>
              <View style={styles.wrapTwo}>
                <Ionicons name='logo-whatsapp' color='green' size={20} />
                <Ionicons name='md-phone-portrait' color='blue' size={20} />
              </View>
          </View>
          <View style={styles.getStartedContainer}>
              <View style={styles.wrapOne}>
                <Text style={styles.getStartedTitle}>Jeremy Morgan</Text>
                <Text style={styles.getStartedText}>Marketing Executive</Text>
                <Text style={styles.getStartedText}>ACME Corp, LA</Text>
              </View>
              <View style={styles.wrapTwo}>
                <Ionicons name='logo-whatsapp' color='green' size={20} />
                <Ionicons name='md-phone-portrait' color='blue' size={20} />
              </View>
          </View>
          <View style={styles.getStartedContainer}>
              <View style={styles.wrapOne}>
                <Text style={styles.getStartedTitle}>Jeremy Morgan</Text>
                <Text style={styles.getStartedText}>Marketing Executive</Text>
                <Text style={styles.getStartedText}>ACME Corp, LA</Text>
              </View>
              <View style={styles.wrapTwo}>
                <Ionicons name='logo-whatsapp' color='green' size={20} />
                <Ionicons name='md-phone-portrait' color='blue' size={20} />
              </View>
          </View>
          <View style={styles.getStartedContainer}>
              <View style={styles.wrapOne}>
                <Text style={styles.getStartedTitle}>Jeremy Morgan</Text>
                <Text style={styles.getStartedText}>Marketing Executive</Text>
                <Text style={styles.getStartedText}>ACME Corp, LA</Text>
              </View>
              <View style={styles.wrapTwo}>
                <Ionicons name='logo-whatsapp' color='green' size={20} />
                <Ionicons name='md-phone-portrait' color='blue' size={20} />
              </View>
          </View>
          <View style={styles.getStartedContainer}>
              <View style={styles.wrapOne}>
                <Text style={styles.getStartedTitle}>Jeremy Morgan</Text>
                <Text style={styles.getStartedText}>Marketing Executive</Text>
                <Text style={styles.getStartedText}>ACME Corp, LA</Text>
              </View>
              <View style={styles.wrapTwo}>
                <Ionicons name='logo-whatsapp' color='green' size={20} />
                <Ionicons name='md-phone-portrait' color='blue' size={20} />
              </View>
          </View>
        </ScrollView>
      </View>
);
const Tomorrow = () => (
  <View style={styles.scene} />
);
const ThisWeek = () => (
  <View style={styles.scene} />
);
const Monday = () => (
  <View style={styles.scene} />
);
export default class TabViewExample extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
  state = {
    index: 0,
    routes: [
      { key: 'today', title: 'Today' },
      { key: 'tomorrow', title: 'Tomorrow' },
      { key: 'thisWeek', title: 'This Week' },
      { key: 'monday', title: 'Monday' },
    ],
  };
 _renderItem = ({ navigationState, position }) => ({ route, index }) => {
    const inputRange = navigationState.routes.map((x, i) => i);

    const activeOpacity = Animated.interpolate(position, {
      inputRange,
      outputRange: inputRange.map(i => (i === index ? 1 : 0)),
    });
    const inactiveOpacity = Animated.interpolate(position, {
      inputRange,
      outputRange: inputRange.map(i => (i === index ? 0 : 1)),
    });

    return (
      <View style={styles.tab}>
        <Animated.View style={[styles.item, { opacity: inactiveOpacity }]}>
          <Ionicons
            name={route.icon}
            size={26}
            style={[styles.icon, styles.inactive]}
          />
          <Text style={[styles.label, styles.inactive]}>{route.title}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.item, styles.activeItem, { opacity: activeOpacity }]}
        >
          <Text style={[styles.label, styles.active]}>{route.title}</Text>
          <View style={styles.border} />
        </Animated.View>
      </View>
    );
  };
  _renderTabBar = props => (
    <View style={styles.tabbar}>
      {props.navigationState.routes.map((route, index) => {
        return (
          <TouchableWithoutFeedback
            key={route.key}
            onPress={() => props.jumpTo(route.key)}
          >
            {this._renderItem(props)({ route, index })}
            
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
  _renderScene = SceneMap({
    today: Today,
    tomorrow: Tomorrow,
    thisWeek: ThisWeek,
    monday: Monday,
  });

  render() {
    return (
   <View style={{ flex: 1}}>
     <View style={styles.header}>
      <Ionicons name='md-alarm' size={20} />
      <Text style={styles.headerText}>Totla Leads</Text>
      <Menu
          ref={this.setMenuRef}
          button={<Text onPress={this.showMenu}>
          <Ionicons name='md-list' size={20} />
          </Text>}
        >
          <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
          <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
        </Menu>
     </View>
     <TabView
      style={this.props.style}
      navigationState={this.state}
      renderTabBar={this._renderTabBar}
      renderScene={this._renderScene}
      onIndexChange={index => this.setState({ index })}
      initialLayout={{ width: Dimensions.get('window').width }}
    />
   </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 25
  },
  headerText: {
    fontSize: 16,
    color: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.1
  },
  wrapOne: {
    width: '70%',
  },
  wrapTwo: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '30%',
    marginTop: 10,
  },
  getStartedTitle: {
    fontSize: 16,
    color: '#000',
    lineHeight: 38,
    fontWeight: 'bold',
  },
  getStartedText: {
    fontSize: 12,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 20,
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4.5,
  },
  activeItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    bottom: -22
  },
  border: {
    borderWidth: 0.5,
    width: '35%',
    borderColor: '#000',
    borderStyle: 'solid',
    marginTop: 10,
  },
  active: {
    color: '#000',
    fontWeight: 'bold',
    bottom: -12
  },
  inactive: {
    color: '#939393',
  },
  label: {
    fontSize: 16,
    marginTop: 3,
    marginBottom: 10,
  },
});