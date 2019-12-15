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
  public attributes: Attributes<UserProps>
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs)
  }
}
