import { json } from "@sveltejs/kit";
import {RequestHandler} from "@sveltejs/kit";

export const POST = (async ({request}) => {
  return json({foo:"bar"});
}) satisfies RequestHandler;