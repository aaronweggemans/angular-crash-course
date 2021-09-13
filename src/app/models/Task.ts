export interface Task {
  // a question mark makes the value optional
  id?: number
  text: string
  day: string
  reminder: boolean
}