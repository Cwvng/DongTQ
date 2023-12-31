import {Image, StyleSheet, View} from 'react-native';
import FacebookLogo from '../assets/images/fblogo.png';
import {Colors} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {APP_ROUTE} from '../navigation/config/routes';
import VectorIcon from '../utils/VectorIcon';

const Header = () => {
  const {navigate} = useNavigation();
  const onPressSearch = () => {
    navigate(APP_ROUTE.SEARCH);
  };
  return (
    <View style={styles.container}>
      <Image source={FacebookLogo} style={styles.fbLogoStyle} />
      <View style={styles.headerIcons}>
        <View style={styles.searchBg}>
          <VectorIcon
            name="search"
            type="FontAwesome5"
            size={19}
            color={Colors.grey}
            onPress={onPressSearch}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fbLogoStyle: {
    height: 25,
    width: 130,
  },
  searchBg: {
    backgroundColor: Colors.lightgrey,
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  container: {
    backgroundColor: Colors.white,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
  },
});

export default Header;
