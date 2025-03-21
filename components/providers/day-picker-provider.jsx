"use client";

import { DayPickerProvider } from "react-day-picker";

export function DayPickerWrapper({ children }) {
  return (
    <DayPickerProvider
      initialProps={{
        mode: "single",
        fromYear: 2020,
        toYear: 2030,
        captionLayout: "dropdown",
      }}
    >
      {children}
    </DayPickerProvider>
  );
}
