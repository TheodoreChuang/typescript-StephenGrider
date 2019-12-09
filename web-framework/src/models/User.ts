import axios, { AxiosResponse } from 'axios'
import { rootUrl } from '../index'

interface UserProps {
  id?: number
  name?: string
  age?: number
}

// type alias
type Callback = () => {}

export class User {
  constructor(private data: UserProps) {}

  events: { [key: string]: Callback[] } = {}

  get<K extends keyof UserProps>(propName: K): string | number | void {
    return this.data[propName]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName]

    if (!handlers || handlers.length === 0) return

    handlers.forEach(callback => callback())
  }

  fetch(): void {
    axios.get(`${rootUrl}/users/${this.get('id')}`).then((response: AxiosResponse): void => {
      this.set(response.data)
    })
  }

  save(): void {
    const id = this.get('id')
    if (id) {
      axios.put(`${rootUrl}/users/${id}`, this.data)
    } else {
      axios.post(`${rootUrl}/users`, this.data)
    }
  }
}
