const PropTypes = require('prop-types');
/* @flow */
const React = require('react');

const ExcelColumnShape = {
  name: PropTypes.node.isRequired,
  key: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  filterable: PropTypes.bool
};

module.exports = ExcelColumnShape;
