import React from "react";

export const Spinner = (probs) => {
  const { label, loading = false } = probs;
  return (
    <span {...(loading && { disabled: true })}>
      {(loading && (
        <span>
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Loading...</span>
        </span>
      )) ||
        label}
    </span>
  );
};
