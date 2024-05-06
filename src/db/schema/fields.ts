import { createId } from '@paralleldrive/cuid2'
import { integer, pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { sections } from './sections'
import { tenants } from './tenants'

export const fieldTypeEnum = pgEnum('field_type', ['text', 'image'])

export const fields = pgTable('fields', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  sectionId: text('sectionId')
    .references(() => sections.id)
    .notNull(),
  tenantId: text('tenantId')
    .notNull()
    .references(() => tenants.id),
  name: text('name').notNull(),
  nameKey: text('nameKey').notNull().unique(),
  fieldType: fieldTypeEnum('fieldType').notNull(),
  content: text('content'),
  position: integer('position').default(0),
  created_at: timestamp('created_at').notNull(),
  updated_at: timestamp('updated_at').notNull(),
})