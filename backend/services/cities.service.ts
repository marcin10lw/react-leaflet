import { prisma } from "../db/prisma";

export const findAllCities = async () => {
  const cities = await prisma.city.findMany({});
  return cities;
};

export const findCityById = async (id: string) => {
  const city = prisma.city.findFirst({
    where: {
      id,
    },
  });

  return city;
};
