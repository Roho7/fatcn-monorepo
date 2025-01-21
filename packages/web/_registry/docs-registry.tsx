
import * as React from "react";

export const registry: Record<string, any> = {
  button: {
    name: 'Button',
    component: React.lazy(() => import("@/app/_components/_docs_examples/button-example")),
    src: "@/app/_components/_docs_examples/button-example.tsx",
  },
  secondary_button: {
    name: 'Secondary Button',
    component: React.lazy(() => import("@/app/_components/_docs_examples/secondary-button-example")),
    src: "@/app/_components/_docs_examples/secondary-button-example.tsx"
  },
  gradient_button: {
    name: 'Gradient Button',
    component: React.lazy(() => import("@/app/_components/_docs_examples/gradient-button-example")),
    src: "@/app/_components/_docs_examples/gradient-button-example.tsx"
  },
  icon_button: {
    name: 'Icon Button',
    component: React.lazy(() => import("@/app/_components/_docs_examples/icon-button-example")),
    src: "@/app/_components/_docs_examples/icon-button-example.tsx"
  },
  ghost_button: {
    name: 'Ghost Button',
    component: React.lazy(() => import("@/app/_components/_docs_examples/ghost-button-example")),
    src: "@/app/_components/_docs_examples/ghost-button-example.tsx"
  },
  link_button: {
    name: 'Link Button',
    component: React.lazy(() => import("@/app/_components/_docs_examples/link-button-example")),
    src: "@/app/_components/_docs_examples/link-button-example.tsx"
  },
  // Avatar
  circle_avatar: {
    name: 'Circle Avatar',
    component: React.lazy(() => import("@/app/_components/_docs_examples/circle-avatar-example")),
    src: "@/app/_components/_docs_examples/circle-avatar-example.tsx"
  },
  square_avatar: {
    name: 'Square Avatar',
    component: React.lazy(() => import("@/app/_components/_docs_examples/square-avatar-example")),
    src: "@/app/_components/_docs_examples/square-avatar-example.tsx"
  },
  avatar_sizes: {
    name: 'Avatar Sizes',
    component: React.lazy(() => import("@/app/_components/_docs_examples/avatar-sizes-example")),
    src: "@/app/_components/_docs_examples/avatar-sizes-example.tsx"
  },
  avatar_with_ring: {
    name: 'Avatar with Ring',
    component: React.lazy(() => import("@/app/_components/_docs_examples/avatar-with-ring-example")),
    src: "@/app/_components/_docs_examples/avatar-with-ring-example.tsx"
  },
  callout: {
    name: 'Callout',
    component: React.lazy(() => import("@/app/_components/_docs_examples/callout/callout-example")),
    src: "@/app/_components/_docs_examples/callout/callout-example.tsx"
  },
  info_callout: {
    name: 'Info Callout',
    component: React.lazy(() => import("@/app/_components/_docs_examples/callout/info-callout-example")),
    src: "@/app/_components/_docs_examples/callout/info-callout-example.tsx"
  },
  success_callout: {
    name: 'Success Callout',
    component: React.lazy(() => import("@/app/_components/_docs_examples/callout/success-callout-example")),
    src: "@/app/_components/_docs_examples/callout/success-callout-example.tsx"
  },
  warning_callout: {
    name: 'Warning Callout',
    component: React.lazy(() => import("@/app/_components/_docs_examples/callout/warning-callout-example")),
    src: "@/app/_components/_docs_examples/callout/warning-callout-example.tsx"
  },
  error_callout: {
    name: 'Error Callout',
    component: React.lazy(() => import("@/app/_components/_docs_examples/callout/error-callout-example")),
    src: "@/app/_components/_docs_examples/callout/error-callout-example.tsx"
  },
  // Card
  card: {
    name: 'Card',
    component: React.lazy(() => import("@/app/_components/_docs_examples/card/card-example")),
    src: "@/app/_components/_docs_examples/card/card-example.tsx"
  },
  secondary_card: {
    name: 'Secondary Card',
    component: React.lazy(() => import("@/app/_components/_docs_examples/card/secondary-card-example")),
    src: "@/app/_components/_docs_examples/card/secondary-card-example.tsx"
  },
  command_box: {
    name: 'Command Box',
    component: React.lazy(() => import("@/app/_components/_docs_examples/command-box/command-example")),
    src: "@/app/_components/_docs_examples/command-box/command-example.tsx"
  },
  command_box_dialog: {
    name: 'Command Box Dialog',
    component: React.lazy(() => import("@/app/_components/_docs_examples/command-box/command-dialog-example")),
    src: "@/app/_components/_docs_examples/command-box/command-dialog-example.tsx"
  },
  // Input
  input: {
    name: 'Input',
    component: React.lazy(() => import("@/app/_components/_docs_examples/input/input-example")),
    src: "@/app/_components/_docs_examples/input/input-example.tsx"
  },
  checkbox: {
    name: 'Checkbox',
    component: React.lazy(() => import("@/app/_components/_docs_examples/checkbox/checkbox-example")),
    src: "@/app/_components/_docs_examples/checkbox/checkbox-example.tsx"
  },
  pagination: {
    name: 'Pagination',
    component: React.lazy(() => import("@/app/_components/_docs_examples/pagination/pagination-example")),
    src: "@/app/_components/_docs_examples/pagination/pagination-example.tsx"
  },
  toast: {
    name: 'Toast',
    component: React.lazy(() => import("@/app/_components/_docs_examples/toast/toast-example")),
    src: "@/app/_components/_docs_examples/toast/toast-example.tsx"
  },
  info_toast: {
    name: 'Info Toast',
    component: React.lazy(() => import("@/app/_components/_docs_examples/toast/info-toast-example")),
    src: "@/app/_components/_docs_examples/toast/info-toast-example.tsx"
  },
  warning_toast: {
    name: 'Warning Toast',
    component: React.lazy(() => import("@/app/_components/_docs_examples/toast/warning-toast-example")),
    src: "@/app/_components/_docs_examples/toast/warning-toast-example.tsx"
  },
  error_toast: {
    name: 'Error Toast',
    component: React.lazy(() => import("@/app/_components/_docs_examples/toast/error-toast-example")),
    src: "@/app/_components/_docs_examples/toast/error-toast-example.tsx"
  },
// Dialog
  dialog: {
    name: 'Dialog',
    component: React.lazy(() => import("@/app/_components/_docs_examples/dialog/dialog-example")),
    src: "@/app/_components/_docs_examples/dialog/dialog-example.tsx"
  },
  table: {
    name: 'Table',
    component: React.lazy(() => import("@/app/_components/_docs_examples/table/table-example")),
    src: "@/app/_components/_docs_examples/table/table-example.tsx"
  },
  tabs: {
    name: 'Tabs',
    component: React.lazy(() => import("@/app/_components/_docs_examples/tabs/tabs-example")),
    src: "@/app/_components/_docs_examples/tabs/tabs-example.tsx"
  },
  dropdown: {
    name: 'Dropdown',
    component: React.lazy(() => import("@/app/_components/_docs_examples/dropdown/dropdown-example")),
    src: "@/app/_components/_docs_examples/dropdown/dropdown-example.tsx"
    },
    secondary_dropdown: {
      name: 'Secondary Dropdown',
      component: React.lazy(() => import("@/app/_components/_docs_examples/dropdown/secondary-dropdown-example")),
    src: "@/app/_components/_docs_examples/dropdown/secondary-dropdown-example.tsx"
  },
  tooltip: {
    name: 'Tooltip',
    component: React.lazy(() => import("@/app/_components/_docs_examples/tooltip/tooltip-example")),
    src: "@/app/_components/_docs_examples/tooltip/tooltip-example.tsx"
  }
}
