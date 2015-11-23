class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts : sampleContacts };
  }
  
  addContact (thename, telephone){
   
   let newContacts = this.state.contacts;
   newContacts.unshift({ id: Date.now(), name:thename, tel:telephone });
    this.setState({ contacts: []});
  }
  
  render(){
    return(
      <div className="container">
      
        <h4>
          Simple form with React View and Rails API
        </h4>
        
        <Myform sendContact = {this.addContact.bind(this)}/>
        
        <Contacts contacts={sampleContacts}/>
           
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
