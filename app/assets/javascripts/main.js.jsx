
let documentReady = () => {
  ReactDOM.render(
    <MyComponent />,
    document.getElementById('react-mount')
  );
};

jQuery(documentReady);
