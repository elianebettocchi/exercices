//1//
const JSX = <h1>Hello JSX!</h1>;

//2//
const JSX = (
  <div>
  <h1>Title</h1>
  <p>Paragraph</p>
  <ul>
  <li>list</li>
  <li>list</li>
  <li>list</li>
  </ul>
  </div>
);

//3//
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/* comment */}
  </div>
);

//4//
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
ReactDOM.render(
  JSX, document.getElementById('challenge-node')
);

//5//
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

//6//
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

//7//
const MyComponent = function() {
  // Change code below this line
  return(
<div>
<p>Some string of text</p>
</div>
  );

  // Change code above this line
}

//8//
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
return(
  <div>
  <h1>Hello React!</h1>
  </div>
)


    // Change code above this line
  }
};

//9//
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
<ChildComponent />

        { /* Change code above this line */ }
      </div>
    );
  }
};

//10//
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
<TypesOfFruit />
      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
<Fruits />
        { /* Change code above this line */ }
      </div>
    );
  }
};

//11//
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
<NonCitrus />
<Citrus />
        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
<Fruits />
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};

//12//
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
  <Fruits />
  <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(
  <TypesOfFood />, document.getElementById('challenge-node')
);

13
// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h1>My First React Component!</h1>
      </div>
    );
  }
};
ReactDOM.render(
  <MyComponent />, document.getElementById('challenge-node')
);

//14//
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is:
      {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { <CurrentDate date={Date()} />}
        { /* Change code above this line */ }
      </div>
    );
  }
};

//15//
const List = props => {
  return <p>{props.tasks.join(", ")}</p>;
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["sleep", "watch movie", "play games"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study", "Code", "Eat"]} />
      </div>
    );
  }
}

//16//
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line

ShoppingCart.defaultProps = {items: 0}

//17//
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10}/>
    { /* Change code above this line */ }
  }
};

//18//
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

//19//
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Eliane"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>Eliane</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

//20//
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
const Camper = props => <p>{props.name}</p>;

Camper.defaultProps = {
  name: "CamperBot"
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

//21//
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
this.state = {
 firstName: 'firstName'
}
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};

//22//
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
<h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
}

//23//
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
const name = this.state.name
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
<h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};

//24//
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
const name = this.state.name
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
<h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};

//25//
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
this.setState({
  name:'React Rocks!'
})
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

//26//
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line
this.handleClick = this.handleClick.bind(this)
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

//27//
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
toggleVisibility() {
    this.setState(state => {
      if (state.visibility === true) {
         return { visibility: false };
       } else {
         return { visibility: true };
      }
    });
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

//28//
class ControlledInput extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      input: ''

    };

    // Change code below this line

    this.handleChange = this.handleChange.bind(this);

    // Change code above this line

  }

  // Change code below this line

  handleChange (event) {

    this.setState({

      input: event.target.value

    })

  }

  // Change code above this line

  render() {

    return (

      <div>

        { /* Change code below this line */}

        <input value={this.state.input} onChange={this.handleChange} />

        { /* Change code above this line */}

        <h4>Controlled Input:</h4>

        <p>{this.state.input}</p>

      </div>

    );

  }

};

//29//
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};

//30//
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot"
    };
  }
  render() {
    return (
      <div>
        // Here we will call this.state.name in order to pass the value of
        CamperBot // to the NavBar component
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        // Since we passed in the CamperBot state value into the the NavBar
        component above // the h1 element below will render the value passed
        from state
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
    );
  }
}

//31//
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         <GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}/>
         <RenderInput
           input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

//32//
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
  console.log('Component being mounted');
    // Change code above this line
  }
  render() {
    return <div />
  }
};

//33//
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: { this.state.activeUsers }</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}

//34//
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  // change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

//35//
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
      if (nextProps.value % 2 == 0) {
        return true;
      }
      return false;
     // change code above this line
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};