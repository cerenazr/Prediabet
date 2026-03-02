import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CARD, COLORS } from '../constants/theme';

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    ...CARD,
    backgroundColor: COLORS.white,
  },
});
