import { useState } from 'react';

import { CloseOutlined, UpOutlined } from '@ant-design/icons';
import { useGeoFilterStore } from 'src/store/geoFilterStore';
import { useRadiusFilterStore } from 'src/store/radiusFilterStore';
import { cn } from 'src/utils';

export const ActiveFilters = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { radiusFilter, clearRadiusFilter } = useRadiusFilterStore();
  const { geoFilter, clearGeoFilter } = useGeoFilterStore();

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
        clearAction: clearRadiusFilter,
      });
    }

    if (geoFilter) {
      activeFilters.push({
        content: `Continent: ${geoFilter.selectedContinent.properties.CONTINENT}`,
        clearAction: clearGeoFilter,
      });
    }

    return activeFilters;
  };

  const activeFiltersList = getActiveFiltersList();

  return (
    <div
      className={cn('absolute bottom-0 left-0 z-[1000] pb-4 pl-4 transition-all duration-500', {
        'translate-y-full': isOpen,
      })}
    >
      <section className="relative rounded-md border-2 border-slate-300 bg-white px-6 py-4 shadow-xl">
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="absolute bottom-[calc(100%_+_16px)] left-0 rounded-md border-2 border-slate-300 bg-white px-2 py-1"
        >
          <div className="flex items-center gap-1 font-semibold uppercase text-slate-600">
            <span
              className={cn('flex', {
                'rotate-180': !isOpen,
              })}
            >
              <UpOutlined />
            </span>
            {isOpen ? 'show' : 'hide'}
          </div>
        </button>
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
                    className="flex opacity-50 transition-opacity duration-200 hover:opacity-100"
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
    </div>
  );
};
