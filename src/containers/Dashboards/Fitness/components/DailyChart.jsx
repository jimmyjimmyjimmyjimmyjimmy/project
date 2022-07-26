import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Progress } from 'reactstrap';
import Panel from '@/shared/components/Panel';

const social = [
  { id: 0, progress: 87, social: '6AM' },
  { id: 1, progress: 65, social: '' },
  { id: 2, progress: 92, social: '' },
  { id: 3, progress: 81, social: '' },
  { id: 4, progress: 0, social: '' },
  { id: 5, progress: 18, social: '' },
  { id: 6, progress: 8, social: 'Noon' },
  { id: 7, progress: 87, social: '' },
  { id: 8, progress: 65, social: '' },
  { id: 9, progress: 92, social: '' },
  { id: 10, progress: 81, social: '' },
  { id: 11, progress: 0, social: '' },
  { id: 12, progress: 18, social: '6PM' },
  { id: 13, progress: 8, social: '' },
  { id: 14, progress: 87, social: '' },
  { id: 15, progress: 65, social: '' },
  { id: 16, progress: 92, social: '' },
  { id: 17, progress: 81, social: '' },
  { id: 18, progress: 0, social: 'Midnight' },
  { id: 19, progress: 18, social: '' },
  { id: 20, progress: 8, social: '' },
  { id: 21, progress: 87, social: '' },
  { id: 22, progress: 65, social: '' },
  { id: 23, progress: 92, social: '' },


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
