import React, { useEffect, useState } from 'react';
import "../../styles/contactList.scss"
import Avatar from "@material-ui/core/Avatar";
import MyLoader from '../../common/Loader';

function ContactList() {

      const [contactData, setData] = useState("");
      const [showLoader, setShowLoader] = useState(true);

      useEffect(() => {
            $.ajax({
                  url: 'https://randomuser.me/api/?results=500',
                  dataType: 'json',
                  success: function (data) {
                        console.log(data.results);
                        setData(data.results);
                        setShowLoader(false);
                  }
            });
      }, [])
      return (
            <div id="contactList-containe mx-4">
                  {
                        showLoader ?
                        <div className="d-flex align-content-center justify-content-center mt-5">
                              <MyLoader />
                        </div>
                              :
                              <div>
                                    {contactData && contactData.map((data) => {
                                          return (
                                                <div className="contact-wrapper d-flex justify-content-between align-items-center m-2 px-3">
                                                      <div className="mt-2">
                                                            <p>{data.name.first + " " + data.name.last}</p>
                                                      </div>
                                                      <div className="mt-2">
                                                            <p>{data.phone}</p>
                                                      </div>
                                                      <div>
                                                            <Avatar alt="Remy Sharp" src={data.picture.medium} />
                                                      </div>
                                                </div>
                                          )
                                    })
                                    }
                              </div>
                  }
            </div>
      );
}

export default ContactList