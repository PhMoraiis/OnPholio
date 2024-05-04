import { createId } from '@paralleldrive/cuid2'
import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { pages } from './pages'
import { tenants } from './tenants'

export const sections = pgTable('sections', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  pageId: text('pageId')
    .references(() => pages.id)
    .notNull(),
  tenantId: text('tenantId')
    .notNull()
    .references(() => tenants.id),
  title: text('name').notNull(),
  description: text('description'),
  position: integer('position').default(0),
  created_at: timestamp('created_at').notNull(),
  updated_at: timestamp('updated_at').notNull()
})