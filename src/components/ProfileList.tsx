/* eslint-disable react-native/no-inline-styles */
import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import  Colors  from '../assets/colors/index';
import SvgIcons from './SvgIcon';
import { NormalText } from './TextStyles';
import { responsiveHeight, responsiveWidth } from '../helper/responsive';
interface ProfileListProps {
  icon1?: string,
  title: string,
  icon2: string,
  isRightIcon?: boolean,
  isLeftIcon?: boolean,
  isLanguage?:boolean;
}

const ProfileList: React.FC<ProfileListProps> = ({ icon1, title, icon2, isLeftIcon = true, isRightIcon = true,isLanguage=false }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveHeight(2) }}>
        {isLeftIcon && (
          <TouchableOpacity>
            <SvgIcons xml={icon1} height={20} width={20} />
          </TouchableOpacity>
        )}
        <NormalText color={Colors.white} title={title} />
      </View>
      {isRightIcon ? (<TouchableOpacity style={{flexDirection:'row',alignItems:'center',gap:responsiveHeight(2)}}>
        {isLanguage && (
          <NormalText title="English" color="#5E6272"/>
        )}
        <SvgIcons xml={icon2} height={18} width={18} />
      </TouchableOpacity>) : (<View style={{ backgroundColor: Colors.orange, height: responsiveHeight(4), width: responsiveWidth(7.5), alignItems: 'center', justifyContent: 'center', borderRadius: responsiveHeight(4) }}>
        <NormalText title="2" color={Colors.white} />
      </View>)}
    </TouchableOpacity>
  );
};

export const HR = () => {
  return (
    <View style={{ height: 1.5, width: '100%', backgroundColor: Colors.white }} />
  );
};

export default ProfileList;
