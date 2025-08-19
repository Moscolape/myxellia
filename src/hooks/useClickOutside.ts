import { useEffect, RefObject } from "react";

/**
 * Custom hook: useClickOutside
 *
 * Detects clicks outside of a referenced element and triggers a callback handler.
 *
 * @template T - Type of the HTML element being referenced
 * @param ref - React ref object pointing to the element
 * @param handler - Function to call when a click outside the element is detected
 */

export default function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: () => void
) {
  useEffect(() => {
    /**
     * Handles document clicks and invokes handler if click is outside ref element
     */
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, handler]);
}