export const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1400
} as const

export type Breakpoint = keyof typeof breakpoints

