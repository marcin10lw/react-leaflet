import { prisma } from "../db/prisma";

export const findAllContinents = async () => {
  const continents = await prisma.continent.findMany({});
  return continents;
};

export const findContinentById = async (id: string) => {
  const continent = prisma.continent.findFirst({
    where: {
      id,
    },
  });

  return continent;
};
