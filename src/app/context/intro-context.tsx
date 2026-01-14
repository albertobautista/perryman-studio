"use client";

import React, { createContext, useContext } from "react";

type IntroContextValue = {
  revealId: number; // cambia cada vez que termina el intro
};

const IntroContext = createContext<IntroContextValue>({ revealId: 0 });

export function IntroProvider({
  revealId,
  children,
}: {
  revealId: number;
  children: React.ReactNode;
}) {
  return (
    <IntroContext.Provider value={{ revealId }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  return useContext(IntroContext);
}
