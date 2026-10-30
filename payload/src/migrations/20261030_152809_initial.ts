import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`owners_sessions\` (
    \`_order\` integer NOT NULL,
    \`_parent_id\` integer NOT NULL,
    \`id\` text PRIMARY KEY NOT NULL,
    \`created_at\` text,
    \`expires_at\` text NOT NULL,
    FOREIGN KEY (\`_parent_id\`) REFERENCES \`owners\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`owners_sessions_order_idx\` ON \`owners_sessions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`owners_sessions_parent_id_idx\` ON \`owners_sessions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`owners\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    \`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    \`email\` text NOT NULL,
    \`reset_password_token\` text,
    \`reset_password_expiration\` text,
    \`salt\` text,
    \`hash\` text,
    \`reset_password_requested_at\` text,
    \`login_attempts\` numeric DEFAULT 0,
    \`lock_until\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`owners_updated_at_idx\` ON \`owners\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`owners_created_at_idx\` ON \`owners\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`owners_email_idx\` ON \`owners\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`sessions\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`key\` text NOT NULL,
    \`value\` text NOT NULL,
    \`expires_at\` text,
    \`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    \`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`sessions_key_idx\` ON \`sessions\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`sessions_expires_at_idx\` ON \`sessions\` (\`expires_at\`);`)
  await db.run(sql`CREATE INDEX \`sessions_updated_at_idx\` ON \`sessions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`sessions_created_at_idx\` ON \`sessions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`challenges\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`key\` text NOT NULL,
    \`value\` text NOT NULL,
    \`expires_at\` text,
    \`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    \`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`challenges_key_idx\` ON \`challenges\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`challenges_expires_at_idx\` ON \`challenges\` (\`expires_at\`);`)
  await db.run(sql`CREATE INDEX \`challenges_updated_at_idx\` ON \`challenges\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`challenges_created_at_idx\` ON \`challenges\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`limits\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`key\` text NOT NULL,
    \`value\` text NOT NULL,
    \`expires_at\` text,
    \`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    \`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`limits_key_idx\` ON \`limits\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`limits_expires_at_idx\` ON \`limits\` (\`expires_at\`);`)
  await db.run(sql`CREATE INDEX \`limits_updated_at_idx\` ON \`limits\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`limits_created_at_idx\` ON \`limits\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`post_requests\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`key\` text NOT NULL,
    \`value\` text NOT NULL,
    \`expires_at\` text,
    \`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    \`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`post_requests_key_idx\` ON \`post_requests\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`post_requests_expires_at_idx\` ON \`post_requests\` (\`expires_at\`);`)
  await db.run(sql`CREATE INDEX \`post_requests_updated_at_idx\` ON \`post_requests\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`post_requests_created_at_idx\` ON \`post_requests\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`scores\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`key\` text NOT NULL,
    \`name\` text NOT NULL,
    \`name_key\` text NOT NULL,
    \`name_source\` text NOT NULL,
    \`owner_key\` text NOT NULL,
    \`name_consent\` integer DEFAULT false,
    \`remaining_seconds\` numeric NOT NULL,
    \`attempt\` numeric NOT NULL,
    \`words_completed\` numeric NOT NULL,
    \`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    \`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`scores_key_idx\` ON \`scores\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`scores_name_key_idx\` ON \`scores\` (\`name_key\`);`)
  await db.run(sql`CREATE INDEX \`scores_owner_key_idx\` ON \`scores\` (\`owner_key\`);`)
  await db.run(sql`CREATE INDEX \`scores_remaining_seconds_idx\` ON \`scores\` (\`remaining_seconds\`);`)
  await db.run(sql`CREATE INDEX \`scores_updated_at_idx\` ON \`scores\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`scores_created_at_idx\` ON \`scores\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`visits\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`key\` text NOT NULL,
    \`secret_hash\` text NOT NULL,
    \`environment\` text NOT NULL,
    \`device\` text NOT NULL,
    \`last_seen_at\` text NOT NULL,
    \`value\` text NOT NULL,
    \`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    \`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`visits_key_idx\` ON \`visits\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`visits_environment_idx\` ON \`visits\` (\`environment\`);`)
  await db.run(sql`CREATE INDEX \`visits_last_seen_at_idx\` ON \`visits\` (\`last_seen_at\`);`)
  await db.run(sql`CREATE INDEX \`visits_updated_at_idx\` ON \`visits\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`visits_created_at_idx\` ON \`visits\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`attempts\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`key\` text NOT NULL,
    \`visit_key\` text NOT NULL,
    \`environment\` text NOT NULL,
    \`outcome\` text NOT NULL,
    \`sequence\` numeric NOT NULL,
    \`last_seen_at\` text NOT NULL,
    \`value\` text NOT NULL,
    \`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    \`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`attempts_key_idx\` ON \`attempts\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`attempts_visit_key_idx\` ON \`attempts\` (\`visit_key\`);`)
  await db.run(sql`CREATE INDEX \`attempts_environment_idx\` ON \`attempts\` (\`environment\`);`)
  await db.run(sql`CREATE INDEX \`attempts_outcome_idx\` ON \`attempts\` (\`outcome\`);`)
  await db.run(sql`CREATE INDEX \`attempts_last_seen_at_idx\` ON \`attempts\` (\`last_seen_at\`);`)
  await db.run(sql`CREATE INDEX \`attempts_updated_at_idx\` ON \`attempts\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`attempts_created_at_idx\` ON \`attempts\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`key\` text NOT NULL,
    \`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`global_slug\` text,
    \`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    \`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`order\` integer,
    \`parent_id\` integer NOT NULL,
    \`path\` text NOT NULL,
    \`owners_id\` integer,
    \`sessions_id\` integer,
    \`challenges_id\` integer,
    \`limits_id\` integer,
    \`post_requests_id\` integer,
    \`scores_id\` integer,
    \`visits_id\` integer,
    \`attempts_id\` integer,
    FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
    FOREIGN KEY (\`owners_id\`) REFERENCES \`owners\`(\`id\`) ON UPDATE no action ON DELETE cascade,
    FOREIGN KEY (\`sessions_id\`) REFERENCES \`sessions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
    FOREIGN KEY (\`challenges_id\`) REFERENCES \`challenges\`(\`id\`) ON UPDATE no action ON DELETE cascade,
    FOREIGN KEY (\`limits_id\`) REFERENCES \`limits\`(\`id\`) ON UPDATE no action ON DELETE cascade,
    FOREIGN KEY (\`post_requests_id\`) REFERENCES \`post_requests\`(\`id\`) ON UPDATE no action ON DELETE cascade,
    FOREIGN KEY (\`scores_id\`) REFERENCES \`scores\`(\`id\`) ON UPDATE no action ON DELETE cascade,
    FOREIGN KEY (\`visits_id\`) REFERENCES \`visits\`(\`id\`) ON UPDATE no action ON DELETE cascade,
    FOREIGN KEY (\`attempts_id\`) REFERENCES \`attempts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_owners_id_idx\` ON \`payload_locked_documents_rels\` (\`owners_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_sessions_id_idx\` ON \`payload_locked_documents_rels\` (\`sessions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_challenges_id_idx\` ON \`payload_locked_documents_rels\` (\`challenges_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_limits_id_idx\` ON \`payload_locked_documents_rels\` (\`limits_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_post_requests_id_idx\` ON \`payload_locked_documents_rels\` (\`post_requests_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_scores_id_idx\` ON \`payload_locked_documents_rels\` (\`scores_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_visits_id_idx\` ON \`payload_locked_documents_rels\` (\`visits_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_attempts_id_idx\` ON \`payload_locked_documents_rels\` (\`attempts_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`key\` text,
    \`value\` text,
    \`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    \`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`order\` integer,
    \`parent_id\` integer NOT NULL,
    \`path\` text NOT NULL,
    \`owners_id\` integer,
    FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
    FOREIGN KEY (\`owners_id\`) REFERENCES \`owners\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_owners_id_idx\` ON \`payload_preferences_rels\` (\`owners_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`name\` text,
    \`batch\` numeric,
    \`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    \`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`owners_sessions\`;`)
  await db.run(sql`DROP TABLE \`owners\`;`)
  await db.run(sql`DROP TABLE \`sessions\`;`)
  await db.run(sql`DROP TABLE \`challenges\`;`)
  await db.run(sql`DROP TABLE \`limits\`;`)
  await db.run(sql`DROP TABLE \`post_requests\`;`)
  await db.run(sql`DROP TABLE \`scores\`;`)
  await db.run(sql`DROP TABLE \`visits\`;`)
  await db.run(sql`DROP TABLE \`attempts\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
}
