
import * as React from "react";

export const registry: Record<string, any> = {
  button: {
    name: 'Button',
    component: React.lazy(() => import("@/_registry/examples/button-example")),
    src: "./_registry/examples/button-example.tsx"
  },

  icon_button: {
    name: 'Icon Button',
    component: React.lazy(() => import("@/_registry/examples/icon-button-example")),
    src: "./_registry/examples/icon-button-example.tsx"
  }
}