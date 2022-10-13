import { ClientAvatar } from './ClientAvatar';
import { HeaderIcons } from './HeaderIcons';
import { BasicMenu } from './HeaderMenu';

export const HeaderOnLogin = () => {
  return (
    <div className="header-on-login">
      <HeaderIcons />
      <div className="header-on-login--client">
        <p>Welcome, Tony</p>
        <ClientAvatar clientFullName={'Tony Stark'} />
        <BasicMenu />
      </div>
    </div>
  );
};
