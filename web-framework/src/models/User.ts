import { Model } from './Model'
import { ApiSync } from './ApiSync'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { rootUrl } from '../index'
import { Collection } from './Collection'
export interface UserProps {
  id?: number
  name?: string
  age?: number
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(new Attributes<UserProps>(attrs), new Eventing(), new ApiSync<UserProps>(`${rootUrl}/users`))
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(`${rootUrl}/users`, User.buildUser)
  }
}
