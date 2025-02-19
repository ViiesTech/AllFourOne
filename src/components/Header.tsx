import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { BoldText } from '../components/TextStyles';
import SVGXml from './SVGIcons';
import { menu } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';
interface HeaderProps {
  title: string,
  isRightIcon?: boolean,
  rightIconName?: string,
  flex?: number,
  justify?: string,
}
const Header: React.FC<HeaderProps> = ({ title, isRightIcon, justify, flex, rightIconName }) => {
  const navigation = useNavigation()
  return (
    <View style={{ flexDirection: 'row', justifyContent: isRightIcon ? 'space-between' : null, alignItems: 'center' , padding: 20, }}>
      <TouchableOpacity onPress={()=> navigation.openDrawer()} style={{ justifyContent: justify, flex: flex }}>
        <SVGXml icon={menu} height={20} width={20} />
      </TouchableOpacity>
      <BoldText title={title} fontSize={2.5} fontWeight="600" color="#fff" />
      {isRightIcon && (
        <TouchableOpacity style={{}}>
          <SVGXml icon={rightIconName} height={20} width={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
