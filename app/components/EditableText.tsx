"use client";

import React from "react";
import { useCms } from "../context/CmsContext";
import { Edit3 } from "lucide-react";

interface EditableTextProps {
  fieldKey: string;
  children: React.ReactNode;
  inline?: boolean;
}

export default function EditableText({ fieldKey, children, inline = true }: EditableTextProps) {
  const { isCmsMode, activeEditKey, setActiveEditKey, isLoggedIn } = useCms();

  if (!isCmsMode || !isLoggedIn) {
    return <>{children}</>;
  }

  const isActive = activeEditKey === fieldKey;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveEditKey(fieldKey);
    
    // Find the sidebar input element and scroll to it
    const element = document.getElementById(`cms-input-${fieldKey}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        (element as HTMLElement).focus();
      }, 400);
    }
  };

  return (
    <span
      onClick={handleClick}
      className={`cms-editable-wrapper ${isActive ? "active" : ""} ${inline ? "inline-mode" : "block-mode"}`}
      title={`Edit text for "${fieldKey}"`}
    >
      {children}
      <span className="cms-edit-indicator">
        <Edit3 size={8} />
      </span>
    </span>
  );
}
