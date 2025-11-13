type Weight = 'normal' | 'bold' | 'semibold' | 'medium';

export function getFontFamily(weight: Weight): string {
  switch (weight) {
    case 'bold':
      return 'Poppins_700Bold';
    case 'semibold':
      return 'Poppins_600SemiBold';
    case 'medium':
      return 'Poppins_500Medium';
    default:
      return 'Poppins_400Regular';
  }
}
