"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ text = "Submit" }) {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-primary btn-md" type="submit" disabled={pending}>
      {text}
    </button>
  );
}
