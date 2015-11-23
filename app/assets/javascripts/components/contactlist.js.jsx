
class ContactList extends React.Component {
  render(){
    return(
      <li className="collection-item avatar">
        <i className="material-icons circle">contact_phone</i>
        <span className="title">{this.props.name}</span>
        <p>
          {this.props.tel}
        </p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
      </li>
    );
  }
}