
import * as React from "react";

export const registry: Record<string, any> = {
  button: {
    name: 'Button',
    component: React.lazy(() => import("@/_registry/examples/button-example")),
    src: "./_registry/examples/button-example.tsx"
  },
  secondary_button: {
    name: 'Secondary Button',
    component: React.lazy(() => import("@/_registry/examples/secondary-button-example")),
    src: "./_registry/examples/secondary-button-example.tsx"
  },
  gradient_button: {
    name: 'Gradient Button',
    component: React.lazy(() => import("@/_registry/examples/gradient-button-example")),
    src: "./_registry/examples/gradient-button-example.tsx"
  },
  icon_button: {
    name: 'Icon Button',
    component: React.lazy(() => import("@/_registry/examples/icon-button-example")),
    src: "./_registry/examples/icon-button-example.tsx"
  },
  ghost_button: {
    name: 'Ghost Button',
    component: React.lazy(() => import("@/_registry/examples/ghost-button-example")),
    src: "./_registry/examples/ghost-button-example.tsx"
  },
  link_button: {
    name: 'Link Button',
    component: React.lazy(() => import("@/_registry/examples/link-button-example")),
    src: "./_registry/examples/link-button-example.tsx"
  },
  // Avatar
  circle_avatar: {
    name: 'Circle Avatar',
    component: React.lazy(() => import("@/_registry/examples/circle-avatar-example")),
    src: "./_registry/examples/circle-avatar-example.tsx"
  },
  square_avatar: {
    name: 'Square Avatar',
    component: React.lazy(() => import("@/_registry/examples/square-avatar-example")),
    src: "./_registry/examples/square-avatar-example.tsx"
  },
  avatar_sizes: {
    name: 'Avatar Sizes',
    component: React.lazy(() => import("@/_registry/examples/avatar-sizes-example")),
    src: "./_registry/examples/avatar-sizes-example.tsx"
  },
  callout: {
    name: 'Callout',
    component: React.lazy(() => import("@/_registry/examples/callout/callout-example")),
    src: "./_registry/examples/callout/callout-example.tsx"
  },
  info_callout: {
    name: 'Info Callout',
    component: React.lazy(() => import("@/_registry/examples/callout/info-callout-example")),
    src: "./_registry/examples/callout/callout/info-callout-example.tsx"
  },
  success_callout: {
    name: 'Success Callout',
    component: React.lazy(() => import("@/_registry/examples/callout/success-callout-example")),
    src: "./_registry/examples/callout/callout/success-callout-example.tsx"
  },
  warning_callout: {
    name: 'Warning Callout',
    component: React.lazy(() => import("@/_registry/examples/callout/warning-callout-example")),
    src: "./_registry/examples/callout/callout/warning-callout-example.tsx"
  },
  error_callout: {
    name: 'Error Callout',
    component: React.lazy(() => import("@/_registry/examples/callout/error-callout-example")),
    src: "./_registry/examples/callout/callout/error-callout-example.tsx"
  }
}
