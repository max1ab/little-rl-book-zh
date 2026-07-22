import { docs } from "collections/server";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "/book",
  source: docs.toFumadocsSource(),
});
