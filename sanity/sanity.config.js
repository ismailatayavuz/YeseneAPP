import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'yesene',

  projectId: 'mjutw6qx',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: 'v2021-10-21',
      // defaultDataset: 'production',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
