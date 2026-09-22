import { defineCliConfig } from 'sanity/cli'
import { dataset, projectId } from './env'

export default defineCliConfig({
  api: { projectId, dataset },
  // Ties `npm run deploy` to remember-when.sanity.studio instead of prompting
  studioHost: 'remember-when',
  deployment: { appId: 'x153i4irdj139oworw1e4ow1', autoUpdates: true },
})
