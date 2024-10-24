import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { assertAuthenticated } from "@/app/lib/auth-utils"; 
import { favorites } from "../db/schema";

const getFavorites = async () => {
  const userId = await assertAuthenticated();

  const allFavorites = await db.query.favorites.findMany({
    where: eq(favorites.userId, userId),
  });

  return allFavorites;
}

export { getFavorites }