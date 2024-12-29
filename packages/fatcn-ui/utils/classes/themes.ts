export type ThemeTypes = 'rose' | 'mint'

export const THEMES: Record<ThemeTypes, string> = {
    rose: `@layer base {
      :root {
        --background: 336 100% 99%;
        --foreground: 337 45% 37%;
        
        --primary: 337 100% 93%;
        --primary-foreground: 337 45% 37%;
        
        --secondary: 337 73% 97%;
        --secondary-foreground: 337 40% 68%;
        
        --accent: 337 80% 90%;
        --border: 337 44% 81%;
        
        --muted: 336 12% 92%;
        --muted-foreground: 0 0% 56%;
        
        --destructive: 340 96% 39%;
        --destructive-foreground:338 61% 93%;
  
        --popover: 337 100% 93%;
        --popover-foreground: 337 45% 37%;
        
        --input: 338 73% 97%;
        --ring: 337 44% 81%;
        
        --radius: 0.7rem;

        --sidebar-width: 12rem;
        --sidebar-width-collapsed: 4rem;
      }
    }`,
    mint: `@layer base {
      :root {
        --background: 140 100% 100%;
        --foreground: 140 45% 37%;
        
        --primary: 140 100% 93%;
        --primary-foreground: 140 45% 37%;
        
        --secondary: 140 73% 90%;
        --secondary-foreground: 140 40% 40%;
        
        --accent: 140 80% 90%;
        --border: 140 44% 81%;
        
        --muted: 140 12% 92%;
        --muted-foreground: 0 0% 56%;
        
        --destructive: 0 96% 39%;
        --destructive-foreground: 0 61% 93%;
  
        --popover: 140 100% 93%;
        --popover-foreground: 140 45% 37%;
        
        --input: 140 73% 97%;
        --ring: 140 44% 81%;
        
        --radius: 0.7rem;

        --complimentary: calc(140 + 30) 64% 90%;
        --adjacent: calc(140 + 90) 64% 90%;
        --complimentary-foreground: calc(140 + 30) 45% 35%;

        --sidebar-width: 12rem;
        --sidebar-width-collapsed: 4rem;
      }
    }`
  };