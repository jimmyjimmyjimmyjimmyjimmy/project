import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Progress } from 'reactstrap';
import Panel from '@/shared/components/Panel';

const social = [
  { id: 0, progress: 87, social: 'Jan' },
  { id: 1, progress: 65, social: 'Feb' },
  { id: 2, progress: 92, social: 'Mar' },
  { id: 3, progress: 81, social: 'Apr' },
  { id: 4, progress: 0, social: 'May' },
  { id: 5, progress: 18, social: 'Jun' },
  { id: 6, progress: 8, social: 'Jul' },
  { id: 7, progress: 8, social: 'Aug' },
  { id: 8, progress: 8, social: 'Sep' },
  { id: 9, progress: 8, social: 'Oct' },
  { id: 10, progress: 8, social: 'Nov' },
  { id: 11, progress: 8, social: 'Dec' },
];

const SocialScore = ({ children, progress }) => (
  <div className="dashboard__social-stat-item">
    <div className="dashboard__social-stat-title">
      {children}
    </div>
    <div className="dashboard__social-stat-progress progress--wide">
      <div className="progress-wrap progress-wrap--small progress-wrap--blue-gradient progress-wrap--rounded">
        <p className="progress__label">{progress}%</p>
        <Progress value={progress} />
      </div>
    </div>
  </div>
);

SocialScore.propTypes = {
  progress: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

const AnnuallyChart = () => {
  const { t } = useTranslation('common');

  return (
    <div className="dashboard__social-marketing">
      <div className="dashboard__social-stat">
        {social.map(item => (
          <SocialScore key={item.id} progress={item.progress}>
            {item.social}
          </SocialScore>
        ))}
      </div>
    </div>
  );
};

export default AnnuallyChart;
