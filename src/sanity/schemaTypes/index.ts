import { type SchemaTypeDefinition } from "sanity";
import { memberType } from "./memberType";
import { blockContentType } from "./blockContentType";
import { authorType } from "./authorType";
import { postType } from "./postType";
import { categoryType } from "./categoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [memberType, blockContentType, authorType, postType, categoryType],
};
