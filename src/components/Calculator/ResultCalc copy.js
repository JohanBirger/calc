import React, {Component} from 'react';

class ResultCalc extends Component {


    render() {
        let {resultCalc} = this.props;
        return (
            <div className="result-calc">
                <p className="numbers">{resultCalc}</p>
            </div>
    )
        ;
    }
}


export default ResultCalc;