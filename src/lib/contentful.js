import * as contentful from 'contentful';
import { contentful as contentfulAuth } from './variables'

export const client = contentful.createClient(contentfulAuth);
