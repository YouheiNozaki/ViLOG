import type { Topic, Prisma } from "@prisma/client";
import type { ResourceProps, ResourceSchema } from "./resource";
import { resourcePropsSchema, resourceSchema } from "./resource";
import { AuthorSchema } from "./author";
import { KeywordPropSchema, KeywordSchema } from "./keyword";

export type TopicProps = Pick<
  Prisma.TopicCreateInput,
  "name" | "language" | "timeRequired" | "shared" | "license" | "description"
> & {
  resource: ResourceProps;
  keywords?: KeywordPropSchema[];
};

export type TopicSchema = Topic & {
  authors: AuthorSchema[];
  keywords: KeywordSchema[];
  resource: ResourceSchema;
};

export const topicPropsSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    language: { type: "string", nullable: true },
    timeRequired: { type: "integer" },
    shared: { type: "boolean", nullable: true },
    license: { type: "string" },
    description: { type: "string" },
    resource: resourcePropsSchema,
    keywords: {
      type: "array",
      items: KeywordPropSchema,
    },
  },
} as const;

export const topicSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
    language: { type: "string" },
    timeRequired: { type: "integer" },
    shared: { type: "boolean" },
    license: { type: "string" },
    description: { type: "string" },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
    details: { type: "object" },
    authors: { type: "array", items: AuthorSchema },
    keywords: { type: "array", items: KeywordSchema },
    resource: resourceSchema,
  },
} as const;
