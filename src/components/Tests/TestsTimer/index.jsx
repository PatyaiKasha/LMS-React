import React from 'react';
import './styles.scss';


class TestsTimer extends React.Component {
	state = {
		timerMinutes: '01',
		timerSeconds: '00',
		endInterval: this.props.stopInterval
	}

	componentDidMount() {
		this.testsInterval = setInterval(this.tick, 100);
	}

	componentWillUnmount () {
		clearInterval(this.testsInterval);
	}

	tick = () => {
		if (this.state.endInterval) {
			clearInterval(this.testsInterval);
		}
		else {
			let minute = this.state.timerMinutes;
			let second = this.state.timerSeconds;

			if ( second > 0 ) {
				second--;
				let secondResult = (second < 10 ) ? `0${second}` : `${second}`;
				this.setState({
					timerSeconds: secondResult
				});
			}
			else {
				second = 59;
				let secondResult = (second < 10 ) ? `0${second}` : `${second}`;
				this.setState({
					timerSeconds: secondResult
				});

				if ( minute > 0 ) {
					minute--;
					let minuteResult = (minute < 10 ) ? `0${minute}` : `${minute}`;;
					this.setState({
						timerMinutes: minuteResult
					});	
				}
				else {
					this.setState({
						timerSeconds: '00'
					});
					this.setState({
						endInterval: true
					});
				}
			}
		}
		
	}

	render() {
	  	const { timerMinutes, timerSeconds } = this.state;

	    return (
	    	<span>
	    		<span className="t-timer__minutes">{timerMinutes}</span>: <span className="t-timer__seconds">{timerSeconds}</span>
	    	</span>
	    );
	}
}

export default TestsTimer;