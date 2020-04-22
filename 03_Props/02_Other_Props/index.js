class App extends React.Component {
  render(){
    return (
      <div>
        <Hello
          to="Ringo" 
          from="Paul" 
          bangs={3}
          img="https://images.unsplash.com/photo-1547602469-79faa757dbef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))