import { createId } from '@paralleldrive/cuid2'
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { tenants } from './tenants'

export const pages = pgTable('pages', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  tenantId: text('tenantId')
    .notNull()
    .references(() => tenants.id),
  name: text('name').notNull(),
  description: text('description'),
  created_at: timestamp('created_at').notNull(),
  updated_at: timestamp('updated_at').notNull()
})