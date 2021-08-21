import { useState } from 'react';

//styles
import { NavPanelShowItem } from './NavPanelShowItems.style';
//components
import UserPanel from '../../Panel/UserPanel/UserPanel';
import WorkPanel from '../../Panel/WorkPanel/WorkPanel';
import CoverScreen from '../../CoverScreen/CoverScreen';

//icons
import MultiDotsIcon from '../../Icon/MultiDotsIcon';

function NavPanelShowItems() {
  const [isUserItemActive, setIsUserItemActive] = useState(false);
  const [isWorkItemActive, setIsWorkItemActive] = useState(false);
  const toogleUserItemState = () => {
    setIsUserItemActive(!isUserItemActive);
  };

  const blurUserItem = () => {
    setIsUserItemActive(false);
  };

  const toogleWorkItemState = () => {
    setIsWorkItemActive(!isWorkItemActive);
  };

  const blurWorkItem = (e) => {
    setIsWorkItemActive(false);
  };
  return (
    <>
      <NavPanelShowItem tabIndex={0} onBlur={() => blurUserItem()}>
        <div id="navUserItem" onMouseDown={() => toogleUserItemState()}>
          <img src="/images/user.svg" alt="user-img" />
          <p>
            Me{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="17"
              height="15"
              data-supported-dps="16x16"
            >
              <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
            </svg>
          </p>
        </div>
        <UserPanel isactive={isUserItemActive} />
      </NavPanelShowItem>
      <NavPanelShowItem tabIndex={0} onBlur={(e) => blurWorkItem(e)}>
        <div onMouseDown={() => toogleWorkItemState()}>
          <MultiDotsIcon />
          <p>
            Work{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="17"
              height="15"
              data-supported-dps="16x16"
            >
              <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
            </svg>
          </p>
        </div>
        <WorkPanel isactive={isWorkItemActive} />
      </NavPanelShowItem>
      <CoverScreen isactive={isWorkItemActive} />
    </>
  );
}

export default NavPanelShowItems;
