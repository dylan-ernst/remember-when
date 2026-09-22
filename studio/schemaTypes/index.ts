import { aboutPage } from './aboutPage'
import { contactPage } from './contactPage'
import { homePage } from './homePage'
import { imageWithAlt } from './imageWithAlt'
import { servicesPage } from './servicesPage'
import { siteSettings } from './siteSettings'

export const schemaTypes = [imageWithAlt, siteSettings, homePage, aboutPage, servicesPage, contactPage]

export const singletonTypes = new Set([
  'siteSettings',
  'homePage',
  'aboutPage',
  'servicesPage',
  'contactPage',
])
