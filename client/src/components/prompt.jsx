import React, { useRef, useState, useEffect } from "react";

export default function Prompt({ placeholder = "Ask anything…", onSend }) {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  // Max pixel height before scrollbar appears
  const MAX_HEIGHT = 200; // px

  // Auto‐resize logic
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto"; // reset to measure
    const newHeight = Math.min(ta.scrollHeight, MAX_HEIGHT);
    ta.style.height = `${newHeight}px`;
    ta.style.overflowY = ta.scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (text.trim()) {
        onSend(text.trim());
        setText("");
      }
    }
  };

  const send = () => {
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  return (
    <div className="w-full flex items-end p-2 bg-gray-600 rounded-xl shadow-inner">
      <textarea
        ref={textareaRef}
        className="
          flex-1
          resize-none
          bg-gray-600
          placeholder-gray-400
          text-white
          text-base
          leading-normal
          py-2 px-4
          rounded-xl
          focus:outline-none
          focus:ring-2 focus:ring-purple-500
          transition-all
        "
        style={{ maxHeight: `${MAX_HEIGHT}px` }}
        rows={1}
        value={text}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={send}
        className="
          ml-2
          flex-shrink-0
          bg-purple-600 hover:bg-purple-700
          text-white font-semibold
          p-2 rounded-full
          focus:outline-none focus:ring-2 focus:ring-purple-500
          transition
        "
      >
        ➤
      </button>
    </div>
  );
}
