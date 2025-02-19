import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {
  CodeField,
  useBlurOnFulfill,
} from 'react-native-confirmation-code-field';
import { responsiveHeight, responsiveWidth } from '../helper/responsive';
import colors from '../assets/colors';

interface inputProps {
  value: string;
  setValue: () => void;
};

const CodeInput = ({ value, setValue }: inputProps) => {
  const ref = useBlurOnFulfill({ value, cellCount: 4 });

  return (
    <CodeField
      ref={ref}
      // {...otherProps}
      caretHidden={false}
      value={value}
      onChangeText={setValue}
      cellCount={4}
      rootStyle={styles.root}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      clearTextOnFocus
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
        // onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol}
        </Text>
      )}
    />
  );
};

export default CodeInput;

const styles = StyleSheet.create({
  cell: {
    width: responsiveHeight(6.5),
    height: responsiveHeight(6.5),
    textAlign: 'center',
    padding: responsiveHeight(0.5),
    fontSize: responsiveHeight(4),
    borderRadius: responsiveHeight(1),
    color: colors.white,
    borderWidth: 0.6,
    borderColor: colors.white
  },
  focusCell: {
    borderColor: colors.white,
  },
  root: {
    marginVertical: responsiveHeight(3),
    alignSelf: 'center',
    width: responsiveWidth(65),
  },
});
