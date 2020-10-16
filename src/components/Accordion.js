class Accordion extends React.Component {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    this._handleClick();
  }

  _handleClick() {
    const acc = this._acc.children;
    for (let i = 0; i < acc.length; i++) {
      let a = acc[i];
      a.onclick = () => a.classList.toggle("active");
    }
  }

  function makeNewPosition(){
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh,nw];    

  }

  function animateDiv(){
  var newq = makeNewPosition();
  var oldq = $('.a').offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
    animateDiv();        
  });

  };

  function calcSpeed(prev, next) {

  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.1;

  var speed = Math.ceil(greatest/speedModifier);

  return speed;

  }​

  render() {
    return (
      <div 
        ref={a => this._acc = a} 
        onClick={this._handleClick}>
        {this.props.children}
      </div>
    )
  }
}