export const THEMES: Record<'rose' | 'algae', string> = {
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
      }
    }`,
    algae: `@layer base {
      :root {
        --background: 160 100% 99%;
        --foreground: 162 45% 37%;
        
        --primary: 162 100% 93%;
        --primary-foreground: 162 45% 37%;
        
        --secondary: 162 73% 97%;
        --secondary-foreground: 162 40% 68%;
        
        --accent: 162 80% 90%;
        --border: 162 44% 81%;
        
        --muted: 160 12% 92%;
        --muted-foreground: 0 0% 56%;
        
        --destructive: 0 96% 39%;
        --destructive-foreground: 0 61% 93%;
  
        --popover: 162 100% 93%;
        --popover-foreground: 162 45% 37%;
        
        --input: 162 73% 97%;
        --ring: 162 44% 81%;
        
        --radius: 0.7rem;
      }
    }`
  };