import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Greeting from './greeting';

// const mapStateToProps = ({ session, entities: { users } }) => {
//   return {
//     currentUser: users[session.id]
//   };
// };
// from benchbnb

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id] || state.session.currentUser,
  isOpen: Boolean(state.ui.modal)
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
