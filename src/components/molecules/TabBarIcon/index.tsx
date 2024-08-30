import FontAwesome from '@expo/vector-icons/FontAwesome6';
import { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';

interface TabBarIconType {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}

export const TabBarIcon: FunctionComponent<TabBarIconType> = (props) => {
  return <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;
};

export const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
