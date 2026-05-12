import './_AccountPage.scss';
import UserProfile from '../UserProfile/UserProfile';
import AuthPage from '../AuthPage/AuthPage';

export default function AccountPage({ currentUser, onLogin, onLogout }) {
  return (
    <>
      {currentUser ? (
        <UserProfile user={currentUser} onLogout={onLogout} />
      ) : (
        <AuthPage onLogin={onLogin} />
      )}
    </>
  );
}
