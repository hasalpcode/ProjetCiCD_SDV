export interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
  priority: string;
  tags: string[];
}