import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2'
import { pages } from './pages';

export const sections = pgTable('sections', {
  id: text('id')
  .$defaultFn(() => createId ())
  .primaryKey(),
  pageId: text('pageId')
  .references(() => pages.id)
  .notNull(),
  name: text('name').notNull(),
  description: text('description'),
  position: integer('position').default(0),
  created_at: timestamp('created_at').notNull(),
  updated_at: timestamp('updated_at').notNull()
})