## Installation

`npm install @dear-rama/react-prosemirror`

or

`yarn add @dear-rama/react-prosemirror`

## Usage

This example imports configuration from [@dear-rama/react-prosemirror-config-default](https://www.npmjs.com/package/@dear-rama/react-prosemirror-config-default).

```jsx
import { HtmlEditor } from '@dear-rama/react-prosemirror'
import { plugins, schema, toolbar } from '@dear-rama/react-prosemirror-config-default'

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
