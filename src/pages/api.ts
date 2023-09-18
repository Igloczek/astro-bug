import test from "../test";
import { value } from "../broken";

export async function GET() {
  return new Response(JSON.stringify({ test, value }));
}
