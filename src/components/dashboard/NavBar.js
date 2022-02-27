import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideBar } from './SideBar';
import './../../styles/navBar.scss';
import { IconContext } from 'react-icons';
import { useNavigate } from "react-router-dom";
import TextFieldComponent from '../../common/TextField';
import { Button } from 'react-bootstrap';

function Navbar() {

      const [sidebar, setSidebar] = useState(false);
      const [searchVal, setSearchVal] = useState("")
      const navigate = useNavigate();

      const showSidebar = () => setSidebar(!sidebar);

      const handleLogOut = () => {
            navigate("/")
      }

      const handleSearchChange = (event) => {
            setSearchVal(event);
      }

      const handleSearchBlur = () => {

      }

      const { TextField: SearchField } = TextFieldComponent({
            //to be replaced by API call
            FieldName: "Search",
            FieldReq: true,
            FieldType: "text",
            FieldDisable: false,
            FieldReadOnly: false,
            FieldValue: searchVal,
            onChange: handleSearchChange,
            onBlur: handleSearchBlur,
            ClassName: "form-control",
            FieldValidation: ["name", "required"],
            FieldPlaceHolder: "Search",
            FieldMaxLength: 30
      });

      return (
            <>
                  <IconContext.Provider value={{ color: '#fff' }}>
                        <div className='navbar'>
                              <Link to='#' className='menu-bars mb-2'>
                                    <FaIcons.FaBars onClick={showSidebar} />
                              </Link>
                              <div className="w-25">
                                    {SearchField}
                              </div>
                              <div className="logOut-container mx-4" onClick={handleLogOut}>
                                    <Button variant="light">Log out</Button>
                              </div>
                        </div>
                        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                              <div className='nav-menu-items' onClick={showSidebar}>
                                    <div className='navbar-toggle'>
                                          <Link to='#' className='menu-bars'>
                                                <AiIcons.AiOutlineClose />
                                          </Link>
                                    </div>
                                    {SideBar.map((item, index) => {
                                          return (
                                                <div key={index} className={item.cName}>
                                                      <Link to={item.path}>
                                                            {item.icon}
                                                            <span className="navBar-text mx-4">{item.title}</span>
                                                      </Link>
                                                </div>
                                          );
                                    })}
                              </div>
                        </nav>
                  </IconContext.Provider>
            </>
      );
}

export default Navbar;