
var TodoItems = React.createClass({
    getInitialState: function() {
      return {
        entries: this.props.entries
      };
    },

  removeItem: function(key){
    var itemArray = this.state.entries;
    for (var i = 0; i < itemArray.length; i++){
      if (itemArray[i.key] === key) {
          itemArray.splice(i, 1);
          break;
      }
    }
      this.setState({
        entries: itemArray
      })
  },

createTasks: function(item) {

  var _removeItem = this.removeItem;
    return (
      <li key={item.key}>
       {item.text}
       <button onClick = {_removeItem(item.key)} className= "remove"> Remove </button>
   </li>
    );
  },

  render: function() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
});


var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },

  addItem: function(e) {
    var itemArray = this.state.items;

  itemArray.push(
   {
     text: this._inputElement.value,
     key: Date.now()
   }
 );

 this.setState({
   items: itemArray
 });

 this._inputElement.value = "";

 e.preventDefault();


 },

  render: function() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit = {this.addItem}>
              <input ref={(a) => this._inputElement = a}
                placeholder="enter task">
              </input>
              <button type="submit">add</button>
            </form>
          </div>
          <TodoItems entries={this.state.items}/>
        </div>
      );
    }
});


ReactDOM.render(
  <TodoList/>,
    document.getElementById('root')
);
