import React, { useState } from 'react';
import { Drawer } from 'antd';
import MenuContent from './MenuContent';
import './style.css';

const DrawerMenu = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <>
      <button type="button" onClick={openMenu} id="hamburger-menu" className={'hamburger-menu-black'}>
        <>
        </ >
      </button>

      <Drawer
        title={<img alt="Title Logo" src="https://cdn.shippify.co/web/images/latest/logo-shippify.svg" className="title-logo" />}
        placement="left"
        closable={false}
        onClose={closeMenu}
        visible={visible}
        key="left"

      >
        <MenuContent
          closeMenu={closeMenu}
        />
      </Drawer>
    </>
  );
};


export default DrawerMenu;
