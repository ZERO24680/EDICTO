/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  try {
    // Statement.titleVector
    await prisma.$executeRawUnsafe(
      'ALTER TABLE "Statement" ADD COLUMN IF NOT EXISTS "titleVector" tsvector'
    );
    await prisma.$executeRawUnsafe(
      'CREATE INDEX IF NOT EXISTS statement_title_fts_idx ON "Statement" USING GIN ("titleVector")'
    );
    await prisma.$executeRawUnsafe(`
CREATE OR REPLACE FUNCTION statement_title_vector_update() RETURNS trigger AS $$
BEGIN
  NEW."titleVector" := to_tsvector('simple', coalesce(NEW.title, ''));
  RETURN NEW;
END
$$ LANGUAGE plpgsql;
`);
    await prisma.$executeRawUnsafe(
      'DROP TRIGGER IF EXISTS statement_title_vector_trg ON "Statement"'
    );
    await prisma.$executeRawUnsafe(
      'CREATE TRIGGER statement_title_vector_trg BEFORE INSERT OR UPDATE OF title ON "Statement" FOR EACH ROW EXECUTE FUNCTION statement_title_vector_update()'
    );

    // StatementVersion.contentVector
    await prisma.$executeRawUnsafe(
      'ALTER TABLE "StatementVersion" ADD COLUMN IF NOT EXISTS "contentVector" tsvector'
    );
    await prisma.$executeRawUnsafe(
      'CREATE INDEX IF NOT EXISTS statement_version_content_fts_idx ON "StatementVersion" USING GIN ("contentVector")'
    );
    await prisma.$executeRawUnsafe(`
CREATE OR REPLACE FUNCTION statement_version_content_vector_update() RETURNS trigger AS $$
BEGIN
  NEW."contentVector" := to_tsvector('simple', coalesce(NEW."contentText", ''));
  RETURN NEW;
END
$$ LANGUAGE plpgsql;
`);
    await prisma.$executeRawUnsafe(
      'DROP TRIGGER IF EXISTS statement_version_content_vector_trg ON "StatementVersion"'
    );
    await prisma.$executeRawUnsafe(
      'CREATE TRIGGER statement_version_content_vector_trg BEFORE INSERT OR UPDATE OF "contentText" ON "StatementVersion" FOR EACH ROW EXECUTE FUNCTION statement_version_content_vector_update()'
    );

    console.log("FTS triggers installed");
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // noop
  });

