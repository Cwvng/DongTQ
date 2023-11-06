import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import {Colors} from '../../utils/Colors';
import {Themes} from '../../assets/themes';
import Post4 from '../../assets/images/post4.jpeg';

const AddFriendRequest = () => {
  return (
    <View
      style={{
        ...styles.requestItemWrapper,
        marginTop: 12,
        position: 'relative',
      }}>
      <Text style={styles.time}>2 năm</Text>
      <View style={styles.avatar}>
        <Image style={styles.avatarImg} source={Post4} />
      </View>
      <View>
        <Text style={styles.userName}>Hiền Ngô</Text>
        <View style={{flexDirection: 'row', marginTop: 4}}>
          <View style={styles.commonUserAvatar}>
            <Image style={styles.commonUserAvatarImg} source={Post4} />
          </View>
          <View style={{...styles.commonUserAvatar, marginLeft: -8}}>
            <Image style={styles.commonUserAvatarImg} source={Post4} />
          </View>
          <Text style={styles.numOfCommonUser}>56 bạn chung</Text>
        </View>
        <View
          style={{
            ...styles.requestItemWrapper,
            marginTop: 8,
          }}>
          <TouchableHighlight
            style={{
              ...styles.buttonCtl,
              backgroundColor: Colors.primaryColor,
            }}>
            <Text style={styles.acceptText}>Chấp nhận</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              ...styles.buttonCtl,
              backgroundColor: Colors.lightgrey,
            }}>
            <Text style={styles.removeText}>Xóa</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    padding: 12,
  },
  title: {
    fontSize: 24,
    color: Colors.black,
    fontWeight: '700',
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
    marginHorizontal: 12,
    borderBottomWidth: 1,
    paddingBottom: 12,
    borderBottomColor: Colors.borderGrey,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
  buttonWrapper: {
    backgroundColor: Colors.lightgrey,
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 12,
  },
  requestTitle: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  requestText: {
    fontWeight: '500',
    color: Colors.black,
    fontSize: 20,
  },
  numOfRequests: {
    color: Themes.COLORS.red,
  },
  viewAllBtn: {
    fontSize: 16,
    color: Colors.primaryColor,
    fontWeight: '500',
  },
  requestItemWrapper: {
    flexDirection: 'row',
    gap: 12,
  },
  avatar: {
    height: 100,
    width: 100,
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
  commonUserAvatar: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 10,
  },
  commonUserAvatarImg: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  buttonCtl: {
    padding: 8,
    borderRadius: 8,
    width: '40%',
  },
  acceptText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  removeText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  time: {
    position: 'absolute',
    right: 0,
    top: 4,
  },
  numOfCommonUser: {
    marginLeft: 8,
    color: Colors.grey,
  },
});
export default AddFriendRequest;
