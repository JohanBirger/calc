import React, { Component } from 'react';
import '../../App.css'
import ResultCalc from './ResultCalc'
import Keypad from './Keypad'

class Calculator extends Component {
    constructor(){
        super();

        this.state = {
            resultCalc: " "
        }
    }

    onClick = button => {
        if(button === "="){
            this.calculate()
        }
        else if(button === "C"){
            this.reset()

        }
        else if(button === "CE"){
            this.backspace()
        }
        else{
            this.setState({
                resultCalc: this.state.resultCalc + button
            })
        }
    };

    calculate = () => {
        var checkResult = ''
        if(this.state.resultCalc.includes('--')){
            checkResult = this.state.resultCalc.replace('--','+')
        }

        else {
            checkResult = this.state.resultCalc
        }

        try {
            this.setState({
                // eslint-disable-next-line
                resultCalc: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                resultCalc: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            resultCalc:""
        })
    };

    backspace = () =>{
        this.setState({
            result:this.state.resultCalc.slice(0,-1)
        })
    };


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1 className="fade-in"> Calculator</h1>
                    <div className="animationclass">
                    <div className="calc-body-bg">
                    <div className="calc-body">
                    <ResultCalc resultCalc={this.state.resultCalc}/>
                    <Keypad onClick={this.onClick}/>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;

