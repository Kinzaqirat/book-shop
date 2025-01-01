// ./lib/sanity.ts
import { createClient } from '@sanity/client';


export const SanityClient = createClient({
  projectId: 'kovj2ddf', // Replace with your project ID
  dataset: 'production',       // Replace with your dataset name
    // Use today's date or the API version you need
  useCdn: true,                // Use CDN for faster responses
});



    


