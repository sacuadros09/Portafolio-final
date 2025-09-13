import { useState, useEffect } from "react";

export function useTypingEffect(text, speed = 80, pause = 1200) {
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && displayed.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
    } else if (!deleting && displayed.length === text.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length - 1));
      }, speed);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => setDeleting(false), speed);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, text, speed, pause]);

  return displayed;
}
