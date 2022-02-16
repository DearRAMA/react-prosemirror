## Installation

`npm install @dearrama/react-prosemirror`

or

`yarn add @dearrama/react-prosemirror`

## Usage

This example imports configuration from [@dearrama/react-prosemirror-config-default](https://www.npmjs.com/package/@dearrama/react-prosemirror-config-default).

```jsx
import { HtmlEditor } from '@dearrama/react-prosemirror'
import { plugins, schema, toolbar } from '@dearrama/react-prosemirror-config-default'

const initialValue = '<p></p>'

export const RichTextEditor = () => {
  const [value, setValue] = useState(initialValue)

  return (
    <HtmlEditor
      schema={schema}
      plugins={plugins}
      value={initialValue}
      handleChange={setValue}
      debounce={250}
    >
      <Toolbar toolbar={toolbar} />
      <Editor autoFocus />
    </HtmlEditor>
  )
}
```
