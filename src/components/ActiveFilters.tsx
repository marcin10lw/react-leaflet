import { useGeoFilterStore } from 'src/store/geoFilterStore';
import { useRadiusFilterStore } from 'src/store/radiusFilterStore';

export const ActiveFilters = () => {
  const radiusFilter = useRadiusFilterStore((state) => state.radiusFilter);
  const geoFilter = useGeoFilterStore((state) => state.geoFilter);

  const getActiveFiltersList = () => {
    const activeFilters: string[] = [];

    if (radiusFilter) {
      const {
        radius,
        cityFeature: { geometry },
      } = radiusFilter;
      const [lng, lat] = geometry.coordinates;

      activeFilters.push(
        `Center: (Lat: ${lat.toFixed(2)}, Lon: ${lng.toFixed(2)}) Radius: ${radius}`,
      );
    }

    if (geoFilter) {
      activeFilters.push(`Continent: ${geoFilter.selectedContinent.properties.CONTINENT}`);
    }

    return activeFilters;
  };

  const activeFiltersList = getActiveFiltersList();

  return (
    <section className="rounded-md border-2 border-slate-300 bg-white px-6 py-4 shadow-xl">
      <h2 className="text-lg font-bold text-slate-800">Active Filters</h2>
      <div>
        {activeFiltersList.length > 0 ? (
          <ul>
            {activeFiltersList.map((activeFilter) => (
              <li
                className="flex items-center gap-2 py-1 pl-2 text-lg text-slate-800"
                key={activeFilter}
              >
                <span className="h-2 w-2 rounded-full bg-slate-500" />
                <div>{activeFilter}</div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-lg text-slate-500">No active filters</div>
        )}
      </div>
    </section>
  );
};
