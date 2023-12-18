import React from "react";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import './setting.css';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { Sun } from "phosphor-react";
import {Moon} from "phosphor-react";
import  { useState } from "react";

const changeLanguage = (lng) => {
    localStorage.setItem("language",lng);
    i18n.changeLanguage(lng);
  };
  

const Setting = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

    return ( 
        <div className ={`setting-container ${theme}`}>
             <div className="theme-mode d-flex align-items-center">
                <h2>Choose you mode : </h2>
                <Sun size={32} />
                <Form.Check
                    style={{ fontSize: '32px', margin: '0 15px' }}
                    type="switch"
                    id="custom-switch"
                    label=""
                    onChange={handleThemeChange}
                    checked={theme === "dark"}
                />
                <Moon size={32} />
            </div>
            <div className="lang">
                <h2>Choose you language : </h2>
            <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    {t('language')}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="" onClick={() => changeLanguage('en')}>English</Dropdown.Item>
                    <Dropdown.Item href="" onClick={() => changeLanguage('ar')}>Arabic</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
        </div>
     );
}
 
export default Setting;