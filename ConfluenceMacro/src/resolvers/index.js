import Resolver from '@forge/resolver';
import { TextArea, Label, Textfield } from '@forge/react';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);

  return 'Hello, world!';
});

export const handler = resolver.getDefinitions();
