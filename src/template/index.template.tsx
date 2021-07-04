import React, { ReactElement } from 'react';
import HeaderTemplate from '../template/Header.template';
import ContentTemplate from '../template/Content.template';

const IndexTemplate = ({ children }): ReactElement => {
  return (
    <>
      <HeaderTemplate />
      <ContentTemplate>
        {children}
      </ContentTemplate>
    </>
  )
};

export default IndexTemplate;