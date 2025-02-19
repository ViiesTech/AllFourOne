import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AuthContainer from '../../components/AuthContainer'
import Header from '../../components/Header'
import { add, call, mail, notification, profile } from '../../assets/icons'
import { responsiveHeight, responsiveWidth } from '../../helper/responsive'
import InputField from '../../components/InputField'
import MyIconButton from '../../components/MyIconButton'
import images from '../../assets/images/Index'
import colors from '../../assets/colors'
import SVGXml from '../../components/SVGIcons'

const EditProfile = () => {
  return (
    <AuthContainer>
      <View style={styles.subContainer}>
        <Header isRightIcon title='Edit Profile' rightIconName={notification} />
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={images.user} style={styles.imageStyle} />
          <View style={styles.plusView}>
                <SVGXml height={'15'} width={'15'} icon={add} />
          </View>

        </TouchableOpacity>
        <View style={styles.inputFieldContainer}>
          <InputField leftIcon={profile} inputContainer={styles.inputStyle} placeholder='Tanya Myroniuk' heading='Full Name' />
          <InputField leftIcon={mail} inputContainer={styles.inputStyle} placeholder='tanyamyroniuk@gmail.com' heading='Email Address' />
          <InputField leftIcon={call} inputContainer={styles.inputStyle} placeholder='+8801712663389' heading='Phone Number' />
          <View style={styles.inputWrapper}>
            <InputField inputStyle={{ alignSelf: 'center' }} placeholder='28' heading='Birth Date' inputContainer={styles.inputStyle2} />
            <InputField inputStyle={{ alignSelf: 'center' }} placeholder='September' inputContainer={styles.inputStyle2} />
            <InputField inputStyle={{ alignSelf: 'center' }} placeholder='2000' inputContainer={styles.inputStyle2} />
          </View>
          <MyIconButton label='Continue' buttonStyle={{ alignSelf: 'center', marginTop: responsiveHeight(10) }} />
        </View>
      </View>
    </AuthContainer>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  subContainer: {
    padding: responsiveHeight(2.5)
  },
  imageContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: responsiveHeight(6),
    marginBottom: responsiveHeight(2),
  },
  imageStyle: {
    height: responsiveHeight(14),
    width: responsiveHeight(14),
    borderRadius: 100,
  },
  inputFieldContainer: {
    paddingTop: responsiveHeight(0)
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    marginBottom: responsiveHeight(4),
  },
  inputStyle2: {
    width: responsiveWidth(20),
  },
  plusView: {
    borderRadius: 100,
    backgroundColor: colors.text_color,
    height: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 3,
    width: responsiveHeight(4)

  }
})