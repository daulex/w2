import { error } from '@sveltejs/kit';
import clientPromise from '../lib/mongo.js';

// +page.server.js
/** @type {import('./$types').Actions} */
export const actions = {
  default: ({url}) => {
    const min = Number(parseInt(url.searchParams.get('min')) ?? '0');
    const max = Number(parseInt(url.searchParams.get('max')) ?? '1');
  
    const d = max - min;
  
    if (isNaN(d) || d < 0) {
      throw error(400, 'min and max must be numbers, and min must be less than max');
    }
  
    const random = min + Math.random() * d;
  
    return {
      random
    };
  }
};
