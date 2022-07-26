import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';
import Panel from '@/shared/components/Panel';

const social = [
  { id: 0, progress: 87, social: 'Sun' },
  { id: 1, progress: 65, social: 'Mon' },
  { id: 2, progress: 92, social: 'Tue' },
  { id: 3, progress: 81, social: 'Wed' },
  { id: 4, progress: 0, social: 'Thu' },
  { id: 5, progress: 18, social: 'Fri' },
  { id: 6, progress: 8, social: 'Sat' },
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

function AnnuallyChart() {
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
}

export default AnnuallyChart;
