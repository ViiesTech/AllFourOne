/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import BackArrowIcon from './BackArrowIcon';
import DotsVerticalIcon from './VerticalDotsIcon';
import { useNavigation } from '@react-navigation/native';
interface WalletHeaderProps {
  title: string,
  isRightIcon?: boolean,
  rightIconName?: string,
  flex?: number,
  justify?: string,
}
const WalletHeader: React.FC<WalletHeaderProps> = ({ title, isRightIcon, justify, flex }) => {
  const navigation = useNavigation()
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 20, flexDirection: 'row', justifyContent: isRightIcon ? 'space-between' : null, alignItems: 'center' }}>
      <TouchableOpacity onPress={()=> navigation.goBack()} style={{ justifyContent: justify, flex: flex }}>
      <BackArrowIcon width={15} height={15} color="white" />
      </TouchableOpacity>
      <Text style={{fontSize: 25, color: 'white'}}>{title}</Text>
      {isRightIcon && (
        <TouchableOpacity style={{}}>
          <DotsVerticalIcon height={23} width={23} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default WalletHeader;
