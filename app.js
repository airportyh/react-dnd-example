
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="fruit-basket">
          <Fruit name="Apple"/>
          <Fruit name="Banana"/>
          <Fruit name="Grapes"/>
        </div>
        <TrashBin/>
      </div>
    );
  }
}

class TrashBin extends React.Component {
  render() {
    return <div className="trash-bin"></div>;
  }
}

class Fruit extends React.Component {
  render() {
    return <div className="fruit">{this.props.name}</div>;
  }
}

React.render(<App/>, document.getElementById('content'));