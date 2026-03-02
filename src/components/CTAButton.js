import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CTA_BUTTON, COLORS } from '../constants/theme';

export default function CTAButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    ...CTA_BUTTON,
  },
  text: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
