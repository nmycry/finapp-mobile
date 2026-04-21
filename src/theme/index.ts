export const colors = {
  background: '#080C10',
  card: '#0D1218',
  neon: '#00FF87',
  neon2: '#60EFFF',
  danger: '#FF6060',
  text: '#FFFFFF',
  muted: 'rgba(255,255,255,0.35)',
} as const;

export const fonts = {
  body: 'SpaceGrotesk_400Regular',
  bodyMedium: 'SpaceGrotesk_500Medium',
  bodySemiBold: 'SpaceGrotesk_600SemiBold',
  bodyBold: 'SpaceGrotesk_700Bold',
  display: 'Syne_400Regular',
  displayMedium: 'Syne_500Medium',
  displayBold: 'Syne_700Bold',
  displayExtraBold: 'Syne_800ExtraBold',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export type Colors = typeof colors;
export type Fonts = typeof fonts;
