import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { removeUser } from '../redux/books/booksSlice';

const Usersdetails = ({ user }) => (
  <div className="div1">
    <div className="usersdetails">
      <span className="title arial">{user.title}</span>
      <span className="first arial">{user.first}</span>
      <span className="last arial">{user.last}</span>
    </div>
  </div>
);

Usersdetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string,
  }).isRequired,
};

export default Usersdetails;
