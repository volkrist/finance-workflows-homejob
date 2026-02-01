import { useCallback, useEffect, useMemo, useState } from "react";
import type { Workflow } from "./data/workflows";
import { WorkflowList } from "./components/WorkflowList";
import { WorkflowDetail } from "./components/WorkflowDetail";

const STORAGE_KEY = "workflow-completed";

type ApiStep = { id: string; title: string; doneHint: string };
type ApiWorkflow = { id: string; title: string; description?: string; steps: ApiStep[] };

function getCompletedSteps(): Record<string, string[]> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function setCompletedStep(workflowId: string, stepId: string) {
  const completed = getCompletedSteps();
  const list = completed[workflowId] ?? [];
  if (!list.includes(stepId)) {
    completed[workflowId] = [...list, stepId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }
}

function apiWorkflowToWorkflow(api: ApiWorkflow, completedStepIds: string[]): Workflow {
  return {
    id: api.id,
    name: api.title,
    description: api.description,
    steps: api.steps.map((s) => ({
      id: s.id,
      title: s.title,
      status: completedStepIds.includes(s.id) ? "completed" : "pending",
    })),
  };
}

export default function App() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/workflows")
      .then((res) => res.json())
      .then((data: { workflows: ApiWorkflow[] }) => {
        const completed = getCompletedSteps();
        const mapped = data.workflows.map((w) =>
          apiWorkflowToWorkflow(w, completed[w.id] ?? [])
        );
        setWorkflows(mapped);
        if (!selectedId && mapped.length > 0) setSelectedId(mapped[0].id);
      })
      .catch((e) => setError(String(e)))
      .finally(() => setLoading(false));
  }, []);

  const selected = useMemo(
    () => workflows.find((w) => w.id === selectedId) ?? null,
    [workflows, selectedId]
  );

  const onCompleteStep = useCallback(
    async (workflowId: string, stepId: string) => {
      const res = await fetch(`/api/workflows/${workflowId}/complete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stepId }),
      });
      if (!res.ok) return;
      setCompletedStep(workflowId, stepId);
      setWorkflows((prev) =>
        prev.map((w) =>
          w.id !== workflowId
            ? w
            : {
              ...w,
              steps: w.steps.map((s) =>
                s.id === stepId ? { ...s, status: "completed" as const } : s
              ),
            }
        )
      );
    },
    []
  );

  if (loading) return <div style={{ padding: 24 }}>Loading…</div>;
  if (error) return <div style={{ padding: 24 }}>Error: {error}</div>;

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "system-ui, Arial" }}>
      <WorkflowList workflows={workflows} selectedId={selectedId} onSelect={setSelectedId} />
      <WorkflowDetail workflow={selected} onCompleteStep={onCompleteStep} />
    </div>
  );
}
