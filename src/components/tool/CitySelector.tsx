import React from 'react';
import { benchmarks } from '../../lib/benchmarks';
import { cn } from '../../lib/utils';
import { MapPin } from 'lucide-react';

interface CitySelectorProps {
  value: string;
  onChange: (city: string) => void;
}

export const CitySelector: React.FC<CitySelectorProps> = ({ value, onChange }) => {
  const cities = Object.keys(benchmarks).filter(c => c !== 'default');

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {cities.map((city) => (
        <button
          key={city}
          type="button"
          onClick={() => onChange(city)}
          className={cn(
            "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all group",
            value === city 
              ? "border-primary bg-primary-light text-primary shadow-sm" 
              : "border-gray-100 bg-white hover:border-primary/30 hover:bg-surface text-muted"
          )}
        >
          <MapPin className={cn("w-6 h-6 mb-2 transition-transform", value === city && "scale-110")} />
          <span className="font-semibold text-sm">{city}</span>
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange('andere')}
        className={cn(
          "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all",
          value === 'andere' || !cities.includes(value) && value !== ''
            ? "border-primary bg-primary-light text-primary shadow-sm" 
            : "border-gray-100 bg-white hover:border-primary/30 hover:bg-surface text-muted"
        )}
      >
        <span className="font-semibold text-sm">Andere Stadt</span>
      </button>
    </div>
  );
};
