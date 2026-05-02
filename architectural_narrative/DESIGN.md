---
name: Architectural Narrative
colors:
  surface: '#121415'
  surface-dim: '#121415'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0e0f'
  surface-container-low: '#1a1c1d'
  surface-container: '#1e2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333536'
  on-surface: '#e2e2e3'
  on-surface-variant: '#c6c6ca'
  inverse-surface: '#e2e2e3'
  inverse-on-surface: '#2f3132'
  outline: '#8f9094'
  outline-variant: '#45474a'
  surface-tint: '#c6c6ca'
  primary: '#c6c6ca'
  on-primary: '#2f3034'
  primary-container: '#121417'
  on-primary-container: '#7d7e82'
  inverse-primary: '#5d5e62'
  secondary: '#b0c9e3'
  on-secondary: '#1a3347'
  secondary-container: '#334b60'
  on-secondary-container: '#a2bbd4'
  tertiary: '#e9c176'
  on-tertiary: '#412d00'
  tertiary-container: '#1d1200'
  on-tertiary-container: '#9b7937'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e6'
  primary-fixed-dim: '#c6c6ca'
  on-primary-fixed: '#1a1c1f'
  on-primary-fixed-variant: '#45474a'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#b0c9e3'
  on-secondary-fixed: '#011d31'
  on-secondary-fixed-variant: '#31495e'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#121415'
  on-background: '#e2e2e3'
  surface-variant: '#333536'
typography:
  display-xl:
    fontFamily: Noto Serif
    fontSize: 80px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  section-padding: 120px
  stack-sm: 16px
  stack-md: 40px
---

## Brand & Style
This design system centers on a "Digital Architectural" aesthetic, blending the permanence of high-end real estate with the fluidity of modern technology. The brand personality is authoritative yet accessible, positioning Gerandy Diaz as a sophisticated advisor. 

The visual style is a hybrid of **Minimalism** and **Glassmorphism**, utilizing heavy whitespace to allow property photography to breathe, while employing translucent layers to suggest depth and modern technical precision. The "Scrollytelling" aspect is driven by scroll-triggered transformations where architectural lines guide the eye from one narrative block to the next, creating an immersive, cinematic experience that feels both high-touch and high-tech.

## Colors
The palette is rooted in a "Midnight Luxe" scheme. Deep Charcoal (#121417) serves as the primary canvas, providing a high-contrast foundation that feels more premium than standard black. Slate Blue (#4A6278) is used for secondary structural elements and interactive states, evoking stability and the "blue hour" of architectural photography. 

Gold (#C5A059) is applied with surgical precision as an accent color for calls to action, high-end designations, and decorative flourishes. Neutrals are kept cool and crisp to maintain a clean, gallery-like atmosphere. Dark mode is the default to emphasize light and shadow, mimicking the experience of viewing a luxury property at dusk.

## Typography
The typographic hierarchy creates a tension between tradition and innovation. **Noto Serif** is used for headlines to convey heritage, literary depth, and the classic elegance of luxury estates. **Manrope** provides a highly legible, balanced foundation for body copy, ensuring professional clarity. 

For technical data—such as square footage, pricing, and coordinates—**Space Grotesk** is introduced. Its geometric, slightly futuristic character reinforces the "technologically advanced" aspect of the brand. Use wide letter spacing for all-caps labels to mimic architectural blueprints.

## Layout & Spacing
The layout utilizes a **fixed 12-column grid** centered within the viewport, but allows for "bleeding" imagery that breaks the grid to create a sense of scale. A generous 120px vertical rhythm between sections facilitates the scrollytelling pace, giving each "chapter" of the property narrative its own dedicated space.

Interactive elements should favor asymmetric placements. Use large, immersive padding within containers to maintain a "gallery" feel. Transitions between layout states should be timed to 600ms with a cubic-bezier ease for a smooth, high-end motion signature.

## Elevation & Depth
Depth is communicated through **Glassmorphism** and **Tonal Layers**. Instead of traditional drop shadows, use background blurs (30px+) on overlays to create a frosted glass effect that allows property photography to remain visible but obscured. 

For cards and interactive modules, use thin, 1px low-contrast outlines in Slate Blue or Gold with a 10% opacity. If shadows are necessary for floating action buttons, they must be "ambient"—highly diffused, large radius (40px), and tinted with the Deep Charcoal base color to avoid a "muddy" appearance.

## Shapes
In alignment with modern architectural principles, this design system utilizes **Sharp (0px)** corners for primary containers, buttons, and imagery. The absence of roundedness communicates precision, structural integrity, and a custom-built feel. 

When a "softer" touch is required for user-facing inputs or tags, use a micro-radius of 2px, but the overwhelming visual language should remain rectilinear and grid-aligned to mimic the silhouettes of contemporary luxury homes.

## Components
### Buttons
Primary buttons are sharp-edged, utilizing a Gold background with Dark Charcoal text. The hover state should involve a "fill-up" animation or a shift to a Slate Blue border. Use "Ghost" variants for secondary actions to maintain the minimalist aesthetic.

### Cards
Property cards should feature full-bleed imagery with a Slate Blue overlay that recedes on hover. Metadata (Price, SqFt) should appear in Space Grotesk labels at the bottom of the card, appearing to be "etched" into the frame.

### Inputs
Search and contact fields are defined by a single bottom border (1px) in Slate Blue. Upon focus, the border transitions to Gold, and the label floats upward using a sophisticated slide animation.

### Interactive "Scrolly" Elements
Include a "Progressive Detail" component: as the user scrolls, a wireframe architectural drawing of a property fills in with color and texture, synchronized with the scroll position.

### Navigation
The navigation bar should be a minimalist "floating" glass element that remains transparent until scroll, at which point it acquires a heavy backdrop blur.