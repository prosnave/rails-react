class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts : [] };
  }
  
  addContact (thename, telephone){
   $.post("/contacts", {name:thename, tel:telephone})
   .success(savedContact => {
      let newContacts = this.state.contacts;
      newContacts.unshift(savedContact);
      this.setState({ contacts: newContacts});
   })
   .error(error => console.log(error));
  }
  
  componentDidMount(){
    $.ajax("/contacts")
    .success(data => this.setState({contacts: data}))
    .error(error => console.log(error));
  }
  
  render(){
    return(
      <div className="container">
      
        <h4>
          Simple form with React View and Rails API
        </h4>
        
        <Myform sendContact = {this.addContact.bind(this)}/>
        
        <Mycontact contacts={this.state.contacts}/>
           
      </div>
    );
  }
}

  
  
let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react-mount')
  );
};

jQuery(documentReady);
