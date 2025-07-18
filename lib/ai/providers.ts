import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

import openlit from 'openlit';

openlit.init({
  instrumentations: {
    anthropic: anthropic,
  },
});

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model': anthropic('claude-3-haiku-20240307'),
        'chat-model-reasoning': wrapLanguageModel({
          model: anthropic('claude-3-sonnet-20240229'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': anthropic('claude-3-haiku-20240307'),
        'artifact-model': anthropic('claude-3-haiku-20240307'),
      },
    });
