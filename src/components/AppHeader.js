import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/theme';
import { clearUser } from '../storage';

export default function AppHeader({ title, showBack = true }) {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await clearUser();
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.sideBtn}
          onPress={() => navigation.goBack()}
          disabled={!showBack}
        >
          {showBack && <Text style={styles.backArrow}>{'<'}</Text>}
        </TouchableOpacity>

        <Text style={styles.title} numberOfLines={1}>{title}</Text>

        <TouchableOpacity style={styles.sideBtn} onPress={handleLogout}>
          <Text style={styles.logoutIcon}>{'⇥'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 14,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 44,
  },
  sideBtn: {
    width: 36,
    alignItems: 'center',
  },
  backArrow: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '700',
  },
  logoutIcon: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },
  title: {
    flex: 1,
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});
