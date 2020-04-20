class JSXDemo extends React.Component {
  render(){
    return (
      <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"></img>
    )
  }
}

ReactDOM.render(<JSXDemo/>, document.getElementById("root"));