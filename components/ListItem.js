import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={style.ListItem}>
      <View style={style.ListItemView}>
        <Text style={style.ListItemText}>{item.text}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  ListItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  ListItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ListItemText: {
    fontSize: 18,
  },
});

export default ListItem;
