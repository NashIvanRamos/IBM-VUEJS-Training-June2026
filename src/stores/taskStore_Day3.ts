import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Task {
  id: number
  name: string
  done: boolean
  dueDate: string
}

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([
    { id: 1, name: 'Complete Vue Router assignment', done: false, dueDate: '2026-06-20' },
    { id: 2, name: 'Study Pinia state management', done: true, dueDate: '2026-06-22' },
    { id: 3, name: 'Build a todo app', done: false, dueDate: '2026-06-15' },
    { id: 4, name: 'Learn TypeScript basics', done: false, dueDate: '2026-06-25' },
    { id: 5, name: 'Practice component composition', done: false, dueDate: '2026-06-18' },
  ])

  return {
    tasks
  }
})
