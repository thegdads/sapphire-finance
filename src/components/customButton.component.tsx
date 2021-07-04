import React, { ReactElement } from 'react';
import { cButtonInterface } from '../interfaces/Button.interface';
import { User, Users } from '../interfaces/User.interface';
import '../css/user.css';
import '../css/component.css';

const CButton = ({ text }: cButtonInterface): ReactElement => {
  return <button type="button" className="customButton"> {text} </button>;
}

const UserButtons = ({ users }: Users): ReactElement => {
  return (
    <div className="userContainer">
      {
        users.map(({ id, name }: User) => (
          <CButton text={name} key={id} />
        ))
      }
    </div>
  )
}

export { CButton, UserButtons };