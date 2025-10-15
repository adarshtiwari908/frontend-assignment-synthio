# Docs

## Step 1: Understanding the Task

The task was to build the given Figma design into a **pixel-perfect, fully responsive** frontend application.  
It also required adding a **simple authentication screen** before accessing the main screen.

The Figma design provided:
[https://www.figma.com/design/O21In0warMXgWjv1m6WxQr/Untitled?node-id=0-1&m=dev&t=ejhR4ZBBf4hY4WF9-1](https://www.figma.com/design/O21In0warMXgWjv1m6WxQr/Untitled?node-id=0-1&m=dev&t=ejhR4ZBBf4hY4WF9-1)

---

## Step 2: Setting Up the Project

I used **React + TypeScript** with **Vite** as the build tool.  
For styling, I used **Tailwind CSS** and **shadcn/ui** for prebuilt, accessible, and clean UI components.

The setup followed the official installation process from shadcn’s documentation:  
[https://ui.shadcn.com/docs/installation/vite](https://ui.shadcn.com/docs/installation/vite)

## Step 3: Structuring the Layout

Before starting with UI implementation, I structured the folder layout for scalability and clarity.

## Step 4: Building the Header (Desktop Header)

The first component I built was Header.tsx.
It includes:

The logo (imported via a single component for reusability)

Navigation layout (aligned pixel-perfect with Figma)

Flexbox and Tailwind utilities for responsiveness

The header was tested for responsiveness across breakpoints and matches Figma spacing precisely.

## Step 5: Building the Main Body Section

After the header, I moved to the main content section.
This part includes three key components:

CardCarousel.tsx – Displays horizontally scrollable cards.

AgendaGoals.tsx – Lists agenda and goals as per Figma design.

HeroSection.tsx – Acts as a wrapper that includes both CardCarousel and AgendaGoals.

I created a responsive container to maintain consistent spacing and alignment.

Inside that container, both the card carousel and agenda goals sections were placed and styled using Tailwind utilities for adaptive layouts.

All elements were adjusted visually until the spacing, typography, and positioning matched the Figma layout exactly — making the design pixel-perfect.

## Step 6: Adding Authentication

Once the main layout was completed, I implemented authentication functionality.

Implementation Details:

Built a new component AuthScreen.tsx for the login/register interface.

Used shadcn UI components (Card, Input, Label, Button) to create a clean form.

Added protected routes using React Router DOM so users can only access the main dashboard after logging in.

Basic client-side auth simulation is done for demo purposes (no backend required).

Maintained global authentication state via React context.

The flow:

User lands on Auth screen → enters credentials.

On submit → navigates to main page.

If unauthenticated → redirected back to Auth screen.

## Step 7: Making It Responsive

Responsiveness was handled entirely via Tailwind CSS.

Key approaches used:

Flexbox and grid utilities for adaptive layout.

Consistent container widths (max-w-*, mx-auto).

Dynamic padding and gap adjustments for mobile, tablet, and desktop breakpoints.

After implementing responsiveness, I verified it visually in Chrome DevTools for all breakpoints.

## Step 8: Testing and Refinements

Verified component hierarchy and reusability.

Ensured all font sizes, padding, and margins match the design system.

Checked color contrast and accessibility of text.

Tested behavior on multiple devices to ensure pixel consistency.
