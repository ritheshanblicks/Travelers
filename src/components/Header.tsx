import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Button, Link, Popover } from '@material-ui/core';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BadgeProfile from './BadgeProfile';
import SearchIcon from '@mui/icons-material/Search';

function BiHeader() {
  // const [drawerWindow, setDrawerWindow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const pathName = window.location.pathname;
  return (
    <div className="header BiHeader">
      <div className="left">
        <a href="/">
          <img
            className="float-left"
            src={'/assests/travelers_logo.svg'}
            width="120"
            height="24"
          />
        </a>
        <span className="middle-line"></span>
        <h2 className="text-18 font-extra-bold text-nc-3">Task Muse </h2>
      </div>

      <div className="right">
        {/* <span className="middle-line"></span> */}
        {/* <div className="mr-12">
          <IconButton
            className="btn-icon icon lg"
            onClick={() => setDrawerWindow(true)}
          >
            <span className="dq-icon-notification"></span>
            <span className="badge-number">+1</span>
          </IconButton>
        </div> */}
        <div className="mr-12">
          <Button
            style={{
              borderBottom: pathName === '/home' ? '2px solid #f50002' : '',
              borderRadius: pathName === '/home' ? '0px' : '',
              backgroundColor: pathName === '/home' ? '#f8f8f8' : '',
            }}
            className={'text-12 font-extra-bold text-nc-3'}
            href="home"
          >
            HOME
          </Button>
          <Button
            style={{
              borderBottom:
                pathName === '/userstory' ? '2px solid #f50002' : '',
              borderRadius: pathName === '/userstory' ? '0px' : '',
              backgroundColor: pathName === '/userstory' ? '#f8f8f8' : '',
            }}
            className="text-12 font-extra-bold text-nc-3"
            href="userstory"
          >
            CREATE USER STORY
          </Button>
          <Button
            style={{
              borderBottom: pathName === '/settings' ? '2px solid #f50002' : '',
              borderRadius: pathName === '/settings' ? '0px' : '',
              backgroundColor: pathName === '/settings' ? '#f8f8f8' : '',
            }}
            className="text-12 font-extra-bold text-nc-3"
            href="settings"
          >
            SETTINGS
          </Button>
          <IconButton className="btn-icon icon lg">
            <SearchIcon />
          </IconButton>
          <IconButton className="btn-icon icon lg">
            <HelpOutlineIcon />
          </IconButton>
        </div>
        <IconButton className="p-0 profile" onClick={handleClick}>
          <BadgeProfile size="md" alt="Admin User" />
        </IconButton>
        {/* Profile Popover Start */}
        <Popover
          className="popover"
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <div style={{ width: 260 }}>
            <div className="px-16 py-10 shadow-sm border-b border-nc-6">
              <div className="text-14 text-pc-1 font-barlow font-extra-bold">
                Travelers
              </div>
              <div className="text-14 text-nc-3 font-roboto font-normal">
                Admin User
              </div>
            </div>
            <div className="profile-navigation">
              <ul>
                <li>
                  <Link
                    underline="none"
                    component="button"
                    className="btn-link btn-link-tc-1 text-12"
                  >
                    <a href="#">
                      <span className="dq-icon-shettings mr-6 text-14" />
                      Setting
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex p-16">
              <span className="flex-1" />
              <IconButton className="btn-icon sm square btn-pc-1">
                <span className="dq-icon-logout" />
              </IconButton>
            </div>
          </div>
        </Popover>
        {/* Profile Popover End */}
      </div>
      {/* <Drawer open={drawerWindow} anchor="right" className="drawer">
        <div className="drawer__header">
          <div className="drawer__header__title">Notifications</div>
          <IconButton
            className="btn-icon xxsm bg-nc-7 text-nc-3 hover:bg-nc-7 hover:text-nc-1"
            onClick={() => {
              setDrawerWindow(false);
            }}
          >
            <span className="dq-icon-close text-10" />
          </IconButton>
        </div>
        <div className="drawer__body">
          <div>
            <div className="notification">
              <div className="repeate-loop">
                <div className="notification-body">
                  <p>
                    <b>User Notifications</b>
                  </p>
                  <span className="text-nc-4 text-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla molestie, metus vitae interdum vulputate, sapien
                    libero lobortis libero, nec rhoncus nisl lorem at purus.
                  </span>
                  <p className="font-extra-bold">InProgress</p>
                  <span className="text-10  text-nc-4">
                    22 May 2023 4:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer> */}
    </div>
  );
}

export default BiHeader;
