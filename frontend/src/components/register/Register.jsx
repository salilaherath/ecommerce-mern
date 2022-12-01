import './register.scss';

const Register = ({ onClose }) => {
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='container'>
        <h2>Register</h2>
        <p>Email</p>
        <input type='text' />
        <p>Password</p>
        <input type='password' name='' id='' />
        <button>Register</button>
      </div>
    </div>
  );
};

export default Register;
