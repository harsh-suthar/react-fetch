import React from 'react';
import ReactDOM from 'react-dom';
 

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
	  fetch("https://csunix.mohawkcollege.ca/~000743543/private/10133/react_fetch/employee.php")
   
  .then(res => res.json())
       .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
       
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.id} {item.first_name}
            </li>
          ))}
        </ul>
      );
    }
  }
}


ReactDOM.render(
   <MyComponent />,
  document.getElementById('root')
); 