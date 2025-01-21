'use client';
import { Cancel01Icon } from 'hugeicons-react';
import React, { createContext, useCallback, useContext, useState } from 'react';

type ToastTypes = 'success' | 'error' | 'warning' | 'info';
type ToastContextType = {
  showToast: (message: string, type: ToastTypes, duration: number) => void;
  removeToast: (id: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<
    { id: number; message: string; type: ToastTypes; duration: number; timer: NodeJS.Timeout }[]
  >([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => {
      const toast = prev.find((t) => t.id === id);
      if (toast) {
        clearTimeout(toast.timer);
      }
      return prev.filter((toast) => toast.id !== id);
    });
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastTypes = 'success', duration = 3000) => {
      const id = Math.random();
      
      setToasts((prev) => {
        const timer = setTimeout(() => {
          removeToast(id);
        }, duration);
        
        return [...prev, { id, message, type, duration, timer }];
      });
    },
    [removeToast]
  );

  // Cleanup timers when component unmounts
  React.useEffect(() => {
    return () => {
      toasts.forEach((toast) => clearTimeout(toast.timer));
    };
  }, [toasts]);

  const Toast = ({
    message,
    type,
    duration,
    id,
  }: {
    message: string;
    type: ToastTypes;
    duration: number;
    id: number;
  }) => {
    const baseStyles = `
      relative px-4 py-2 text-sm rounded-lg shadow-lg 
      transition-all duration-300 ease-in-out
      animate-in fade-in-0 slide-in-from-bottom-3
      hover:opacity-80
    `;

    const typeStyles = {
      success: 'bg-primary text-primary-foreground ring-1 ring-ring',
      error:
        'bg-destructive text-destructive-foreground ring-1 ring-destructive',
      warning:
        'bg-yellow-200 text-yellow-500 ring-1 ring-yellow-200 text-yellow-700',
      info: 'bg-complimentary text-complimentary-foreground ring-1 ring-complimentary',
    };

    return (
      <div className={`${baseStyles} ${typeStyles[type]}`}>
        <div className="flex items-center justify-between gap-2 whitespace-nowrap">
          <span>{message}</span>
          <button
            onClick={() => removeToast(id)}
            className="ml-2 hover:text-primary-foreground/80"
          >
            <Cancel01Icon size={16} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col-reverse gap-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
