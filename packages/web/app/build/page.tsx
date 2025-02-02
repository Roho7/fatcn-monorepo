'use client';
import { componentSources, getComponentSource } from '@/_registry/source-registry';
import { askAI } from '@/lib/ai';
import { Button, Dropdown, Input } from '@fatcn-ui/components';
import { Add01Icon, Cancel01Icon, Loading02Icon, SentIcon } from 'hugeicons-react';
import React, { useState } from 'react';
import ChatBubble, { SenderDetails } from '../_components/_examples/chatbubble';


type Message = {
  content: string;
  role: 'user' | 'assistant';
  sender: SenderDetails;
};

export default function BuildPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [selectedComponentCode, setSelectedComponentCode] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setIsLoading(true);

    // Add user message with component context
    setMessages(prev => [...prev, { 
      content: inputMessage, 
      role: 'user', 
      sender: { 
        type: 'self', 
        name: 'User', 
        avatar: 'https://github.com/fatcn.png' 
      } 
    }]);

    const input = `
    Here is the reference code:
    ${selectedComponentCode || 'No component selected'}
    Here is the instructions:
    ${inputMessage}
    `;
    
    const response = await askAI(input);
    setMessages(prev => [
      ...prev,
      { 
        content: response, 
        role: 'assistant', 
        sender: { 
          type: 'other', 
          name: 'Assistant', 
          avatar: 'https://fatcn.vercel.app/fatcn_logo.svg' 
        } 
      }
    ]);
    
    setInputMessage('');
    setIsLoading(false);
  };


  return (
    <div className="flex h-screen flex-col w-full ">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="rounded-xl border border-border bg-primary/10 p-6">
            {messages.length === 0 ? (
              <div className="grid h-[60vh] place-items-center">
                <div className="space-y-4 text-center">
                  <h3 className="text-lg font-medium">Fatcn Block Builder</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['Add a loading state', 'Make it responsive', 'Change the color scheme', 'Add hover effects'].map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => setInputMessage(prompt)}
                        className="rounded-md border border-border bg-background p-3 text-sm hover:bg-accent"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <ChatBubble
                    key={index}
                    sender={message.sender}
                    message={message.content}
                  />
                ))}
              </div>
            )}
          </div>
          
          {isLoading && (
            <div className="flex justify-center p-4">
              <Loading02Icon className="h-6 w-6 animate-spin text-gray-400" />
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="border-t border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-3xl p-6 pt-4 flex flex-col gap-2">
            {selectedComponent ? (
              <div className="font-mono text-sm border border-border w-fit rounded-md p-1 pl-2 flex items-center gap-2">{selectedComponent} <Button variant="ghost" size="xs" className="p-0 m-0" onClick={() => setSelectedComponent(null)}><Cancel01Icon className="h-4 w-4" /></Button></div>
            ) : (
              <div className="font-mono text-sm border border-border rounded-md p-1 pl-2 flex items-center gap-2 text-muted-foreground">No component selected</div>
            )}
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-lg border border-border p-2 shadow-sm">
            <Dropdown 
              triggerSize='sm'
              rightSlot={<Add01Icon className="h-5 w-5" />}
              options={Object.entries(componentSources).map(([name, code]) => ({
                element: <div className="font-mono text-sm">{name}</div>,
                action: async () => {
                  try {
                    setSelectedComponent(name);
                    // Fetch component source directly from public folder
                    const code = getComponentSource(name);
                    if (code) {
                      setSelectedComponentCode(code);
                    }
                  } catch (error) {
                    console.error('Failed to fetch component:', error);
                  }
                }
              }))}
            >
              Component
            </Dropdown>
            <Input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask for component modifications..."
              className="border-0 shadow-none focus-visible:ring-0"
            />
            <Button
              type="submit"
              size='icon'
              variant='default'
              className="h-9 w-9"
            >
              <SentIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
