import { Transformer } from '@pompom/core'
import { DOMParser, DOMSerializer, Node, Schema } from 'prosemirror-model'

export class HTMLTransformer<S extends Schema>
  implements Transformer<S, string> {
  private parser: DOMParser
  private serializer: DOMSerializer

  public constructor(schema: S) {
    this.parser = DOMParser.fromSchema<S>(schema)
    this.serializer = DOMSerializer.fromSchema<S>(schema)
    // this.serializer = new XMLSerializer()
  }

  public import(input?: string): Node<S> {
    const template = document.createElement('template')

    if (input !== undefined) {
      template.innerHTML = input
    }

    return this.parser.parse(template.content)
  }

  public export(output: Node<S>): string {
    const fragment = this.serializer.serializeFragment(output.content)

    // return xmlSerializer.serializeToString(fragment)

    const container = document.createElement('div')
    container.appendChild(fragment)

    return container.innerHTML
  }
}
