import React, {FunctionComponent} from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {throttle} from 'lodash';

interface StyledTouchableProps extends TouchableOpacityProps {
  customStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;

  onPress?(): void;

  onPressIn?(): void;

  onPressOut?(): void;

  onLongPress?(): void;

  children?: any;
  throttleTime?: number;
}

const configThrottle = {trailing: false};
const onPressDefault = () => null;

const StyledTouchable: FunctionComponent<StyledTouchableProps> = (
  props: StyledTouchableProps,
) => {
  const {
    customStyle,
    disabled,
    children,
    style,
    throttleTime = 1000,
    onPress = onPressDefault,
  } = props;
  if (style) {
  }
  const handlePress = throttle(onPress, throttleTime, configThrottle);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={disabled}
      style={customStyle}
      {...props}
      onPress={handlePress}>
      {children}
    </TouchableOpacity>
  );
};

export default StyledTouchable;
