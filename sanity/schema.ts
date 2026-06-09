import { SchemaTypeDefinition } from 'sanity';
import blog from './schemas/blog';
import caseStudy from './schemas/caseStudy';
import teamMember from './schemas/teamMember';
import jobListing from './schemas/jobListing';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, caseStudy, teamMember, jobListing],
};
