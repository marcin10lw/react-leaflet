import { CloseOutlined } from '@ant-design/icons';
import { useGeoFilterStore } from 'src/store/geoFilterStore';
import { useRadiusFilterStore } from 'src/store/radiusFilterStore';

export const ActiveFilters = () => {
  const { radiusFilter, setRadiusFilter } = useRadiusFilterStore();
  const { geoFilter, setGeoFilter } = useGeoFilterStore();

  const getActiveFiltersList = () => {
    const activeFilters: {
      content: string;
      clearAction: () => void;
    }[] = [];

    if (radiusFilter) {
      const {
        radius,
        cityFeature: { geometry },
      } = radiusFilter;
      const [lng, lat] = geometry.coordinates;

      activeFilters.push({
        content: `Center: (Lat: ${lat.toFixed(2)}, Lon: ${lng.toFixed(2)}) Radius: ${radius}`,
        clearAction: () => setRadiusFilter(null),
      });
    }

    if (geoFilter) {
      activeFilters.push({
        content: `Continent: ${geoFilter.selectedContinent.properties.CONTINENT}`,
        clearAction: () => setGeoFilter(null),
      });
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
            {activeFiltersList.map(({ content, clearAction }) => (
              <li
                className="flex items-center gap-2 py-1 pl-2 text-lg text-slate-800"
                key={content}
              >
                <span className="h-2 w-2 rounded-full bg-slate-500" />
                <div>{content}</div>
                <button
                  className="opacity-50 transition-opacity duration-200 hover:opacity-100"
                  onClick={clearAction}
                >
                  <CloseOutlined />
                </button>
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
