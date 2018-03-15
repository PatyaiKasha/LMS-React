import React from 'react';
import './styles.scss';


class TestsTimer extends React.Component {
	state = {
		timerMinutes: 14,
		timerSeconds: 59
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