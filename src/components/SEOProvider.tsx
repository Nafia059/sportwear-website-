"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { SEOConfig, defaultSEOConfig } from "@/lib/seo-config";

interface SEOContextType {
  config: SEOConfig;
  toggleOnPage: (key: keyof SEOConfig["onPage"]) => void;
  toggleOffPage: (key: keyof SEOConfig["offPage"]) => void;
  toggleOnPageMaster: (enabled: boolean) => void;
  toggleOffPageMaster: (enabled: boolean) => void;
  updateTitle: (title: string) => void;
  updateDescription: (desc: string) => void;
}

const SEOContext = createContext<SEOContextType | null>(null);

export function SEOProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<SEOConfig>(defaultSEOConfig);

  const toggleOnPage = (key: keyof SEOConfig["onPage"]) => {
    setConfig((prev) => ({
      ...prev,
      onPage: { ...prev.onPage, [key]: !prev.onPage[key] },
    }));
  };

  const toggleOffPage = (key: keyof SEOConfig["offPage"]) => {
    setConfig((prev) => ({
      ...prev,
      offPage: { ...prev.offPage, [key]: !prev.offPage[key] },
    }));
  };

  const toggleOnPageMaster = (enabled: boolean) => {
    setConfig((prev) => ({
      ...prev,
      onPage: { ...prev.onPage, enabled },
    }));
  };

  const toggleOffPageMaster = (enabled: boolean) => {
    setConfig((prev) => ({
      ...prev,
      offPage: { ...prev.offPage, enabled },
    }));
  };

  const updateTitle = (title: string) => {
    setConfig((prev) => ({
      ...prev,
      onPage: { ...prev.onPage, title },
    }));
  };

  const updateDescription = (desc: string) => {
    setConfig((prev) => ({
      ...prev,
      onPage: { ...prev.onPage, description: desc },
    }));
  };

  return (
    <SEOContext.Provider
      value={{
        config,
        toggleOnPage,
        toggleOffPage,
        toggleOnPageMaster,
        toggleOffPageMaster,
        updateTitle,
        updateDescription,
      }}
    >
      {children}
    </SEOContext.Provider>
  );
}

export function useSEO() {
  const context = useContext(SEOContext);
  if (!context) throw new Error("useSEO must be used within SEOProvider");
  return context;
}
