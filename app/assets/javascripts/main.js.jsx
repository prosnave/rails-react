class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts : sampleContacts };
  }
  
  addContact (thename, telephone){
   
   let newContacts = this.state.contacts;
   newContacts.unshift({ name:thename, tel:telephone });
    this.setState({ contacts: newContacts});
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

let sampleContacts = [
  {name:"Maryanne", tel: "012121212"},
  {name:"Anne", tel: "54521212"},
  {name:"Steve", tel: "09912212"}  
];
  
  
let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react-mount')
  );
};

jQuery(documentReady);
