import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

export const grey = {
  0: '#FFFFFF',
  100: '#F5F7FA',
  200: '#EAEEF3',
  300: '#D5DAE2',
  400: '#A3AEBF',
  500: '#6B778C',
  600: '#4A5568',
  700: '#2D3748',
  800: '#1A202C',
  900: '#171923',
};

export const primary = {
  lighter: '#EBF5FF',
  light: '#90CDF4',
  main: '#3182CE',  // Construction blue - strong and professional
  dark: '#2C5282',
  darker: '#1A365D',
  contrastText: '#FFFFFF',
};

export const secondary = {
  lighter: '#FFF5E6',
  light: '#F6AD55',  // Construction orange - for accents
  main: '#DD6B20',   // Safety orange tone
  dark: '#9C4221',
  darker: '#652B19',
  contrastText: '#FFFFFF',
};

export const info = {
  lighter: '#EBF8FF',
  light: '#63B3ED',
  main: '#4299E1',   // Bright blue for information
  dark: '#3182CE',
  darker: '#2B6CB0',
  contrastText: '#FFFFFF',
};

export const success = {
  lighter: '#F0FFF4',
  light: '#68D391',  // Fresh green for success
  main: '#38A169',   // Nature/construction green
  dark: '#2F855A',
  darker: '#276749',
  contrastText: '#FFFFFF',
};

export const warning = {
  lighter: '#FFFAF0',
  light: '#F6AD55',  // Caution yellow-orange
  main: '#ED8936',   // Warning orange
  dark: '#DD6B20',
  darker: '#C05621',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFF5F5',
  light: '#FC8181',  // Alert red
  main: '#E53E3E',   // Danger red
  dark: '#C53030',
  darker: '#9B2C2C',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

// Construction-specific colors
export const construction = {
  cement: '#F5F5F5',       // Light cement color
  concrete: '#A3A3A3',     // Medium concrete
  steel: '#4A5568',        // Steel gray
  safetyYellow: '#FFD700', // Safety yellow
  safetyRed: '#FF0000',    // Safety red
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(primary.main, 0.16),  // Use primary color for selection
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(primary.main, 0.24),     // Use primary color for focus
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  construction, // Added construction-specific colors
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette() {
  return {
    ...base,
    mode: 'light',
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: grey[100],
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: primary.main, // Use primary color for active states
    },
  };
}