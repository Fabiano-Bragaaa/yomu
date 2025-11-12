type Weight = 'normal' | 'bold' | 'semibold' | 'medium';

/**
 * Retorna a família de fonte apropriada baseada em se é título e o peso
 * Você pode personalizar isso para usar suas fontes customizadas
 */
export function getFontFamily(
  isTitle?: boolean,
  _weight: Weight = 'normal'
): string | undefined {
  // Se você tiver fontes customizadas, pode mapear aqui
  // Por exemplo:
  // if (isTitle) {
  //   switch (weight) {
  //     case 'bold':
  //       return 'YourTitleFont-Bold';
  //     case 'semibold':
  //       return 'YourTitleFont-SemiBold';
  //     case 'medium':
  //       return 'YourTitleFont-Medium';
  //     default:
  //       return 'YourTitleFont-Regular';
  //   }
  // }
  //
  // switch (weight) {
  //   case 'bold':
  //     return 'YourBodyFont-Bold';
  //   case 'semibold':
  //     return 'YourBodyFont-SemiBold';
  //   case 'medium':
  //     return 'YourBodyFont-Medium';
  //   default:
  //     return 'YourBodyFont-Regular';
  // }

  // Por enquanto, retorna undefined para usar as fontes padrão do sistema
  return undefined;
}
