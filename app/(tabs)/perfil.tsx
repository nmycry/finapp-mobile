import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, spacing, radius } from '../../src/theme';

const menuItems = [
  { icon: 'person-outline' as const, label: 'Minha conta' },
  { icon: 'shield-checkmark-outline' as const, label: 'Segurança' },
  { icon: 'notifications-outline' as const, label: 'Notificações' },
  { icon: 'color-palette-outline' as const, label: 'Aparência' },
  { icon: 'help-circle-outline' as const, label: 'Ajuda' },
  { icon: 'log-out-outline' as const, label: 'Sair', danger: true },
];

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <View style={styles.avatar}>
        <Ionicons name="person" size={40} color={colors.neon} />
      </View>
      <Text style={styles.name}>Usuário</Text>
      <Text style={styles.email}>usuario@email.com</Text>

      <View style={styles.menu}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.label} style={styles.menuItem} activeOpacity={0.7}>
            <Ionicons
              name={item.icon}
              size={20}
              color={item.danger ? colors.danger : colors.muted}
            />
            <Text style={[styles.menuLabel, item.danger && { color: colors.danger }]}>
              {item.label}
            </Text>
            {!item.danger && (
              <Ionicons name="chevron-forward" size={16} color={colors.muted} style={styles.chevron} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    paddingTop: spacing.xxl,
  },
  title: {
    fontFamily: fonts.displayBold,
    fontSize: 24,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: radius.full,
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.neon,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: spacing.sm,
  },
  name: {
    fontFamily: fonts.displayBold,
    fontSize: 20,
    color: colors.text,
    textAlign: 'center',
  },
  email: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.muted,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  menu: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    gap: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.04)',
  },
  menuLabel: {
    flex: 1,
    fontFamily: fonts.bodyMedium,
    fontSize: 15,
    color: colors.text,
  },
  chevron: {
    marginLeft: 'auto',
  },
});
