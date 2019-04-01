import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

export default class HomeScreen extends React.Component {
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

  render() {
    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <Ionicons name='md-alarm' size={20} />
      <Text style={styles.headerText}>Dashboard</Text>
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
     <View style={styles.content}>
        <Text style={styles.contentText}>
          Hey Kishore, It's Monday and you have 4 new calls to attend to.
        </Text>
        <Text style={styles.contentTitle}>
        $4,912
        </Text>
        <Text style={styles.contentMiniText}>
          75% Sales Goal Achieved
        </Text>
      <View style={styles.graphContainer}>
       <View>
       <View style={styles.graph}>
       <Ionicons name='md-person' size={22} color='rgb(134, 65, 244)' />
       <Text style={styles.graphTitle}>
           9,912
       </Text>
       </View>
       <Text style={styles.graphText}>
           Leads
       </Text>
       </View>
        <View>
        <View style={styles.graph}>
        <Ionicons name='md-share-alt' size={22} color='rgb(134, 65, 244)' />
        <Text style={styles.graphTitle}>
            2,581
        </Text>
        </View>
        <Text style={styles.graphText}>
            Conversions
        </Text>
        </View>
      </View>
      </View>
      <AreaChart
      style={{ height: 300 }}
      data={ data }
      contentInset={{ top: 30, bottom: 30 }}
      curve={ shape.curveNatural }
      svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
  >
      <Grid/>
  </AreaChart>
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
    backgroundColor: '#fff',
  },
  content: {
    marginHorizontal: 30,
    marginVertical: 40
  },
  contentText: {
    fontSize: 17,
    fontWeight: 'normal',
  },
  contentTitle: {
   marginVertical: 10,
   fontSize: 35,
   fontWeight: 'bold',
  },
  contentMiniText: {
    fontSize: 10,
    color: 'rgba(96,100,109, 1)',
  },
  graphContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  graph: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 8,
  },
  graphTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  graphText: {
    fontSize: 10,
    color: 'rgba(96,100,109, 1)',
    marginLeft: 27,
  },
});
