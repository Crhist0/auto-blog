import { Base64 } from 'js-base64';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import rehypeSanitize from 'rehype-sanitize';

const markdownDecodeAndParse = async (encriptedContent) => {
  return await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw) // *Parse* the raw HTML strings embedded in the tree
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(Base64.decode(encriptedContent));
};

export default markdownDecodeAndParse;
