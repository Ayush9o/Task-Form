export interface task {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
  project: string;
  assignee?: string;
  createdBy: string;
  dueDate?: string;
  position: number;
  createdAt: string;
  updatedAt: string;
}
