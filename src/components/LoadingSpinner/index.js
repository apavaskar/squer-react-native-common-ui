import React from 'react';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectSpinner} from '@squer-react-native-common/redux';

const LoadingSpinner = ({spinner}) =>
  spinner?.showSpinner ? (
    <ActivityIndicator size="large" color="#00BFFF" />
  ) : null;

LoadingSpinner.propTypes = {
  spinner: PropTypes.object.isRequired,
};

const mapState = state => {
  const spinner = selectSpinner(state);
  return {spinner};
};

export default connect(mapState)(LoadingSpinner);
