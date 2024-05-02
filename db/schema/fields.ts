import { pgEnum, pgTable, text, timestamp, integer } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2'
import { sections } from './sections';


export const fieldTypeEnum = pgEnum('field_type', ['text', 'image'])

export const fields = pgTable('fields', {
  id: text('id')
  .$defaultFn(() => createId ())
  .primaryKey(),
  sectionId: text('sectionId')
  .references(() => sections.id)
  .notNull(),
  key: text('key').notNull(),
  field: fieldTypeEnum('field').notNull(),
  content: text('content'),
  position: integer('position').default(0),
  created_at: timestamp('created_at').notNull(),
  updated_at: timestamp('updated_at').notNull()
})