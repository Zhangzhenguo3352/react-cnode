import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../Action/Index';
import {Tool, API, merged, GetNextPage} from '../Tool';
import {DataLoad} from './common/index';

class Main extends Component {
    render() {
        return (
            <div>详情</div>
        );
    }
}

export default Main;