/**
 * Created by Administrator on 2017/2/24.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import {DatePicker, message} from 'antd';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            startValue: Date.now(),
            endValue: new Date('2017-9-1').getTime()
        };
    }

    handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
        this.setState({date});
    }

    disabledDate = (current) => {
        let currentvalue = current && current.valueOf();
        return currentvalue && currentvalue < this.state.startValue || currentvalue > this.state.endValue;
    }

    render() {
        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={value => this.handleChange(value)} disabledDate={this.disabledDate}/>
                <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));