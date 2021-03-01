'use strict';

const alertContainer = document.getElementById('c-alert-container')

const { useState, useEffect } = React
const e = React.createElement;

// Alert Component
const Alert = (props) => {
    const [alertActive, setAlertActive] = useState(false);

    useEffect(() => {
        // Alert Timing Functionality.
        const delay = setTimeout(() => setAlertActive(true), 1000 + props.delay);
        const timer = setTimeout(() => setAlertActive(false), props.timer + props.delay); 
        
        // Clean up function.
        return () => {
          clearTimeout(delay);
          clearTimeout(timer);
        };
      }, [props.delay, props.timer]);

      return e("div", {
        className: alertActive ? 'c-alert active' : 'c-alert',
        style: props.error ? {
          background: '#bd2e2ea8'
        } : null
      }, e("p", null, props.text));
}

// App Alerts
const Alerts = () => {
    return e(
      React.Fragment, null, 
      e(Alert, { text: "Welcome to my API", timer: 6000, delay: 60, error: false }),
      e(Alert, { text: "Not much to see yet, but..", timer: 6000, delay: 0, error: false}),
    )
}

ReactDOM.render(e(Alerts), alertContainer)

const header = document.getElementById('myHeader')

// Rubber Span
function RubberSpan(props) {
  let letterArray = [];
  let split = props.letters.split("");
  split.forEach((item) => {
    letterArray.push(item);
  }); 

  // Set the animation on hovering over the target
  function changeAnimation(e) {
    e.target.style.animationName = "rubberBand";
    e.target.style.animationDuration = "1s";
  } 
  
  // Remove the animation after a set time to reset it so it can be played again later.
  function resetAnimation(e) {
    setTimeout(() => {
      e.target.style.animation = "none";
      e.target.style.animation = "";
    }, 900);
  }

  const rubberContainerStyles = {
    marginRight: props.margin + "px"
  };

  const heroLetter = {
    textShadow:
      "-1px 0 0px #4d43ff, 0 1px 0px #4238ff, -2px 1px 0px #4d43ff, -1px 2px 0px #4238ff, -3px 2px 0px #4d43ff, -2px 3px 0px #4238ff, -4px 3px 0px #4d43ff"
  };

  return React.createElement( "span", { style: rubberContainerStyles },
    letterArray.map((item, index) => {
      return React.createElement("span", { key: index, className: "blast-text", style: props.hero ? heroLetter : null, onMouseOver: changeAnimation, onMouseLeave: resetAnimation }, 
      item);
    }),
   React.createElement("span", { className: "blast-text", onMouseOver: changeAnimation, onMouseLeave: resetAnimation }, props.emoji)
  );
}

// App RubberSpans
const RubberSpans = () => {
  return e(
    React.Fragment, null, 
    e(RubberSpan, { letters: "Test", hero: true, margin: 10}),
    e(RubberSpan, { letters: "my", hero: true, margin: 10}),
    e(RubberSpan, { letters: "API", hero: true})
  )
}

ReactDOM.render(e(RubberSpans), header)