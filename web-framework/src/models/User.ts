import axios, { AxiosResponse } from 'axios'
import { rootUrl } from '../index'
import { Eventing } from './Eventing'

interface UserProps {
  id?: number
  name?: string
  age?: number
}

export class User {
  public events: Eventing = new Eventing()

  constructor(private data: UserProps) {}

  get<K extends keyof UserProps>(propName: K): string | number | void {
    return this.data[propName]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
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
