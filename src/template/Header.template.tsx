import React, { ReactElement } from 'react';
import '../css/template.css';

const HeaderTemplate = (): ReactElement => {
  return (
    <>
      <div className="headerContainer">
        <h2 className="headerTitle">Laporan Keuangan</h2>
        <h4 className="headerSubTitle">Sapphire Residence 5N</h4>
      </div>
    </>
  )
};

export default HeaderTemplate;