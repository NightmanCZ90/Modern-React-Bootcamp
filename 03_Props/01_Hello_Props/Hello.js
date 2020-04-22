class Hello extends React.Component {
  render(){
    this.props.from = "BLUE"; //immutable
    return <p>Hi {this.props.to} from {this.props.from}</p> //will cause error
  }
}