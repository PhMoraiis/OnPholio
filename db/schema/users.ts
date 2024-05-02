import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2'

export const users = pgTable('users', {
  id: text('id')
  .$defaultFn(() => createId ())
  .primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  created_at: timestamp('created_at').notNull(),
  updated_at: timestamp('updated_at').notNull()
})