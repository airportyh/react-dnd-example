
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
App = ReactDnD.DragDropContext(ReactDnD.HTML5)(App);

class TrashBin extends React.Component {
  render() {
    return this.props.connectDropTarget(
      <div className="trash-bin"></div>
    );
  }
}
TrashBin = ReactDnD.DropTarget('fruit', {
  drop() {
    return { name: 'trash-bin' };
  }
}, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
}))(TrashBin);

class Fruit extends React.Component {
  render() {
    return this.props.connectDragSource(
      <div className="fruit">{this.props.name}</div>
    );
  }
}
Fruit = ReactDnD.DragSource('fruit', {
  beginDrag(props) {
    console.log('begin drag', props.name);
    return {
      name: props.name
    };
  },
  endDrag(props, monitor) {
    let result = monitor.getDropResult();
    console.log('dropped', props.name, 'onto', result);
  }
}, (connect, monitor) => ({
  connectDragSource: connect.dragSource()
}))(Fruit);

React.render(<App/>, document.getElementById('content'));