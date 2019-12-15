import { AxiosResponse } from 'axios'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { Sync } from './Sync'
import { rootUrl } from '../index'

export interface UserProps {
  id?: number
  name?: string
  age?: number
}

export class User {
  // composition via sub modules
  public attributes: Attributes<UserProps>
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs)
  }

  // delegation
  get get() {
    return this.attributes.get
  }

  set(update: UserProps) {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

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
