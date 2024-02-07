import { prisma } from "../db/prisma";
import { findAllCities } from "../services/cities.service";
import AppError from "../utils/appError";
import { asyncWrapper } from "../utils/asyncWrapper";

export const getAllCitiesGeoJSON = asyncWrapper(async (req, res) => {
  const cities = await findAllCities();

  const citiesGeoJSON = {
    type: "FeatureCollection",
    features: cities.map((city) => ({
      type: "Feature",
      properties: {
        name: city.name,
        adm0name: city.adm0name,
        latitude: city.latitude,
        longitude: city.longitude,
        pop_max: city.pop_max,
      },
      geometry: {
        type: "Point",
        coordinates: city.coordinates,
      },
    })),
  };

  res.status(200).json({ citiesGeoJSON });
});

export const getCityGeoJSON = asyncWrapper(async (req, res, next) => {
  const { id } = req.body;

  const city = await prisma.city.findFirst({
    where: { id },
  });

  if (!city) {
    throw new AppError("City not found", 404);
  }

  const cityGeoJSON = {
    type: "Feature",
    properties: {
      name: city.name,
      adm0name: city.adm0name,
      latitude: city.latitude,
      longitude: city.longitude,
      pop_max: city.pop_max,
    },
    geometry: {
      type: "Point",
      coordinates: city.coordinates,
    },
  };

  res.status(200).json({ cityGeoJSON });
});
