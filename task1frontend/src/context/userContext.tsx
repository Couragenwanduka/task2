'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  selectedLanguages: string[];
  checked: boolean;
  time: string;
}

interface FormContextType {
  formData: FormData[];
  addFormData: (data: FormData) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('formData');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
    setHydrated(true);
  }, []);

  // Listen for storage changes (from other tabs)
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('formData');
      if (saved) {
        setFormData(JSON.parse(saved));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addFormData = (data: FormData) => {
    setFormData((prev) => {
      const updated = [...prev, data];
      localStorage.setItem('formData', JSON.stringify(updated));
      return updated;
    });
  };

  // Prevent rendering until hydration is complete to avoid mismatch
  if (!hydrated) return null;

  return <FormContext.Provider value={{ formData, addFormData }}>{children}</FormContext.Provider>;
};
