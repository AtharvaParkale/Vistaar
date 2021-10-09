import React, { useState } from 'react';
import Data from './data.json';
import "./Suggestion.css";
import ProfilePic from './profile_pic.png'
import { GiCancel } from "react-icons/gi";

function Suggestion() {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(true)
    const [show3, setShow3] = useState(true)
    const [show4, setShow4] = useState(true)
    const [show5, setShow5] = useState(true)
    const [show6, setShow6] = useState(true)
    const [show7, setShow7] = useState(true)
    const [show8, setShow8] = useState(true)
    const [show9, setShow9] = useState(false)
    const [show10, setShow10] = useState(false)
    const [connect1, setConnect1] = useState(true)
    const [connect2, setConnect2] = useState(true)
    const [connect3, setConnect3] = useState(true)
    const [connect4, setConnect4] = useState(true)
    const [connect5, setConnect5] = useState(true)
    const [connect6, setConnect6] = useState(true)
    const [connect7, setConnect7] = useState(true)
    const [connect8, setConnect8] = useState(true)
    const [connect9, setConnect9] = useState(true)
    const [connect10, setConnect10] = useState(true)
    const [connectUp1, setConnectUp1] = useState(true)
    const [connectUp2, setConnectUp2] = useState(true)
    const [count, setCount] = useState(8)
    const [display, setDisplay] = useState(true)
    const [connectCount, setConnectCount] = useState(2)
    const [connectDisplay, setconnectDisplay] = useState(true)

    function checkCount() {
        setCount(count - 1)
        console.log(count)
        if (count <= 8 && count > 7) {
            setShow9(true)
        }
        if (count <= 7 && count > 6) {
            setShow10(true)
        }
        if (count === -1) {
            setDisplay(false)
        }
    }
   


    return (
        <>
            <div className="more_connections">
                <div className="connection">
                    <div className="heading-1">
                        <div className="box_1"><hr /></div>
                        <div className="text"><p>YOU HAVE <span>{connectCount} MORE CONNECTIONS</span></p></div>
                        <div className="box_1"><hr /></div>
                    </div>

                    <div className="pending">
                        {connectUp1 ? <div className="pending_box">
                            <div className="pending_pic">
                                <div className="picture">

                                </div>

                            </div>

                            <div className="pending_info">
                                <p className="pending_name">Brandon Wilson</p>
                                <p className="pending_work">Senior UX designer</p>
                                <p className="pending_connections">623 connections</p>

                            </div>
                            <div className="pending_buttons">
                                <button className="pending_button connect_" onClick={() => {
                                    setConnectUp1(false)
                                    setConnectCount(connectCount - 1)
                                }

                                }>CONNECT</button>
                                <button className="pending_button decline_" onClick={() => {
                                    setConnectUp1(false)

                                    setConnectCount(connectCount - 1)
                                }
                                }>DECLINE
                                </button>

                            </div>

                        </div> : null}
                        {connectUp2 ?
                            <div className="pending_box">
                                <div className="pending_pic">
                                    <div className="picture">

                                    </div>

                                </div>

                                <div className="pending_info">
                                    <p className="pending_name">Theresa Steward</p>
                                    <p className="pending_work">IOS Developer</p>
                                    <p className="pending_connections">481 connections</p>

                                </div>
                                <div className="pending_buttons">
                                <button className="pending_button connect_" onClick={() => {
                                    setConnectUp2(false)
                                    setConnectCount(connectCount - 1)
                                }

                                }>CONNECT</button>
                                <button className="pending_button decline_" onClick={() => {
                                    setConnectUp2(false)

                                    setConnectCount(connectCount - 1)
                                }
                                }>DECLINE
                                </button>

                                </div>

                            </div> : null}

                    </div>
                    {display ? <div className="heading-1">
                        <div className="box_1"><hr /></div>
                        <div className="text"><p>MORE SUGGESTIONS FOR YOU</p></div>
                        <div className="box_1"><hr /></div>
                    </div> : null}


                </div>
            </div>

            <div className="employee_container">
                <div className="emplyoees">
                    {
                        show1 ? <div className="employee_card">
                            {
                                Data.map(profile => {
                                    return (
                                        <>

                                            {/* <div className="employee_card"> */}
                                            <div className="cross" onClick={() => {
                                                setShow1(false)

                                                checkCount()
                                            }}>
                                                <span><GiCancel size={27} /></span>
                                            </div>

                                            <div className="profile_pic">
                                                <img src={ProfilePic} />
                                            </div>

                                            <div className="emp_details">
                                                <h2>{profile.person1.name}</h2>
                                                <p>{profile.person1.compName}</p>
                                            </div>

                                            <div className="emp_connection"><h3>{profile.person1.connection}</h3><p>connections</p></div>
                                            <div className="emp_button">

                                                <button onClick={() => {
                                                    connect1 ? setConnect1(false) : setConnect1(true)
                                                }}>
                                                    {connect1 ?
                                                        "Connect" : "Request sent"
                                                    }


                                                </button>
                                            </div>

                                            {/* </div> */}
                                        </>
                                    )
                                })
                            }
                        </div> : null}

                    {show2 ?
                        <div className="employee_card">
                            {
                                Data.map(profile => {
                                    return (
                                        <>

                                            {/* <div className="employee_card"> */}
                                            <div className="cross"
                                                onClick={() => {
                                                    setShow2(false)

                                                    checkCount()
                                                }}>

                                                <span><GiCancel size={27} /></span>
                                            </div>

                                            <div className="profile_pic">
                                                <img src={ProfilePic} />
                                            </div>

                                            <div className="emp_details">
                                                <h2>{profile.person2.name}</h2>
                                                <p>{profile.person2.compName}</p>
                                            </div>

                                            <div className="emp_connection"><h3>{profile.person2.connection}</h3><p>connections</p></div>
                                            <div className="emp_button">
                                                <button onClick={() => {
                                                    connect2 ? setConnect2(false) : setConnect2(true)
                                                }}>
                                                    {connect2 ?
                                                        "Connect" : "Request sent"
                                                    }


                                                </button>
                                            </div>

                                            {/* </div> */}
                                        </>
                                    )
                                })
                            }
                        </div> : null}
                    {show3 ? <div className="employee_card">
                        {
                            Data.map(profile => {
                                return (
                                    <>

                                        {/* <div className="employee_card"> */}
                                        <div className="cross" onClick={() => {
                                            setShow3(false)
                                            checkCount()
                                        }}>
                                            <span><GiCancel size={27} /></span>
                                        </div>

                                        <div className="profile_pic">
                                            <img src={ProfilePic} />
                                        </div>

                                        <div className="emp_details">
                                            <h2>{profile.person3.name}</h2>
                                            <p>{profile.person3.compName}</p>
                                        </div>

                                        <div className="emp_connection"><h3>{profile.person3.connection}</h3><p>connections</p></div>
                                        <div className="emp_button">
                                            <button onClick={() => {
                                                connect3 ? setConnect3(false) : setConnect3(true)
                                            }}>
                                                {connect3 ?
                                                    "Connect" : "Request sent"
                                                }


                                            </button>
                                        </div>

                                        {/* </div> */}
                                    </>
                                )
                            })
                        }
                    </div> : null}

                    {show4 ?
                        <div className="employee_card">
                            {
                                Data.map(profile => {
                                    return (
                                        <>

                                            {/* <div className="employee_card"> */}
                                            <div className="cross" onClick={() => {
                                                setShow4(false)
                                                checkCount()
                                            }}>
                                                <span><GiCancel size={27} /></span>
                                            </div>

                                            <div className="profile_pic">
                                                <img src={ProfilePic} />
                                            </div>

                                            <div className="emp_details">
                                                <h2>{profile.person4.name}</h2>
                                                <p>{profile.person4.compName}</p>
                                            </div>

                                            <div className="emp_connection"><h3>{profile.person4.connection}</h3><p>connections</p></div>
                                            <div className="emp_button">
                                                <button onClick={() => {
                                                    connect4 ? setConnect4(false) : setConnect4(true)
                                                }}>
                                                    {connect4 ?
                                                        "Connect" : "Request sent"
                                                    }


                                                </button>
                                            </div>

                                            {/* </div> */}
                                        </>
                                    )
                                })
                            }
                        </div> : null}
                    {show5 ?
                        <div className="employee_card">
                            {
                                Data.map(profile => {
                                    return (
                                        <>

                                            {/* <div className="employee_card"> */}
                                            <div className="cross" onClick={() => {
                                                setShow5(false)
                                                checkCount()
                                            }}>
                                                <span><GiCancel size={27} /></span>
                                            </div>

                                            <div className="profile_pic">
                                                <img src={ProfilePic} />
                                            </div>

                                            <div className="emp_details">
                                                <h2>{profile.person5.name}</h2>
                                                <p>{profile.person5.compName}</p>
                                            </div>

                                            <div className="emp_connection"><h3>{profile.person5.connection}</h3><p>connections</p></div>
                                            <div className="emp_button">
                                                <button onClick={() => {
                                                    connect5 ? setConnect5(false) : setConnect5(true)
                                                }}>
                                                    {connect5 ?
                                                        "Connect" : "Request sent"
                                                    }


                                                </button>
                                            </div>

                                            {/* </div> */}
                                        </>
                                    )
                                })
                            }
                        </div> : null}
                    {show6 ?
                        <div className="employee_card">
                            {
                                Data.map(profile => {
                                    return (
                                        <>

                                            {/* <div className="employee_card"> */}
                                            <div className="cross" onClick={() => {
                                                setShow6(false)
                                                checkCount()
                                            }}>
                                                <span><GiCancel size={27} /></span>
                                            </div>

                                            <div className="profile_pic">
                                                <img src={ProfilePic} />
                                            </div>

                                            <div className="emp_details">
                                                <h2>{profile.person6.name}</h2>
                                                <p>{profile.person6.compName}</p>
                                            </div>

                                            <div className="emp_connection"><h3>{profile.person6.connection}</h3><p>connections</p></div>
                                            <div className="emp_button">
                                                <button onClick={() => {
                                                    connect6 ? setConnect6(false) : setConnect6(true)
                                                }}>
                                                    {connect6 ?
                                                        "Connect" : "Request sent"
                                                    }


                                                </button>
                                            </div>

                                            {/* </div> */}
                                        </>
                                    )
                                })
                            }
                        </div> : null}
                    {show7 ?
                        <div className="employee_card">
                            {
                                Data.map(profile => {
                                    return (
                                        <>

                                            {/* <div className="employee_card"> */}
                                            <div className="cross" onClick={() => {
                                                setShow7(false)
                                                checkCount()
                                            }}>
                                                <span><GiCancel size={27} /></span>
                                            </div>

                                            <div className="profile_pic">
                                                <img src={ProfilePic} />
                                            </div>

                                            <div className="emp_details">
                                                <h2>{profile.person7.name}</h2>
                                                <p>{profile.person7.compName}</p>
                                            </div>

                                            <div className="emp_connection"><h3>{profile.person7.connection}</h3><p>connections</p></div>
                                            <div className="emp_button">
                                                <button onClick={() => {
                                                    connect7 ? setConnect7(false) : setConnect7(true)
                                                }}>
                                                    {connect7 ?
                                                        "Connect" : "Request sent"
                                                    }


                                                </button>
                                            </div>

                                            {/* </div> */}
                                        </>
                                    )
                                })
                            }
                        </div> : null}
                    {show8 ?
                        <div className="employee_card">
                            {
                                Data.map(profile => {
                                    return (
                                        <>

                                            {/* <div className="employee_card"> */}
                                            <div className="cross" onClick={() => {
                                                setShow8(false)
                                                checkCount()
                                            }}>
                                                <span><GiCancel size={27} /></span>
                                            </div>

                                            <div className="profile_pic">
                                                <img src={ProfilePic} />
                                            </div>

                                            <div className="emp_details">
                                                <h2>{profile.person8.name}</h2>
                                                <p>{profile.person8.compName}</p>
                                            </div>

                                            <div className="emp_connection"><h3>{profile.person8.connection}</h3><p>connections</p></div>
                                            <div className="emp_button">
                                                <button onClick={() => {
                                                    connect8 ? setConnect8(false) : setConnect8(true)
                                                }}>
                                                    {connect8 ?
                                                        "Connect" : "Request sent"
                                                    }


                                                </button>
                                            </div>

                                            {/* </div> */}
                                        </>
                                    )
                                })
                            }
                        </div> : null}
                    {show9 ?
                        <div className="employee_card">
                            {
                                Data.map(profile => {
                                    return (
                                        <>

                                            {/* <div className="employee_card"> */}
                                            <div className="cross" onClick={() => {
                                                setShow9(false)
                                                checkCount()
                                            }}>
                                                <span><GiCancel size={27} /></span>
                                            </div>

                                            <div className="profile_pic">
                                                <img src={ProfilePic} />
                                            </div>

                                            <div className="emp_details">
                                                <h2>{profile.person9.name}</h2>
                                                <p>{profile.person9.compName}</p>
                                            </div>

                                            <div className="emp_connection"><h3>{profile.person9.connection}</h3><p>connections</p></div>
                                            <div className="emp_button">
                                                <button onClick={() => {
                                                    connect9 ? setConnect9(false) : setConnect9(true)
                                                }}>
                                                    {connect8 ?
                                                        "Connect" : "Request sent"
                                                    }


                                                </button>
                                            </div>

                                            {/* </div> */}
                                        </>
                                    )
                                })
                            }
                        </div> : null}
                    {show10 ?
                        <div className="employee_card">
                            {
                                Data.map(profile => {
                                    return (
                                        <>

                                            {/* <div className="employee_card"> */}
                                            <div className="cross" onClick={() => {
                                                setShow10(false)
                                                checkCount()
                                            }}>
                                                <span><GiCancel size={27} /></span>
                                            </div>

                                            <div className="profile_pic">
                                                <img src={ProfilePic} />
                                            </div>

                                            <div className="emp_details">
                                                <h2>{profile.person10.name}</h2>
                                                <p>{profile.person10.compName}</p>
                                            </div>

                                            <div className="emp_connection"><h3>{profile.person10.connection}</h3><p>connections</p></div>
                                            <div className="emp_button">
                                                <button onClick={() => {
                                                    connect10 ? setConnect10(false) : setConnect10(true)
                                                }}>
                                                    {connect8 ?
                                                        "Connect" : "Request sent"
                                                    }


                                                </button>
                                            </div>

                                            {/* </div> */}
                                        </>
                                    )
                                })
                            }
                        </div> : null}

                </div>
            </div>
        </>
    )
}

export default Suggestion
