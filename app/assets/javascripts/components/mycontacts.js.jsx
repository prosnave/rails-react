
class Mycontact extends React.Component {
  render(){
    let contactsdata = this.props.contacts.map(contact => < ContactList key={contact.id} {...contact} />);
    return (
      <div className="col s12 m5">
        <div className="card-panel teal lighten-2">
         <ul className="collection">
          { contactsdata }
          </ul>
        </div>
      </div>
    );
  }
}