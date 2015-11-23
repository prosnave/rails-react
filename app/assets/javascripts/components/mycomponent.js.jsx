class MyComponent extends React.Component {
  render(){
    return(
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">phone</i>
              <input id="icon_telephone" type="tel" className="validate" />
              <label htmlFor="icon_telephone">Telephone</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
        </form>
           
      </div>
    );
  }
}