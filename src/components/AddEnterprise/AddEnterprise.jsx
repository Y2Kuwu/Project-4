import './AddEnterprise.css'
import { Component } from 'react';
import { render } from 'react-dom';
// import App from '../../pages/App/App';
import Add from '../MyEnterprises/MyEnterprises';
import App from '../../pages/App/App';

class AddEnterprise extends Component {
  constructor() {
    super();
    this.state = {
      details: [{
        name: '',
        stockSymbol: '',
        ceo: '',
        regions: '',
        officeCount: '',
      }]
    };
  }

  render() {
    return (
      <div>
        {this.state.detail.map(detail => <Add key={detail.name} detail={detail} data={this.props.location.data}/>)}
      </div>
    );
  }
}

export default AddEnterprise;

// render(<MyEnterprises location={{ data: '' }} />, document.getElementById('root'));
  // name: this.props.detail.name,
        // stockSymbol: this.props.detail.name,
        // ceo: this.props.detail.name,
        // regions: this.props.detail.name,
        // officeCount: this.props.detail.name,