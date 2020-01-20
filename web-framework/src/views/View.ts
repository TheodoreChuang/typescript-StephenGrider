import { Model } from '../models/Model'

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  abstract template(): string

  // declare event mappings
  eventsMap(): { [key: string]: () => void } {
    return {}
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':')

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  // onChange rerender
  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }

  // handles nestings UI components
  regions: { [key: string]: Element } = {}

  regionsMap(): { [key: string]: string } {
    return {}
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap()

    for (let key in regionsMap) {
      const selector = regionsMap[key]
      const element = fragment.querySelector(selector)

      if (element) {
        this.regions[key] = element
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = ''

    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)

    this.mapRegions(templateElement.content)

    this.onRender()

    this.parent.append(templateElement.content)
  }
}
