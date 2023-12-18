import React from "react";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import './setting.css';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

const changeLanguage = (lng) => {
    localStorage.setItem("language",lng);
    i18n.changeLanguage(lng);
  };

const Setting = () => {
  const { t ,  i18n } = useTranslation();

    return ( 
        <div className="setting-container">
            
            <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Check your mode"
            />
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {t('language')}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="" onClick={() => changeLanguage('en')}>English</Dropdown.Item>
                    <Dropdown.Item href="" onClick={() => changeLanguage('ar')}>Arabic</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
        </div>
     );
}
 
export default Setting;