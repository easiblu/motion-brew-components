# Motion Brew

100 free animated React components for Tailwind CSS v4, built with Motion and GSAP. Each one is a single `.tsx` file you own and can change.

Play with every component live at **[motion-brew.com](https://motion-brew.com)**.

## Add a component

**With your AI agent (MCP).** Connect the Motion Brew MCP server once, then ask in plain words, like "add a hold to delete button". No key needed.

```bash
claude mcp add --transport http motion-brew https://motion-brew.com/mcp
```

Setup for Cursor, VS Code, Codex, Gemini and other clients: [https://motion-brew.com/mcp](https://motion-brew.com/mcp).

**As one file.** Every component in [`components/`](components) runs as pasted. Install its packages, then download it:

```bash
npm i motion clsx tailwind-merge
curl --create-dirs -o components/blur-text.tsx https://motion-brew.com/r/blur-text.tsx
```

Each component page on the site shows its exact install line.

**From npm.**

```bash
npm i motion-brew motion
```

```tsx
import { BlurText } from "motion-brew/blur-text";
```

Add `@source "../node_modules/motion-brew/dist";` under the Tailwind import in your CSS.

## Requirements

React 18 or 19 and Tailwind CSS v4. Some components also use GSAP or Three.js; their files list exactly what they import.

## Components

### Animated React card components

| Component | What it does | Engine |
| --- | --- | --- |
| [Add card](https://motion-brew.com/components/add-card) | An empty state for payments: a white card that asks for a first payment card. | Motion |
| [Aura card](https://motion-brew.com/components/aura-card) | A feature card on a live two colour gradient: a main pool flows in the lower left and a second colour drifts in from the lower right, blending into it under a moving film grain (on the colour only) while the top stays clear for the title and copy. | Motion |
| [Avatar testimonial](https://motion-brew.com/components/avatar-testimonial) | A testimonial card driven by a row of avatars. | Motion |
| [Bill list](https://motion-brew.com/components/bill-list) | A white card of upcoming bills and subscriptions. | Motion |
| [Booking card](https://motion-brew.com/components/booking-card) | A white booking card for a trial class, a demo call or any slot someone reserves. | Motion + GSAP |
| [Brand bridge](https://motion-brew.com/components/brand-bridge) | A feature card for any site or app. | Motion |
| [Column card](https://motion-brew.com/components/column-card) | A tall white card with a small live pill, a headline, a short line of body text and a few big rounded columns standing in a soft gray stage over faint guide lines, each carrying its value inside at the top, with a dot legend and the total in a footer. | Motion |
| [Contact card](https://motion-brew.com/components/contact-card) | A Contact link that lives inside a sentence ("Not just a simple Contact button."), set in the sentence's own size, weight and colour with just an arrow after it. | Motion |
| [Contour feature card](https://motion-brew.com/components/contour-feature-card) | A product feature card: a browser window with a small dashboard rises in front of a live topographic map. | Motion |
| [Decay card](https://motion-brew.com/components/decay-card) | A full-bleed image card with its text laid over the picture. | Motion |
| [Event card](https://motion-brew.com/components/event-card) | A minimal white card with the details of one event: a small kind line over the title, then the date and a time whose clock hands sweep round to the start when the card comes into view. | Motion + GSAP |
| [Flux card](https://motion-brew.com/components/flux-card) | A feature card on a pixelated gradient. | Motion |
| [Globe card](https://motion-brew.com/components/globe-card) | A feature card, for a team or about page or anywhere else, with a dotted 3D globe rising from its bottom edge over a soft colored glow. | Motion + Three.js |
| [Integration hub](https://motion-brew.com/components/integration-hub) | A ring of app tiles wired into one hub in the middle. | Motion |
| [Liquid card](https://motion-brew.com/components/liquid-card) | A tall card with a huge icon bleeding off its right edge, used as a glass container. | Motion + GSAP |
| [Liquid metal card](https://motion-brew.com/components/liquid-metal-card) | A white image card that melts into a second picture under a flood of black liquid metal. | Motion + GSAP |
| [Live gradient card](https://motion-brew.com/components/gradient-card) | A metric card on a live mesh gradient. | Motion |
| [Metal card stack](https://motion-brew.com/components/metal-card-stack) | A stack of metal payment cards that feel like the real thing: brushed metal with a fine grain, bevelled edges that catch the light, a visible card edge underneath, an embossed number and a light sheen that slides across the surface as the front card tilts toward the pointer. | Motion + GSAP |
| [Orbit card](https://motion-brew.com/components/orbit-card) | A feature card for a community, a network or a user count. | Motion |
| [Particle card](https://motion-brew.com/components/particle-card) | A product feature card whose hero visual is made of particles. | Motion |
| [Pixel feature card](https://motion-brew.com/components/pixel-feature-card) | A product feature card: a phone with a small app screen stands in front of a field of dithered pixel clouds. | Motion |
| [Pricing card](https://motion-brew.com/components/pricing-card) | One plan as a white card resting in a soft grey shell, like a print in a mount, with a label strip along the top of the shell. | Motion |
| [Profile card](https://motion-brew.com/components/profile-card) | A white profile card for a creator. | Motion |
| [Reaction card](https://motion-brew.com/components/reaction-card) | A white post card with three reaction buttons, each with its own pop-up of choices in the spirit of a social feed. | Motion |
| [Recap card](https://motion-brew.com/components/recap-card) | A white summary card that reads like a sentence. | Motion |
| [Roadmap card](https://motion-brew.com/components/roadmap-card) | A white card that walks through the phases of a product roadmap like stories. | Motion |
| [Rolling card stack](https://motion-brew.com/components/rolling-card-stack) | A deck of metric cards that rolls forward like a rolodex. | Motion |
| [Score card](https://motion-brew.com/components/score-card) | A white chart card with a big score and a few pill bars. | Motion |
| [Team member card](https://motion-brew.com/components/team-member-card) | A white card for a person on the team. | Motion |
| [Team morph](https://motion-brew.com/components/team-morph) | A presence pill that morphs into a team card. | Motion |
| [Tilt card](https://motion-brew.com/components/tilt-card) | A card that tilts in 3D toward the cursor on a spring, lifts slightly, and catches a glare highlight that slides opposite the tilt. | Motion |
| [Wallet card](https://motion-brew.com/components/wallet-card) | A balance card with a currency switch and quick actions. | Motion |

### Animated React form components

| Component | What it does | Engine |
| --- | --- | --- |
| [AI prompt input](https://motion-brew.com/components/prompt-input) | A white composer for an AI assistant. | Motion + GSAP |
| [Amount slider](https://motion-brew.com/components/amount-slider) | A white card for picking an amount. | Motion |
| [Auth card](https://motion-brew.com/components/auth-card) | One white card for signing in and signing up. | Motion |
| [File drop](https://motion-brew.com/components/file-drop) | A white upload card with a drag and drop zone. | Motion + GSAP |
| [Message composer](https://motion-brew.com/components/message-composer) | A white rich text composer for a chat or a comment thread. | Motion |
| [Morph search](https://motion-brew.com/components/morph-search) | A search pill that turns into a white card on focus. | Motion |
| [OTP code](https://motion-brew.com/components/otp-code) | A white card that asks for a one time code sent to an email address or a phone. | Motion |
| [Payment form](https://motion-brew.com/components/payment-form) | A white card for adding a payment card. | Motion + GSAP |
| [Rolling stepper](https://motion-brew.com/components/rolling-stepper) | A number stepper whose digits roll like an odometer. | Motion |
| [Search modal](https://motion-brew.com/components/search-modal) | A search field with a card that drops down once it is used. | Motion |
| [Verify flow](https://motion-brew.com/components/verify-flow) | A verification card in three stages: connect, check, verified. | Motion + GSAP |
| [Voice prompt](https://motion-brew.com/components/voice-prompt) | A composer for an AI assistant that you can talk to. | Motion + GSAP |

### Animated React menus, tabs and navigation

| Component | What it does | Engine |
| --- | --- | --- |
| [Account menu](https://motion-brew.com/components/account-menu) | A profile pill that morphs into a full account card. | Motion |
| [Action menu](https://motion-brew.com/components/action-menu) | A dropdown of actions and links with a crafted feel. | Motion + GSAP |
| [Blur accordion](https://motion-brew.com/components/blur-accordion) | An accordion whose panels open on a spring and smear with a vertical motion blur while they move. | Motion |
| [Context menu](https://motion-brew.com/components/context-menu) | Wraps any content and opens a white menu at the pointer when it is right clicked, springing out of that corner while its rows rise in. | Motion |
| [Liquid tabs](https://motion-brew.com/components/liquid-tabs) | Icon tabs over a white panel, where the chosen tab is a white bump that grows out of the panel's top edge, joined to it by soft inward curves so the tab and the panel read as one piece. | Motion |
| [Pill tabs](https://motion-brew.com/components/pill-tabs) | Tabs on a tinted track with a white pill that slides to the active tab. | Motion |
| [Profile menu](https://motion-brew.com/components/profile-menu) | A white profile menu card for a workspace app. | Motion |
| [Sidebar nav](https://motion-brew.com/components/sidebar-nav) | A white app sidebar that folds between a full rail of icons and labels and a slim rail of icons only. | Motion |
| [Tab bar](https://motion-brew.com/components/tab-bar) | A white, fully rounded mobile bottom navigation in three styles. | Motion |

### Animated React button components

| Component | What it does | Engine |
| --- | --- | --- |
| [Bell toggle](https://motion-brew.com/components/bell-toggle) | A pill toggle for notifications. | Motion + GSAP |
| [Download button](https://motion-brew.com/components/download-button) | An ink pill that shows a download from start to finish. | Motion + GSAP |
| [Fuse button](https://motion-brew.com/components/fuse-button) | An action button whose done state carries an undo on a burning fuse. | Motion |
| [Hold to confirm](https://motion-brew.com/components/hold-to-confirm) | A button you hold to confirm. | Motion |
| [Magnetic button](https://motion-brew.com/components/magnetic-button) | A button that leans toward the cursor on a spring. | Motion |
| [Receipt button](https://motion-brew.com/components/receipt-button) | A pay button that turns into a receipt printer. | GSAP |
| [Slide commit](https://motion-brew.com/components/slide-commit) | A slide-to-confirm pill for actions worth a deliberate gesture: paying, sending, deleting. | Motion |

### Animated React charts and dashboard widgets

| Component | What it does | Engine |
| --- | --- | --- |
| [Activity grid](https://motion-brew.com/components/activity-grid) | A white card with a year of daily activity as a heatmap: one column per week, one square per day, in tints and shades of one colour, dark ink by default: light on quiet days, deep on the busiest. | Motion |
| [Calendar agenda](https://motion-brew.com/components/calendar-agenda) | A day planner card: a week strip on top and the chosen day's events below, each with its time, length and a colored bar. | Motion |
| [Channel mix](https://motion-brew.com/components/channel-mix) | A white marketing card: a light gray header with an icon tile, a title and a line of copy, then a white panel that overlaps it with the week's sessions on rolling digits and a row of slim ticks that splits them by channel. | Motion |
| [Deploy streak](https://motion-brew.com/components/deploy-streak) | A white card for a team's shipping streak: a title with an animated flame, a big count of days in a row with a deploy and a grid of dots, one per day. | Motion |
| [Device traffic](https://motion-brew.com/components/device-traffic) | A white traffic card: a light gray header with an icon tile, a title and a line of copy, then a white panel that overlaps it with the total visitors on rolling digits and a column per device. | Motion |
| [Goal gauge](https://motion-brew.com/components/goal-gauge) | A half-ring goal meter split by source. | Motion |
| [Growth stream](https://motion-brew.com/components/growth-stream) | A total built up over time, drawn as nested bands that step wider before each checkpoint. | Motion |
| [Metric split](https://motion-brew.com/components/metric-split) | A card that splits a total across three metrics: one rounded bar of proportional segments (solid, light, striped), with each metric's dot, label and odometer number under its segment. | Motion |
| [Mix chart](https://motion-brew.com/components/mix-chart) | A white chart card of stacked bars, each bar split into a few vivid segments with small gaps between them. | Motion |
| [Month calendar](https://motion-brew.com/components/month-calendar) | A white month calendar. | Motion |
| [Quota gauge](https://motion-brew.com/components/quota-gauge) | A white card for a plan's credit quota: a three quarter gauge made of radial ticks, like a speedometer, around a bolt. | Motion |
| [Range chart](https://motion-brew.com/components/range-chart) | A white card that charts a range for each day, like heart rate: a pill from each day's low to high on a soft column track, separate bubbles for outlying readings, and a dashed average line. | Motion |
| [Spending meter](https://motion-brew.com/components/spending-meter) | A spending card with a segmented bar. | Motion |
| [Usage ring](https://motion-brew.com/components/usage-ring) | A white card for plan usage: a ring made of short segments around a big percent. | Motion |

### Animated React text effects

| Component | What it does | Engine |
| --- | --- | --- |
| [Annotation text](https://motion-brew.com/components/annotation-text) | Hand-drawn pen marks draw themselves around words when they scroll into view: an underline, a circle, a box or a strike-through, each with a slightly wobbly stroke so it reads as drawn, not ruled. | Motion |
| [Backspace text](https://motion-brew.com/components/backspace-text) | Types a word, holds, backspaces it letter by letter and types the next, on a loop, with a blinking caret. | Motion |
| [Binary text](https://motion-brew.com/components/binary-text) | The text scrambles into 0s and 1s, then decodes left to right back into the real characters. | Motion |
| [Blur text](https://motion-brew.com/components/blur-text) | Words (or letters) rise out of a blur one after another as the text scrolls into view, settling sharp and in place. | Motion |
| [Flip words](https://motion-brew.com/components/flip-words) | One word in a sentence flips to the next on a loop. | Motion |
| [Gradient text](https://motion-brew.com/components/gradient-text) | A slow gradient flows through the letters on a seamless loop, clipped to the glyphs. | Motion |
| [Highlight text](https://motion-brew.com/components/highlight-text) | A marker sweeps behind chosen phrases one after another as the paragraph scrolls into view, with a slight hand-held skew. | Motion |
| [Rotating text](https://motion-brew.com/components/rotating-text) | Text set on a circle spins slowly around a center badge. | Motion |
| [Shimmer text](https://motion-brew.com/components/shimmer-text) | A bright band sweeps across muted text on a loop, the thinking sheen used for AI and loading states. | Motion |
| [Wave text](https://motion-brew.com/components/wave-text) | A heading whose words warp like liquid when you touch them. | Motion |

### Animated React carousels and galleries

| Component | What it does | Engine |
| --- | --- | --- |
| [Depth carousel](https://motion-brew.com/components/depth-carousel) | A stack of cards receding into depth along a diagonal, each turned a little toward the viewer. | Motion |
| [Duo flip](https://motion-brew.com/components/duo-flip) | A gallery that turns its pictures over with a liquid fold. | Motion |
| [Infinite gallery](https://motion-brew.com/components/infinite-gallery) | An endless wall of work you can move in any direction and never reach the edge of. | Motion |
| [Prism carousel](https://motion-brew.com/components/prism-carousel) | An endless loop of cards, images or metrics, circling slowly through a soft stage that fills its container, with a liquid glass lens at each edge. | Motion |
| [Project index](https://motion-brew.com/components/project-index) | An editorial project index: a numbered list of projects beside a large image panel. | Motion + GSAP |
| [Ribbon gallery](https://motion-brew.com/components/ribbon-gallery) | An endless ribbon of cards wrapped on the inside of a curved screen and tilted across the frame, 20 degrees by default. | Motion |
| [Tilt carousel](https://motion-brew.com/components/tilt-carousel) | A row of photo cards that moves on by itself: the one in the middle faces you square on and every card beside it turns away in 3D, shrinking, dimming and softening a little more the further out it sits. | Motion |

### Animated React backgrounds and shaders

| Component | What it does | Engine |
| --- | --- | --- |
| [Contour lines](https://motion-brew.com/components/contour-lines) | A background of live topographic contour lines. | Motion |
| [Gravity tag pile](https://motion-brew.com/components/gravity-tag-pile) | Tags drop into the card, bounce, spin and pile up under real physics. | Motion |
| [Magnetic flow](https://motion-brew.com/components/magnetic-flow) | A stack of cards that follows the leader like a snake, then bursts open like the sun. | GSAP |
| [Pixel blast](https://motion-brew.com/components/pixel-blast) | A background of dithered pixel clouds. | Motion |
| [Pixel scroll](https://motion-brew.com/components/pixel-scroll) | A scroll-driven pixel transition. | Motion |
| [Prism flow](https://motion-brew.com/components/prism-flow) | A dark background crossed by a soft band of light that bends and drifts like a ribbon caught in slow air. | Motion |
| [Spatial gallery](https://motion-brew.com/components/spatial-gallery) | A WebGL media tunnel that turns a list of images and videos into an endless space you travel through. | Motion + GSAP |

### Animated React toasts and banners

| Component | What it does | Engine |
| --- | --- | --- |
| [Privacy banner](https://motion-brew.com/components/privacy-banner) | A white cookie consent card. | Motion |
| [Toast stack](https://motion-brew.com/components/toast-stack) | Notifications gathered in a neat stack in the middle of their container instead of a screen corner. | Motion |

## Questions and bugs

Report a bug or ask for a component at [https://motion-brew.com/bugs](https://motion-brew.com/bugs).

## License

MIT, free for personal and commercial work. See [LICENSE](LICENSE).

This repo holds the released components and is updated from the Motion Brew build.
