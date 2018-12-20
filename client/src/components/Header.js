import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to={this.props.auth ? '/surveys' : '/'} className='brand-logo'>
            Emaily
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            {this.props.auth === null ? (
              <p>Loading</p>
            ) : this.props.auth === false ? (
              <li>
                <a href='/auth/google'>Google login</a>
              </li>
            ) : (
              [
                <li key='1'>
                  <Payments />
                </li>,
                <li key='2' style={{margin: '0 10px'}}>
                  Credits : {this.props.auth.credits}
                </li>,
                <li key='3'>
                  <a href='/api/logout'>Logout</a>
                </li>
              ]
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}) {
  return {auth};
}

export default connect(mapStateToProps)(Header);
