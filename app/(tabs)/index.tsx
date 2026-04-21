import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { colors, fonts, spacing, radius } from '../../src/theme';

export default function InicioScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>Olá, Usuário</Text>
      <Text style={styles.subtitle}>Seu resumo financeiro</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo disponível</Text>
        <Text style={styles.balanceValue}>R$ 0,00</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    paddingTop: spacing.xxl,
  },
  greeting: {
    fontFamily: fonts.displayBold,
    fontSize: 28,
    color: colors.text,
  },
  subtitle: {
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.muted,
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
  },
  balanceCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  balanceLabel: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.muted,
  },
  balanceValue: {
    fontFamily: fonts.displayBold,
    fontSize: 36,
    color: colors.neon,
    marginTop: spacing.xs,
  },
});
