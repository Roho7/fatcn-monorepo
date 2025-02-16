export type ThemeTypes = 'base' | 'pixel'

export const THEMES: Record<ThemeTypes, string> = {
    base: `:root {
        --hue: 111;
        
        --background: var(--hue) 100% 100%;
        --foreground: var(--hue) 45% 37%;
        
        --primary: var(--hue) 100% 93%;
        --primary-foreground: var(--hue) 45% 37%;
        
        --secondary: var(--hue) 73% 90%;
        --secondary-foreground: var(--hue) 40% 40%;
        
        --accent: var(--hue) 80% 90%;
        --border: var(--hue) 44% 81%;
        
        --muted: var(--hue) 12% 92%;
        --muted-foreground: var(--hue) 0% 56%;
        
        --destructive: 0 96% 39%;
        --destructive-foreground: 0 61% 93%;

        --card: var(--hue) 100% 99%;
        --card-foreground: var(--hue) 45% 37%;
  
        --popover: var(--hue) 100% 93%;
        --popover-foreground: var(--hue) 45% 37%;
        
        --input: var(--hue) 53% 99%;
        --ring: var(--hue) 44% 81%;
        
        --radius: 0.7rem;

        --complimentary: calc(var(--hue) + 30) 64% 90%;
        --adjacent: calc(var(--hue) + 90) 64% 90%;
        --complimentary-foreground: calc(var(--hue) + 30) 45% 35%;

        --sidebar-width: 12rem;
        --sidebar-width-collapsed: 4rem;
      }

      .dark {
        --hue: 111;
        
        --background: var(--hue) 0% 0%;
        --foreground: var(--hue) 52% 88%;
        
        --primary: var(--hue) 24% 13%;
        --primary-foreground: var(--hue) 52% 88%;
        
        --secondary: var(--hue) 42% 16%;
        --secondary-foreground: var(--hue) 51% 82%;
        
        --accent: var(--hue) 42% 34%;
        --border: var(--hue) 28% 15%;
        
        --muted: var(--hue) 5% 32%;
        --muted-foreground: var(--hue) 5% 56%;
        
        --destructive: 0 96% 39%;
        --destructive-foreground: 0 61% 93%;

        --card: var(--hue) 70% 10%;
        --card-foreground: var(--hue) 52% 88%;
  
        --popover: var(--hue) 29% 39%;
        --popover-foreground: var(--hue) 52% 88%;
        
        --input: var(--hue) 58% 15%;
        --ring: var(--hue) 28% 15%;
        
        --radius: 0.7rem;

        --complimentary: calc(var(--hue) + 30) 64% 50%;
        --adjacent: calc(var(--hue) + 90) 64% 50%;
        --complimentary-foreground: calc(var(--hue) + 30) 45% 95%;

        --sidebar-width: 12rem;
        --sidebar-width-collapsed: 4rem;
      }`,
    pixel: `:root {
        --hue: 111;
        
        --background: var(--hue) 100% 100%;
        --foreground: var(--hue) 45% 37%;
        
        --primary: var(--hue) 100% 93%;
        --primary-foreground: var(--hue) 45% 37%;
        
        --secondary: var(--hue) 73% 90%;
        --secondary-foreground: var(--hue) 40% 40%;
        
        --accent: var(--hue) 80% 90%;
        --border: var(--hue) 44% 81%;
        
        --muted: var(--hue) 12% 92%;
        --muted-foreground: var(--hue) 0% 56%;
        
        --destructive: 0 96% 39%;
        --destructive-foreground: 0 61% 93%;

        --card: var(--hue) 100% 99%;
        --card-foreground: var(--hue) 45% 37%;
  
        --popover: var(--hue) 100% 93%;
        --popover-foreground: var(--hue) 45% 37%;
        
        --input: var(--hue) 53% 99%;
        --ring: var(--hue) 44% 81%;
        
        --radius: 0.7rem;

        --complimentary: calc(var(--hue) + 30) 64% 90%;
        --adjacent: calc(var(--hue) + 90) 64% 90%;
        --complimentary-foreground: calc(var(--hue) + 30) 45% 35%;

        --sidebar-width: 12rem;
        --sidebar-width-collapsed: 4rem;

        --pixel-size: 2px;
        --pixel-shadow-offset: 4px;
      }

      .dark {
        --hue: 111;
        
        --background: var(--hue) 0% 0%;
        --foreground: var(--hue) 52% 98%;
        
        --primary: var(--hue) 24% 13%;
        --primary-foreground: var(--hue) 52% 98%;
        
        --secondary: var(--hue) 42% 16%;
        --secondary-foreground: var(--hue) 51% 92%;
        
        --accent: var(--hue) 42% 34%;
        --border: var(--hue) 38% 85%;
        
        --muted: var(--hue) 5% 32%;
        --muted-foreground: var(--hue) 5% 56%;
        
        --destructive: 0 96% 39%;
        --destructive-foreground: 0 61% 93%;

        --card: var(--hue) 70% 10%;
        --card-foreground: var(--hue) 52% 98%;
  
        --popover: var(--hue) 29% 39%;
        --popover-foreground: var(--hue) 52% 98%;
        
        --input: var(--hue) 58% 15%;
        --ring: var(--hue) 28% 15%;
        
        --radius: 0.7rem;

        --complimentary: calc(var(--hue) + 30) 64% 50%;
        --adjacent: calc(var(--hue) + 90) 64% 50%;
        --complimentary-foreground: calc(var(--hue) + 30) 45% 95%;

        --sidebar-width: 12rem;
        --sidebar-width-collapsed: 4rem;

        --pixel-size: 2px;
        --pixel-shadow-offset: 2px;
      }

      .theme-pixel {
        --radius: 0px;
    
        .rounded-sm {
          --pixel-shadow-offset: 2px;
        }
    
        .rounded-md {
          --pixel-shadow-offset: 3px;
        }
    
        .rounded-lg {
          --pixel-shadow-offset: 4px;
        }
    
        .rounded-xl {
          --pixel-shadow-offset: 6px;
        }
    
        .rounded-2xl {
          --pixel-shadow-offset: 8px;
        }
    
        *[class*='rounded'] {
          z-index: 1;
          border-radius: 0px;
          border: none !important;
          box-shadow: 
            var(--pixel-shadow-offset) var(--pixel-shadow-offset) 0 0 hsl(var(--border));
          outline: 1px solid hsl(var(--border));
          /* outline-offset: -1px; */
        }

        .pixel-no-border {
          border: none !important;
          box-shadow: none !important;
          outline: none !important;
        }

        button[class*='rounded']:hover {
          transform: translate(calc(var(--pixel-shadow-offset)*-1), calc(var(--pixel-shadow-offset)*-1));
          box-shadow: 
            calc(var(--pixel-shadow-offset)*2) calc(var(--pixel-shadow-offset)*2) 0 0 hsl(var(--border));
        }
      }`
  };