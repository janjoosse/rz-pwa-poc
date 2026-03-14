import { Pipe, PipeTransform } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';

@Pipe({
  name: 'contentRichTextRenderer',
})
export class ContentRichTextRendererPipe implements PipeTransform {

  transform(value?: Document): string {
    if (!value) {
      return '';
    }
    if (typeof value === 'string') {
      return value;
    }
    return documentToHtmlString(value, this.options);
  }

  private options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any) => {
        return node.content.map((element: any) => element.value).join('');
      },
    }
  }
}
