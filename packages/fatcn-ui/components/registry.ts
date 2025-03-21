export type Registry = {
	name: string;
	type: string;
	dependencies?: string[];
	registryDependencies?: string[];
	files?: {
		path: string;
		type: string;
	}[];
	tailwind?: {
		config?: {
			theme?: {
				extend?: {
					colors?: Record<string, any>;
					keyframes?: Record<string, any>;
					animation?: Record<string, any>;
				};
			};
		};
	};
	cssVars?: {
		light?: Record<string, any>;
		dark?: Record<string, any>;
	};
};

export const ui: Registry[] = [
	{
		name: 'accordion',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-accordion'],
		files: [
			{
				path: 'components/accordion.tsx',
				type: 'registry:ui'
			}
		],
		tailwind: {
			config: {
				theme: {
					extend: {
						keyframes: {
							'accordion-down': {
								from: { height: '0' },
								to: {
									height: 'var(--radix-accordion-content-height)'
								}
							},
							'accordion-up': {
								from: {
									height: 'var(--radix-accordion-content-height)'
								},
								to: { height: '0' }
							}
						},
						animation: {
							'accordion-down': 'accordion-down 0.2s ease-out',
							'accordion-up': 'accordion-up 0.2s ease-out'
						}
					}
				}
			}
		}
	},
	{
		name: 'alert',
		type: 'registry:ui',
		files: [
			{
				path: 'components/alert.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'alert-dialog',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-alert-dialog'],
		registryDependencies: ['button'],
		files: [
			{
				path: 'components/alert-dialog.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'aspect-ratio',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-aspect-ratio'],
		files: [
			{
				path: 'components/aspect-ratio.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'avatar',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-avatar'],
		files: [
			{
				path: 'components/avatar.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'badge',
		type: 'registry:ui',
		files: [
			{
				path: 'components/badge.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'breadcrumb',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-slot'],
		files: [
			{
				path: 'components/breadcrumb.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'button',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-slot'],
		files: [
			{
				path: 'components/button.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'calendar',
		type: 'registry:ui',
		dependencies: ['react-day-picker@8.10.1', 'date-fns'],
		registryDependencies: ['button'],
		files: [
			{
				path: 'components/calendar.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'card',
		type: 'registry:ui',
		files: [
			{
				path: 'components/card.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'carousel',
		type: 'registry:ui',
		files: [
			{
				path: 'components/carousel.tsx',
				type: 'registry:ui'
			}
		],
		registryDependencies: ['button'],
		dependencies: ['embla-carousel-react']
	},
	{
		name: 'chart',
		type: 'registry:ui',
		files: [
			{
				path: 'components/chart.tsx',
				type: 'registry:ui'
			}
		],
		registryDependencies: ['card'],
		dependencies: ['recharts', 'lucide-react']
	},
	{
		name: 'checkbox',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-checkbox'],
		files: [
			{
				path: 'components/checkbox.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'collapsible',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-collapsible'],
		files: [
			{
				path: 'components/collapsible.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'command-box',
		type: 'registry:ui',
		dependencies: ['cmdk@1.0.0'],
		registryDependencies: ['dialog'],
		files: [
			{
				path: 'components/command-box.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'callout',
		type: 'registry:ui',
		files: [
			{
				path: 'components/callout.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'context-menu',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-context-menu'],
		files: [
			{
				path: 'components/context-menu.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'dialog',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-dialog'],
		files: [
			{
				path: 'components/dialog.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'drawer',
		type: 'registry:ui',
		dependencies: ['vaul', '@radix-ui/react-dialog'],
		files: [
			{
				path: 'components/drawer.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'dropdown-menu',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-dropdown-menu'],
		files: [
			{
				path: 'components/dropdown-menu.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'form',
		type: 'registry:ui',
		dependencies: [
			'@radix-ui/react-label',
			'@radix-ui/react-slot',
			'@hookform/resolvers',
			'zod',
			'react-hook-form'
		],
		registryDependencies: ['button', 'label'],
		files: [
			{
				path: 'components/form.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'hover-card',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-hover-card'],
		files: [
			{
				path: 'components/hover-card.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'input',
		type: 'registry:ui',
		files: [
			{
				path: 'components/input.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'input-otp',
		type: 'registry:ui',
		dependencies: ['input-otp'],
		files: [
			{
				path: 'components/input-otp.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'label',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-label'],
		files: [
			{
				path: 'components/label.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'menubar',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-menubar'],
		files: [
			{
				path: 'components/menubar.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'navigation-menu',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-navigation-menu'],
		files: [
			{
				path: 'components/navigation-menu.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'pagination',
		type: 'registry:ui',
		registryDependencies: ['button'],
		files: [
			{
				path: 'components/pagination.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'popover',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-popover'],
		files: [
			{
				path: 'components/popover.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'progress',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-progress'],
		files: [
			{
				path: 'components/progress.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'radio-group',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-radio-group'],
		files: [
			{
				path: 'components/radio-group.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'resizable',
		type: 'registry:ui',
		dependencies: ['react-resizable-panels'],
		files: [
			{
				path: 'components/resizable.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'scroll-area',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-scroll-area'],
		files: [
			{
				path: 'components/scroll-area.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'select',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-select'],
		files: [
			{
				path: 'components/select.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'separator',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-separator'],
		files: [
			{
				path: 'components/separator.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'sheet',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-dialog'],
		files: [
			{
				path: 'components/sheet.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'sidebar',
		type: 'registry:ui',
		dependencies: [
			'@radix-ui/react-slot',
			'class-variance-authority',
			'lucide-react'
		],
		registryDependencies: [
			'button',
			'separator',
			'sheet',
			'tooltip',
			'input',
			'use-mobile',
			'skeleton'
		],
		files: [
			{
				path: 'components/sidebar.tsx',
				type: 'registry:ui'
			}
		],
		tailwind: {
			config: {
				theme: {
					extend: {
						colors: {
							sidebar: {
								DEFAULT: 'hsl(var(--sidebar-background))',
								foreground: 'hsl(var(--sidebar-foreground))',
								primary: 'hsl(var(--sidebar-primary))',
								'primary-foreground':
									'hsl(var(--sidebar-primary-foreground))',
								accent: 'hsl(var(--sidebar-accent))',
								'accent-foreground':
									'hsl(var(--sidebar-accent-foreground))',
								border: 'hsl(var(--sidebar-border))',
								ring: 'hsl(var(--sidebar-ring))'
							}
						}
					}
				}
			}
		},
		cssVars: {
			light: {
				'sidebar-background': '0 0% 98%',
				'sidebar-foreground': '240 5.3% 26.1%',
				'sidebar-primary': '240 5.9% 10%',
				'sidebar-primary-foreground': '0 0% 98%',
				'sidebar-accent': '240 4.8% 95.9%',
				'sidebar-accent-foreground': '240 5.9% 10%',
				'sidebar-border': '220 13% 91%',
				'sidebar-ring': '217.2 91.2% 59.8%'
			},
			dark: {
				'sidebar-background': '240 5.9% 10%',
				'sidebar-foreground': '240 4.8% 95.9%',
				'sidebar-primary': '224.3 76.3% 48%',
				'sidebar-primary-foreground': '0 0% 100%',
				'sidebar-accent': '240 3.7% 15.9%',
				'sidebar-accent-foreground': '240 4.8% 95.9%',
				'sidebar-border': '240 3.7% 15.9%',
				'sidebar-ring': '217.2 91.2% 59.8%'
			}
		}
	},
	{
		name: 'skeleton',
		type: 'registry:ui',
		files: [
			{
				path: 'components/skeleton.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'slider',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-slider'],
		files: [
			{
				path: 'components/slider.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'sonner',
		type: 'registry:ui',
		dependencies: ['sonner', 'next-themes'],
		files: [
			{
				path: 'components/sonner.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'switch',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-switch'],
		files: [
			{
				path: 'components/switch.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'table',
		type: 'registry:ui',
		files: [
			{
				path: 'components/table.tsx',
				type: 'registry:ui'
			}
		],
		registryDependencies: ['button', 'pagination']
	},
	{
		name: 'tabs',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-tabs'],
		files: [
			{
				path: 'components/tabs.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'textarea',
		type: 'registry:ui',
		files: [
			{
				path: 'components/textarea/textarea.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'toast',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-toast'],
		files: [
			{
				path: 'components/use-toast.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'toggle',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-toggle'],
		files: [
			{
				path: 'components/toggle.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'toggle-group',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-toggle-group'],
		registryDependencies: ['toggle'],
		files: [
			{
				path: 'components/toggle-group.tsx',
				type: 'registry:ui'
			}
		]
	},
	{
		name: 'tooltip',
		type: 'registry:ui',
		dependencies: ['@radix-ui/react-tooltip'],
		files: [
			{
				path: 'components/tooltip.tsx',
				type: 'registry:ui'
			}
		]
	}
];
