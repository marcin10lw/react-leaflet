import { prisma } from "../db/prisma";

export const findAllHighestPoints = async () => {
  const highestPoints = await prisma.highestPoint.findMany({});
  return highestPoints;
};

export const findHighestPointById = async (id: string) => {
  const highestPoint = prisma.city.findFirst({
    where: {
      id,
    },
  });

  return highestPoint;
};
