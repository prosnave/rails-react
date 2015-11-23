class MyComponent extends React.Component {
  render(){
    return(
      <h2>from MyComponent</h2>
    );
  }
}


let documentReady = () => {
  ReactDOM.render(
    <MyComponent />,
    document.getElementById('react-mount')
  );
};

jQuery(documentReady);
