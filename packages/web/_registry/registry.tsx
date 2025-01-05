
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
  
}
