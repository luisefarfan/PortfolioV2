import { column, defineDb, defineTable } from 'astro:db';

const ContactInformation = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    message: column.text(),
    lang: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    ContactInformation
  }
});
