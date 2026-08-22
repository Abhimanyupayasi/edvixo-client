"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

function getProject() {
  return new URLSearchParams(window.location.search).get("project") ?? "";
}

export function SelectedProjectField() {
  const project = useSyncExternalStore(subscribe, getProject, () => "");

  if (!project) return null;

  return (
    <div className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3">
      <input type="hidden" name="selectedProject" value={project} />
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Project inquiry</p>
      <p className="mt-1 text-sm font-medium text-on-background">You&apos;re asking about: {project}</p>
    </div>
  );
}
