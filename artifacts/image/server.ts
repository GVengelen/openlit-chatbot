import { createDocumentHandler } from '@/lib/artifacts/server';

export const imageDocumentHandler = createDocumentHandler<'image'>({
  kind: 'image',
  onCreateDocument: async ({ title, dataStream }) => {
    // Anthropic does not support image generation. Return an error message.
    const errorMsg = 'Image generation is not supported with Anthropic models.';
    dataStream.writeData({
      type: 'image-delta',
      content: '',
    });
    return errorMsg;
  },
  onUpdateDocument: async ({ description, dataStream }) => {
    // Anthropic does not support image generation. Return an error message.
    const errorMsg = 'Image generation is not supported with Anthropic models.';
    dataStream.writeData({
      type: 'image-delta',
      content: '',
    });
    return errorMsg;
  },
});
