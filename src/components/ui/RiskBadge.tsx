import React from 'react';
import { cn } from '../../lib/utils';

interface RiskBadgeProps {
  score: 'GREEN' | 'YELLOW' | 'RED';
  className?: string;
  label?: string;
}

export const RiskBadge: React.FC<RiskBadgeProps> = ({ score, className, label }) => {
  const configs = {
    GREEN: { bg: 'bg-accent/10', text: 'text-accent', defaultLabel: 'Niedriges Risiko' },
    YELLOW: { bg: 'bg-warning/10', text: 'text-warning', defaultLabel: 'Mittleres Risiko' },
    RED: { bg: 'bg-danger/10', text: 'text-danger', defaultLabel: 'Hohes Risiko' }
  };

  const config = configs[score];

  return (
    <div className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider',
      config.bg,
      config.text,
      className
    )}>
      <span className="w-2 h-2 rounded-full mr-2 bg-current" />
      {label || config.defaultLabel}
    </div>
  );
};
