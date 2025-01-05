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
    { id: number; message: string; type: ToastTypes; duration: number }[]
  >([]);

  const showToast = useCallback(
    (message: string, type: ToastTypes = 'success', duration = 3000) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type, duration }]);
    },
    []
  );

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

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
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    }, []);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, duration);

      return () => clearTimeout(timer);
    }, [duration]);

    React.useEffect(() => {
      if (!isOpen) {
        const removeTimer = setTimeout(() => {
          removeToast(id);
        }, 300);
        return () => clearTimeout(removeTimer);
      }
    }, [isOpen, id]);

    const baseStyles = `
      relative px-4 py-2 text-sm rounded-lg shadow-lg 
      transition-all duration-300 ease-in-out
      data-[state=closed]:opacity-0 
      data-[state=closed]:translate-y-[10px]
      data-[state=open]:opacity-100 
      data-[state=open]:translate-y-0
    `;

    const typeStyles = {
      success: 'bg-primary text-primary-foreground ring-1 ring-ring',
      error:
        'bg-destructive text-destructive-foreground ring-1 ring-destructive-foreground',
      warning:
        'bg-secondary text-secondary-foreground ring-1 ring-secondary-foreground',
      info: 'bg-complimentary text-complimentary-foreground ring-1 ring-complimentary-foreground',
    };

    return (
      <div
        className={`${baseStyles} ${typeStyles[type]}`}
        data-state={isOpen ? 'open' : 'closed'}
      >
        <div className="flex items-center justify-between gap-2 whitespace-nowrap">
          <span>{message}</span>
          <button
            onClick={() => setIsOpen(false)}
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
