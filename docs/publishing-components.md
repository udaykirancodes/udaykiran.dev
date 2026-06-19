# Publishing a New Component

This document outlines the steps to publish a new component in the registry so it appears on the `/components` page with its own documentation.

## Step 1: Create the component source

Place your component in `src/core/<component-name>/index.tsx`.

It should export named components (or a default export) and use `cn()` from `@/lib/utils` for className merging.

## Step 2: Register in `registry.json`

Add a new entry to the `items` array in `registry.json`:

```json
{
  "name": "<component-name>",
  "type": "registry:component",
  "title": "<Display Title>",
  "description": "<Short description>",
  "registryDependencies": [],
  "files": [
    {
      "path": "src/core/<component-name>/index.tsx",
      "type": "registry:component",
      "target": "src/components/ui/<component-name>.tsx"
    }
  ]
}
```

- `registryDependencies`: List any shadcn/ui components it depends on (e.g., `["button", "tooltip"]`)
- `files[].path`: Source path relative to project root
- `files[].target`: Where the file lands when installed via `npx shadcn add`

## Step 3: Create a demo component

Create `src/app/(root)/components/(mdx)/<component-name>/demo.tsx`:

```tsx
"use client"

const Demo = () => {
  return (
    // Your demo JSX here
  )
}

export default Demo
```

This demo is rendered on the components listing page and in the MDX doc.

## Step 4: Add to the component map

Edit `src/components/code/component-map.tsx`:

1. Import your demo:

   ```tsx
   import ComponentDemo from "@/app/(root)/components/(mdx)/<component-name>/demo"
   ```

2. Add to `COMPONENT_MAP`:
   ```tsx
   "<component-name>": (
     <div className="flex w-full items-center justify-center">
       <ComponentDemo />
     </div>
   ),
   ```

## Step 5: Create the MDX documentation page

Create `src/app/(root)/components/(mdx)/<component-name>/page.mdx`:

```mdx
import { getComponentTitle, metadataMap } from "@/lib/og"

export const metadata = {
  title: getComponentTitle("<component-name>"),
  ...metadataMap["<component-name>"],
}

<PreviewComponentWithCode
  componentName="<component-name>"
  demoCodePath="src/app/(root)/components/(mdx)/<component-name>/demo.tsx"
/>

<Separator />

# Installation

<CommandWrapper componentName={"<component-name>"} />
```

> The `demoCodePath` prop makes the Code tab show your demo source instead of the component source. Omit it to show the component source by default.

You can extend the MDX with usage examples, API docs, and variants using the available MDX components (Button, Tabs, Code, etc.).

## Step 6: Rebuild the registry

```sh
pnpm run registry:build
```

This regenerates `public/r/<component-name>.json` with the inlined source code.

## Verification

- The component should appear on `/components`
- The documentation page should be accessible at `/components/<component-name>`
- Run `pnpm run lint` to check for any issues
