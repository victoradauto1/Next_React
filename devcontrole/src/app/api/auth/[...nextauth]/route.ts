import nextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = nextAuth(authOptions);

export {handler as GEt, handler as POST}
