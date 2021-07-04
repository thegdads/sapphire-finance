import React from "react";
import { UserButtons } from '../components/customButton.component';
import IndexTemplate from '../template/index.template';

const IndexPage = () => {
  const dummyUser = [
    {
      id: '1',
      name: 'Yuda'
    },
    {
      id: '2',
      name: 'Ferry'
    },
    {
      id: '3',
      name: 'Mahendra'
    }
  ]
  return (
    <main>
      <title>Users</title>
      <IndexTemplate>
        <UserButtons users={dummyUser} />

      </IndexTemplate>
    </main>
  );
};

export default IndexPage;
