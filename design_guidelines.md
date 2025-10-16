# Design Guidelines: Arc Browser-Inspired Landing Page

## Design Approach
**Reference-Based Design** - Drawing primary inspiration from Arc Browser's modern, vibrant aesthetic while incorporating contemporary browser/SaaS landing page patterns from Linear, Vercel, and Raycast.

**Core Design Principles:**
- Vibrant, gradient-rich color palette that evokes innovation and modernity
- Product-forward showcase with prominent screenshots and visuals
- Bold, confident typography that commands attention
- Clean, spacious layouts with generous breathing room
- Strategic use of blur effects and modern glass morphism

## Color Palette

**Primary Brand Colors:**
- Primary Purple: 260 85% 65%
- Primary Blue: 220 90% 60%
- Deep Purple: 265 75% 45%
- Bright Accent: 200 95% 55%

**Gradients:**
- Hero Gradient: Linear from 260 85% 65% to 220 90% 60% (purple to blue, diagonal)
- Section Accents: Radial gradients with 260 75% 45% fading to transparent
- Card Hovers: Subtle gradient overlays

**Dark Mode (Primary):**
- Background: 260 15% 8%
- Surface: 260 12% 12%
- Elevated Surface: 260 10% 16%
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 70%

## Typography

**Font Families:**
- Primary: 'Inter' via Google Fonts (headings, UI)
- Secondary: 'Manrope' via Google Fonts (body text)

**Type Scale:**
- Hero Headline: 4xl-6xl (64-96px), font-bold, tracking-tight
- Section Headings: 3xl-4xl (48-64px), font-bold
- Subheadings: xl-2xl (24-32px), font-semibold
- Body Large: lg (18px), font-normal
- Body: base (16px), font-normal
- Caption: sm (14px), font-medium

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12
- Content max-width: max-w-7xl for sections, max-w-4xl for text-heavy content

**Grid System:**
- Hero: Single column, centered, max-w-4xl
- Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Showcase Sections: Alternating 2-column layouts with image/text
- Footer: grid-cols-2 md:grid-cols-4

## Component Library

**Hero Section:**
- Full-width vibrant gradient background (purple to blue diagonal)
- Centered content with max-w-4xl
- Large bold headline with gradient text effect
- Email capture form with inline button (rounded-full, backdrop-blur)
- Tagline/description text below headline
- Height: 85vh minimum
- Subtle animated gradient background

**Navigation:**
- Fixed top navbar with backdrop-blur-lg
- Logo left, navigation links center, CTA button right
- Border bottom with subtle opacity
- Dark theme with white/light text

**Feature Cards:**
- Product screenshots as primary visual (rounded-2xl, shadow-2xl)
- Clean white/elevated dark surface backgrounds
- Icon + Heading + Description pattern
- Hover: slight scale transform and enhanced shadow
- Padding: p-8

**Screenshot Showcase Sections:**
- Large browser window mockups (rounded corners, shadow-2xl)
- Alternating left/right image placement
- Accompanying text: headline + description + optional feature list
- Background: gradient accents or solid with subtle texture
- Full-width or contained within max-w-7xl

**Email Capture Form:**
- Input field with backdrop-blur effect
- Inline submit button (vibrant gradient background)
- Placeholder: "Enter your email..."
- Rounded-full design for modern feel
- Focus state: enhanced glow effect

**Buttons:**
- Primary: Gradient background (purple to blue), white text, rounded-full, px-8 py-4
- Secondary: Transparent with border, white text, rounded-full
- On images: backdrop-blur-md with semi-transparent background
- Size variants: Large (text-lg), Medium (text-base)

**Footer:**
- Multi-column layout (Company, Product, Resources, Legal)
- Social media icons using Heroicons
- Newsletter signup section
- Dark background (darker than main)
- Border top with subtle gradient

## Images

**Hero Section:**
- Large browser window screenshot showcasing Arc's interface (1200x800px minimum)
- Position: Center or slightly offset, with subtle float animation
- Treatment: Rounded-2xl corners, prominent shadow-2xl, slight tilt (rotate-1)

**Feature Showcase Sections (4-6 sections):**
- Browser interface screenshots highlighting specific features
- Tab management visuals
- Customization/theming examples
- Privacy features visualization
- Split view/spaces functionality
- Each image: 800x600px minimum, rounded-xl, shadow-xl

**Placement Strategy:**
- Hero: Large centered browser mockup after headline and email form
- Section 1: Right-aligned image, left text
- Section 2: Left-aligned image, right text
- Section 3: Right-aligned image, left text
- Continue alternating pattern
- All images should have subtle hover scale effect

## Animations

**Minimal but Polished:**
- Gradient background: Slow animated gradient shift on hero
- Scroll reveals: Fade-in with slight Y-translation for sections
- Button hovers: Subtle scale (scale-105)
- Image hovers: Gentle scale (scale-102) and enhanced shadow
- NO complex scroll-triggered animations or parallax effects

## Accessibility

**Dark Mode Implementation:**
- Consistent dark theme throughout (this is Arc's primary brand identity)
- High contrast text: white (#fafafa) on dark backgrounds
- Form inputs: Dark backgrounds (260 10% 16%) with light text
- Focus states: Vibrant purple/blue ring (ring-2 ring-offset-2)
- Sufficient color contrast ratios (WCAG AA minimum)

## Page Structure (7-8 Sections)

1. **Hero**: Gradient background, headline, email form, hero image
2. **Features Grid**: 3-column grid showcasing core features with icons
3. **Showcase 1**: Browsing experience with large screenshot
4. **Showcase 2**: Customization capabilities with visual examples
5. **Showcase 3**: Privacy and security features
6. **Social Proof**: Testimonials or user quotes (2-column)
7. **Final CTA**: Email capture with compelling copy
8. **Footer**: Multi-column navigation, social links, newsletter

**Critical Design Notes:**
- Use Heroicons for all iconography
- Maintain consistent 20-32 vertical spacing between sections
- Every section should feel purposeful and complete
- Gradient backgrounds should be vibrant but not overwhelming
- Screenshots should be the hero of each section, not afterthoughts
- Email capture is primary conversion goal - make it prominent