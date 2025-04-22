import React from "react";
import Column from "./Column";

const Board: React.FC = () => {
  const columns = [
    { title: "Backlog", count: 5, tasks: ["Look into render bug in dashboard", "SOX compliance checklist", "[SPIKE] Migrate to Azure", "Document Notifications service"] },
    { title: "TODO", count: 4, tasks: ["Research DB options for new microservice", "Postmortem for outage", "Sync with product on Q3 roadmap"] },
    { title: "In progress", count: 3, tasks: ["Refactor context providers to use Zustand", "Add logging to daily CRON"] },
    { title: "Complete", count: 2, tasks: ["Set up DD dashboards for Lambda listener"] },
  ];

  return (
    <div className="board">
      {columns.map((column, index) => (
        <Column key={index} title={column.title} count={column.count} tasks={column.tasks} />
      ))}
    </div>
  );
};

export default Board;