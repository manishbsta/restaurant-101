"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<{
  value: string[];
  onValueChange: (value: string) => void;
  type: "single" | "multiple";
}>({
  value: [],
  onValueChange: () => {},
  type: "multiple",
});

function ToggleGroup({
  value = [],
  onValueChange,
  type = "multiple",
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  value?: string[];
  onValueChange?: (value: string) => void;
  type?: "single" | "multiple";
}) {
  return (
    <ToggleGroupContext.Provider value={{ value, onValueChange: onValueChange ?? (() => {}), type }}>
      <div
        role="group"
        className={cn("inline-flex items-center rounded-lg", className)}
        {...props}
      >
        {children}
      </div>
    </ToggleGroupContext.Provider>
  );
}

function ToggleGroupItem({
  value: itemValue,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
}) {
  const context = React.useContext(ToggleGroupContext);
  const isOn = context.value.includes(itemValue);

  return (
    <button
      type="button"
      role={context.type === "single" ? "radio" : "checkbox"}
      aria-checked={isOn}
      data-state={isOn ? "on" : "off"}
      className={cn(toggleVariants({ variant: "outline", size: "sm" }), className)}
      onClick={() => {
        if (context.type === "single") {
          context.onValueChange(isOn ? "" : itemValue);
        } else {
          context.onValueChange(itemValue);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export { ToggleGroup, ToggleGroupItem };