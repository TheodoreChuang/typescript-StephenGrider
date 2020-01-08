import { AxiosPromise, AxiosResponse } from 'axios'

interface ModelAttributes<T> {
  set(value: T): void
  get<K extends keyof T>(key: K): T[K]
  getAll(): T
}

interface Events {
  on(eventName: string, callback: () => void): void
  trigger(eventName: string): void
}

interface Sync<T> {
  fetch(id: number): AxiosPromise
  save(data: T): AxiosPromise
}

interface HasId {
  id?: number
}

export class Model<T extends HasId> {
  constructor(private attributes: ModelAttributes<T>, private events: Events, private sync: Sync<T>) {}

  // delegation
  get = this.attributes.get

  set(update: T) {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  on = this.events.on
  trigger = this.events.trigger

  fetch() {
    const id = this.get('id')

    if (typeof id !== 'number') throw new Error('Cannot fetch without an id')

    this.sync.fetch(id).then((res: AxiosResponse) => {
      this.set(res.data)
    })
  }

  save() {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse) => {
        this.trigger('save')
      })
      .catch(() => {
        this.trigger('error')
      })
  }
}
