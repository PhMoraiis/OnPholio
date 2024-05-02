import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2'

export const pages = pgTable('pages', {
  id: text('id')
  .$defaultFn(() => createId ())
  .primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  created_at: timestamp('created_at').notNull(),
  updated_at: timestamp('updated_at').notNull()
})