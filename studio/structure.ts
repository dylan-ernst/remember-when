import type { StructureResolver } from 'sanity/structure'

const singletons = [
  { id: 'homePage', title: 'Home page' },
  { id: 'aboutPage', title: 'About page' },
  { id: 'servicesPage', title: 'Services page' },
  { id: 'contactPage', title: 'Contact page' },
  { id: 'siteSettings', title: 'Site settings' },
]

// Each page opens straight into its one document (id matches the type name)
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website')
    .items(
      singletons.map(({ id, title }) =>
        S.listItem().title(title).id(id).child(S.document().schemaType(id).documentId(id)),
      ),
    )
