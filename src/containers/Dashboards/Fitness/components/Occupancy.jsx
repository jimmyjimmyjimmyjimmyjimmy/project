import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { 
  Table, CardBody, Container, Row,
} from 'reactstrap';
import Panel from '@/shared/components/Panel';
import OccupancyTooltipContent from './OccupancyTooltipContent';

const data = [
  {
    name: '27/07',
    uv: 95,
    departure: 75,
    arrival: 10,
  },
];

const data01 = [
  {
    id: 0,
    color: 'blue',
    head: 'Pace',
    data: [{
      id: 0, value: 1.38,
    }],
  },
  {
    id: 1,
    color: 'green',
    head: 'Distance',
    data: [{
      id: 0, value: 2.05,
    }],
  },
  {
    id: 2,
    color: 'red',
    head: 'Time',
    data: [{
      id: 0, value: 2,
    }],
  },
];

const toPercent = (decimal, fixed = 0) => `${decimal.toFixed(fixed)}`;

const Occupancy = ({ dir, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <CardBody className="dashboard__card-widget">
      <div dir="ltr">
        <ResponsiveContainer height={260}>
          <ComposedChart data={data} margin={{ top: 20, left: -15 }}>
            <XAxis dataKey="name" tickLine={false} padding={{ left: 20 }} reversed={dir === 'rtl'} />
            <YAxis tickLine={false} tickFormatter={toPercent} orientation={dir === 'rtl' ? 'right' : 'left'} />
            <Tooltip content={<OccupancyTooltipContent colorForKey={{ uv: '#555555' }} theme={themeName} />} />
            <CartesianGrid vertical={false} />
            <Bar dataKey="uv" name="Stay overs" fill="#f2f4f7" barSize={20} />
            <Line type="linear" name="Departures" dataKey="departure" stroke="#b8e986" />
            <Line type="linear" name="Arrivals" dataKey="arrival" stroke="#48b5ff" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <hr />
    </CardBody>
  );
};

Occupancy.propTypes = {
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(Occupancy);
