import { blockContent } from "./blockContent"
import { category } from "./category"
import { post } from "./post"

/**
 * The document and object types the Studio loads.
 *
 * There is no author type: posts are published under the project's own byline,
 * which already exists as the canonical Organization in the site's linked data
 * (src/lib/structuredData.ts). A second copy in the CMS would only be one more
 * thing to keep in sync.
 */
export const schemaTypes = [post, category, blockContent]
