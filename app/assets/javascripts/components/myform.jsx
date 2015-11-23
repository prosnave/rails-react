class Myform extends React.Component {
  
  sendContact (e){
    e.preventDefault();
    this.props.sendContact(this.refs.first_name.value, this.refs.the_telephone.value );
    
    this.refs.first_name.value = '';
    this.refs.the_telephone.value = '';
  }
  
  render(){
    return(
      <div className="row">
        <form className="col s12" onSubmit={this.sendContact.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input ref="first_name" type="text" className="validate" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">phone</i>
              <input ref="the_telephone" type="tel" className="validate" />
              <label htmlFor="icon_telephone">Telephone</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
        </form>
           
      </div>
    );
  }
}