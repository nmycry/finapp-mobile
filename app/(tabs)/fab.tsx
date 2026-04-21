import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, spacing, radius } from '../../src/theme';

const actions = [
  { icon: 'arrow-up-circle' as const, label: 'Despesa', color: colors.danger },
  { icon: 'arrow-down-circle' as const, label: 'Receita', color: colors.neon },
  { icon: 'swap-horizontal' as const, label: 'Transferência', color: colors.neon2 },
];

export default function FABScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova transação</Text>
      <View style={styles.actions}>
        {actions.map((action) => (
          <TouchableOpacity key={action.label} style={styles.actionCard} activeOpacity={0.8}>
            <Ionicons name={action.icon} size={32} color={action.color} />
            <Text style={[styles.actionLabel, { color: action.color }]}>{action.label}</Text>
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
  actions: {
    gap: spacing.md,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  actionLabel: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 16,
  },
});
