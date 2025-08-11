-- Create FTS tsvector columns and triggers for Postgres
-- Statement.titleVector and StatementVersion.contentVector

-- Statements title tsvector
ALTER TABLE "Statement" ADD COLUMN IF NOT EXISTS "titleVector" tsvector;
CREATE INDEX IF NOT EXISTS statement_title_fts_idx ON "Statement" USING GIN ("titleVector");

CREATE OR REPLACE FUNCTION statement_title_vector_update() RETURNS trigger AS $$
BEGIN
  NEW."titleVector" := to_tsvector('simple', coalesce(NEW.title, ''));
  RETURN NEW;
END
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS statement_title_vector_trg ON "Statement";
CREATE TRIGGER statement_title_vector_trg BEFORE INSERT OR UPDATE OF title ON "Statement"
FOR EACH ROW EXECUTE FUNCTION statement_title_vector_update();

-- StatementVersion content tsvector
ALTER TABLE "StatementVersion" ADD COLUMN IF NOT EXISTS "contentVector" tsvector;
CREATE INDEX IF NOT EXISTS statement_version_content_fts_idx ON "StatementVersion" USING GIN ("contentVector");

CREATE OR REPLACE FUNCTION statement_version_content_vector_update() RETURNS trigger AS $$
BEGIN
  NEW."contentVector" := to_tsvector('simple', coalesce(NEW."contentText", ''));
  RETURN NEW;
END
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS statement_version_content_vector_trg ON "StatementVersion";
CREATE TRIGGER statement_version_content_vector_trg BEFORE INSERT OR UPDATE OF "contentText" ON "StatementVersion"
FOR EACH ROW EXECUTE FUNCTION statement_version_content_vector_update();

