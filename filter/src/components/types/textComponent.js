import React, { useState, useEffect } from 'react';
import { BOOKING_PROFILE, FLIGHT_GROUP, FLIGHT_NO, YEILD, SERVICE_RECOVERY, WEIGHT, VOLUME, AIRCRAFT, QUEUED_BOOKINGS, AIRCRAFT_CLASSIFICATION, FLIGHT_TYPE, MILESTONE_STATUS, FLIGHT_STATUS, SEGMENT_STATUS } from "../../constants/filtertypeconstants";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import filterData from "../../stubs/FilterData.json";

let textComponentArray = [];
let bookingProfile, flightGroup, flightNo, yielD, serviceRecovery, weight, volume, aircraft, queuedBookings, aircraftClassification, flightType, flightStatus, segmentStatus, milestoneStatus;
filterData.filter.forEach(item => {
    if (item.name === BOOKING_PROFILE) {
        bookingProfile = BOOKING_PROFILE;
    }
    else if (item.name === FLIGHT_GROUP) {
        flightGroup = FLIGHT_GROUP
    }
    else if (item.name === FLIGHT_NO) {
        flightNo = FLIGHT_NO;
    }
    else if (item.name === YEILD) {
        yielD = YEILD;
    }
    else if (item.name === SERVICE_RECOVERY) {
        serviceRecovery = SERVICE_RECOVERY;
    }
    else if (item.name === WEIGHT) {
        weight = WEIGHT;
    }
    else if (item.name === VOLUME) {
        volume = VOLUME;
    }
    else if (item.name === AIRCRAFT) {
        aircraft = AIRCRAFT;
    }
    else if (item.name === QUEUED_BOOKINGS) {
        queuedBookings = QUEUED_BOOKINGS;
    }
    else if (item.name === AIRCRAFT_CLASSIFICATION) {
        aircraftClassification = AIRCRAFT_CLASSIFICATION;
    }
    else if (item.name === FLIGHT_TYPE) {
        flightType = FLIGHT_TYPE;
    }
    else if (item.name === FLIGHT_STATUS) {
        flightStatus = FLIGHT_STATUS;
    }
    else if (item.name === SEGMENT_STATUS) {
        segmentStatus = SEGMENT_STATUS;
    }
    else if (item.name === MILESTONE_STATUS) {
        milestoneStatus = MILESTONE_STATUS;
    }
    textComponentArray.push(item.name);
})
export default function TextComponent(props) {
    const [bookingProfileName, setBookingProfileName] = useState("none");
    const [flightGroupName, setFlightGroupName] = useState("none");
    const [flightNoName, setFlightNoName] = useState("none")
    const [yieldName, setYieldName] = useState("none");
    const [serviceRecoveryName, setServiceRecoveryName] = useState("none")
    const [weightName, setWeightName] = useState("none");
    const [volumeName, setVolumeName] = useState("none");
    const [aircraftName, setAircraftName] = useState("none");
    const [queuedBookingsName, setQueuedBookingsName] = useState("none");
    const [aircraftClassificationName, setAircraftClassificationName] = useState("none")
    const [flightTypeName, setFlightTypeName] = useState("none");
    const [flightStatusName, setFlightStatusName] = useState("none");
    const [segmentStatusName, setSegmentStatusName] = useState("none")
    const [milestoneStatusName, setMilestoneStatusName] = useState("none")
    const [bookingProfileTextStatus, setBookingProfileTextStatus] = useState(true)
    const [flightGroupTextStatus, setFlightGroupTextStatus] = useState(true)
    const [flightNoTextStatus, setFlightNoTextStatus] = useState(true)
    const [yieldTextStatus, setYieldTextStatus] = useState(true)
    const [serviceRecoveryTextStatus, setServiceRecoveryTextStatus] = useState(true)
    const [weightTextStatus, setWeightTextStatus] = useState(true)
    const [volumeTextStatus, setVolumeTextStatus] = useState(true)
    const [aircraftTextStatus, setAircraftTextStatus] = useState(true)
    const [queuedBookingsTextStatus, setQueuedBookingsTextStatus] = useState(true)
    const [aircraftClassificationTextStatus, setAircraftClassificationTextStatus] = useState(true)
    const [flightTypeTextStatus, setFlightTypeTextStatus] = useState(true)
    const [flightStatusTextStatus, setFlightStatusTextStatus] = useState(true)
    const [segmentStatusTextStatus, setSegmentStatusTextStatus] = useState(true)
    const [milestoneStatusTextStatus, setMilestoneStatusTextStatus] = useState(true)
    const [bookingProfileEnabled, setBookingProfileEnabled] = useState();
    const [flightGroupEnabled, setFlightGroupEnabled] = useState();
    const [flightNoEnabled, setFlightNoEnabled] = useState();
    const [yieldEnabled, setYieldEnabled] = useState()
    const [serviceRecoveryEnabled, setServiceRecoveryEnabled] = useState()
    const [weightEnabled, setWeightEnabled] = useState()
    const [volumeEnabled, setVolumeEnabled] = useState()
    const [aircraftEnabled, setAircraftEnabled] = useState()
    const [queuedBookingsEnabled, setQueuedBookingsEnabled] = useState()
    const [aircraftClassificationEnabled, setAircraftClassificationEnabled] = useState()
    const [flightTypeEnabled, setFlightTypeEnabled] = useState()
    const [flightStatusEnabled, setFlightStatusEnabled] = useState()
    const [segmentStatusEnabled, setSegmentStatusEnabled] = useState()
    const [milestoneStatusEnabled, setMilestoneStatusEnabled] = useState()
    const [bookingProfileSwitchId, setBookingProfileSwitchId] = useState('');
    const [flightGroupSwitchId, setFlightGroupSwitchId] = useState('');
    const [flightNoSwitchId, setFlightNoSwitchId] = useState('');
    const [yieldSwitchId, setYieldSwitchId] = useState('')
    const [serviceRecoverySwitchId, setServiceRecoverySwitchId] = useState('')
    const [weightSwitchId, setWeightSwitchId] = useState('')
    const [volumeSwitchId, setVolumeSwitchId] = useState('')
    const [aircraftSwitchId, setAircraftSwitchId] = useState('')
    const [queuedBookingsSwitchId, setQueuedBookingsSwitchId] = useState('')
    const [aircraftClassificationSwitchId, setAircraftClassificationSwitchId] = useState('')
    const [flightTypeSwitchId, setFlightTypeSwitchId] = useState('')
    const [flightStatusSwitchId, setFlightStatusSwitchId] = useState('')
    const [segmentStatusSwitchId, setSegmentStatusSwitchId] = useState('')
    const [milestoneStatusSwitchId, setMilestoneStatusSwitchId] = useState('')
    // stores the props passing the labelName
    const [name, setName] = useState();
    useEffect(
        () => {
            // Set the name state when only a particular attribute in the array is passed as props
            if (textComponentArray.includes(props.name)) {
                setName(props.name)
            }
            if (props.name === bookingProfile) {
                setBookingProfileEnabled(props.enabled)
                setBookingProfileName("")
                setBookingProfileSwitchId(bookingProfile)
                //setBookingProfileValue("")
            }
            if (props.name === flightGroup) {
                setFlightGroupEnabled(props.enabled)
                setFlightGroupName("");
                setFlightGroupSwitchId(flightGroup)
            }
            if (props.name === flightNo) {
                setFlightNoEnabled(props.enabled)
                setFlightNoName("");
                setFlightNoSwitchId(flightNo)
            }
            if (props.name === yielD) {
                setYieldEnabled(props.enabled)
                setYieldName("");
                setYieldSwitchId(yielD)
            }
            if (props.name === serviceRecovery) {
                setServiceRecoveryEnabled(props.enabled)
                setServiceRecoveryName("");
                setServiceRecoverySwitchId(serviceRecovery)
            }
            if (props.name === queuedBookings) {
                setQueuedBookingsEnabled(props.enabled)
                setQueuedBookingsName("");
                setQueuedBookingsSwitchId(queuedBookings)
            }
            if (props.name === weight) {
                setWeightEnabled(props.enabled)
                setWeightName("");
                setWeightSwitchId(weight)
            }
            if (props.name === volume) {
                setVolumeEnabled(props.enabled)
                setVolumeName("");
                setVolumeSwitchId(volume)
            }
            if (props.name === aircraft) {
                setAircraftEnabled(props.enabled)
                setAircraftName("");
                setAircraftSwitchId(aircraft)
            }
            if (props.name === aircraftClassification) {
                setAircraftClassificationEnabled(props.enabled)
                setAircraftClassificationName("");
                setAircraftClassificationSwitchId(aircraftClassification)
            }
            if (props.name === flightType) {
                setFlightTypeEnabled(props.enabled)
                setFlightTypeName("");
                setFlightTypeSwitchId(flightType)
            }
            if (props.name === flightStatus) {
                setFlightStatusEnabled(props.enabled)
                setFlightStatusName("");
                setFlightStatusSwitchId(flightStatus)
            }
            if (props.name === segmentStatus) {
                setSegmentStatusEnabled(props.enabled)
                setSegmentStatusName("");
                setSegmentStatusSwitchId(segmentStatus)
            }
            if (props.name === milestoneStatus) {
                setMilestoneStatusEnabled(props.enabled)
                setMilestoneStatusName("");
                setMilestoneStatusSwitchId(milestoneStatus)
            }
        }
        , [props]);
    // All functions below manage the enabled attribute
    const enableSwitchChange = (e) => {
        if (e.target.id === BOOKING_PROFILE) {
            setBookingProfileEnabled(e.target.checked);
            setBookingProfileTextStatus(!e.target.checked)
        }
        else if (e.target.id === FLIGHT_GROUP) {
            setFlightGroupEnabled(e.target.checked);
            setFlightGroupTextStatus(!e.target.checked)
        }
        else if (e.target.id === FLIGHT_NO) {
            setFlightNoEnabled(e.target.checked);
            setFlightNoTextStatus(!e.target.checked)
        }
        else if (e.target.id === YEILD) {
            setYieldEnabled(e.target.checked);
             setYieldTextStatus(!e.target.checked)
        }
        else if (e.target.id === SERVICE_RECOVERY) {
            setServiceRecoveryEnabled(e.target.checked);
            setServiceRecoveryTextStatus(!e.target.checked)
        }        
        else if (e.target.id === QUEUED_BOOKINGS) {
            setQueuedBookingsEnabled(e.target.checked);
            setQueuedBookingsTextStatus(!e.target.checked)
        }
        else if (e.target.id === WEIGHT) {
            setWeightEnabled(e.target.checked);
            setWeightTextStatus(!e.target.checked)
        }
        else if (e.target.id === VOLUME) {
            setVolumeEnabled(e.target.checked);
            setVolumeTextStatus(!e.target.checked)
        }
        else if (e.target.id === AIRCRAFT) {
            setAircraftEnabled(e.target.checked);
            setAircraftTextStatus(!e.target.checked)
        }
        else if (e.target.id === AIRCRAFT_CLASSIFICATION) {
            setAircraftClassificationEnabled(e.target.checked);
            setAircraftClassificationTextStatus(!e.target.checked)
        }
        else if (e.target.id === FLIGHT_TYPE) {
            setFlightTypeEnabled(e.target.checked);
            setFlightTypeTextStatus(!e.target.checked)
        }
        else if (e.target.id === FLIGHT_STATUS) {
            setFlightStatusEnabled(e.target.checked);
            setFlightStatusTextStatus(!e.target.checked)
        }
        else if (e.target.id === SEGMENT_STATUS) {
            setSegmentStatusEnabled(e.target.checked);
            setSegmentStatusTextStatus(!e.target.checked)
        }
        else if (e.target.id === MILESTONE_STATUS) {
            setMilestoneStatusEnabled(e.target.checked);
            setMilestoneStatusTextStatus(!e.target.checked)
        }
    }
    // Below are respective closing component event handlers
     const  closeBookingProfileName = () => {
        props.clearTextComponentName(bookingProfileSwitchId);
        setBookingProfileName("none");
        setBookingProfileEnabled(true);
        setBookingProfileSwitchId('');
        setBookingProfileTextStatus(true);
        document.getElementById("bookingProfile").value="";
    } 
    const closeFlightGroupName = () => {
        props.clearTextComponentName(flightGroupSwitchId);
        setFlightGroupName("none");
        setFlightGroupEnabled(true);
        setFlightGroupSwitchId('');
        setFlightGroupTextStatus(true)
        document.getElementById("flightGroup").value="";
    }
    const closeAircraftClassificationName = () => {
        props.clearTextComponentName(setAircraftClassificationSwitchId);
        setAircraftClassificationName("none");
        setAircraftClassificationEnabled();
        setAircraftClassificationSwitchId('');
        setAircraftClassificationTextStatus(true);
        document.getElementById("aircraftClassification").value="";

    }
    const closeAircraftName = () => {
        props.clearTextComponentName(aircraftSwitchId);
        setAircraftName("none");
        setAircraftEnabled();
        setAircraftSwitchId('');
        setAircraftTextStatus(true)
        document.getElementById("aircraft").value=""
        
    }
    const closeFlightNoName = () => {
        props.clearTextComponentName(flightNoSwitchId);
        setFlightNoName("none");
        setFlightNoEnabled();
        setFlightNoSwitchId('');
        setFlightNoTextStatus(true)
        document.getElementById("flightNo").value=""
        
    }
    const closeFlightStatusName = () => {
        props.clearTextComponentName(flightStatusSwitchId);
        setFlightStatusName("none");
        setFlightStatusEnabled();
        setFlightStatusSwitchId('');
        setFlightStatusTextStatus(true)
        document.getElementById("flightStatus").value=""
        
    }
    const closeFlightTypeName = () => {
        props.clearTextComponentName(flightTypeSwitchId);
        setFlightTypeName("none")
        setFlightTypeEnabled();
        setFlightTypeSwitchId('');
        setFlightTypeTextStatus(true)
        document.getElementById("flightType").value=""
    }
    const closeMilestoneStatusName = () => {
        props.clearTextComponentName(bookingProfileSwitchId);
        setMilestoneStatusName("none");
        setMilestoneStatusEnabled();
        setMilestoneStatusSwitchId('');
        setMilestoneStatusTextStatus(true)
        document.getElementById("milestoneStatus").value=""
    }
    const closeQueuedBookingsName = () => {
        props.clearTextComponentName(queuedBookingsSwitchId);
        setQueuedBookingsName("none");
        setQueuedBookingsEnabled();
        setQueuedBookingsSwitchId('');
        setQueuedBookingsTextStatus(true)
        document.getElementById("queuedBookings").value=""
    }
    const closeSegmentStatusName = () => {
        props.clearTextComponentName(segmentStatusSwitchId);
        setSegmentStatusName("none");
        setSegmentStatusEnabled();
        setSegmentStatusSwitchId('');
        setSegmentStatusTextStatus(true)
        document.getElementById("segmentStatus").value="";
    }
    const closeServiceRecoveryName = () => {
        props.clearTextComponentName(serviceRecoverySwitchId);
        setServiceRecoveryName("none");
        setServiceRecoveryEnabled();
        setServiceRecoverySwitchId('');
        setServiceRecoveryTextStatus(true)
        document.getElementById("serviceRecovery").value="";
       
    }
    const closeVolumeName = () => {
        props.clearTextComponentName(volumeSwitchId);
        setVolumeName("none");
        setVolumeEnabled();
        setVolumeSwitchId('');
        setVolumeTextStatus(true)
        document.getElementById("volume").value="";
        
    }
    const closeWeightName = () => {
        props.clearTextComponentName(weightSwitchId);
        setWeightName("none");
        setWeightEnabled();
        setWeightSwitchId('');
        setWeightTextStatus(true)
        document.getElementById("weight").value="";
    }
    const closeYieldName = () => {
        props.clearTextComponentName(yieldSwitchId);
        setYieldName("none");
        setYieldEnabled();
        setYieldSwitchId('');
        setYieldTextStatus(true)
        document.getElementById("yield").value="";
    }
    if (textComponentArray.includes(name)) {
        return (
            <div>
                <div style={{ display: bookingProfileName }}>
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{bookingProfileSwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    label=""
                                    id={bookingProfileSwitchId}
                                    defaultChecked={bookingProfileEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e);
                                        props.textComponentSetEnabled(bookingProfileSwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={(e) => {
                                        closeBookingProfileName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                id="bookingProfile" 
                                disabled={bookingProfileTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                
                                    props.textComponentSave(e.target.value,bookingProfileSwitchId); 
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: flightGroupName }} >
                    <div className="filter__input">
                    <div className="filter__input-title">
                        <div className="filter__label">
                            <span>{flightGroupSwitchId}</span>
                        </div>
                        <div className="filter__control">
                            <Form.Check
                                type="switch"
                                id={flightGroupSwitchId}
                                label=""
                                defaultChecked={flightGroupEnabled}
                                onClick={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(flightGroupSwitchId,e.target.checked)
                                }}
                            />
                            <FontAwesomeIcon
                                icon={faTimes}
                                type="button"
                                onClick={() => {
                                    closeFlightGroupName();
                                }}
                            />
                        </div>
                    </div>
                    <div className="displayFlex">
                        <input
                            id="flightGroup"
                            disabled={flightGroupTextStatus}
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                              
                                props.textComponentSave(e.target.value, flightGroupSwitchId)
                            }}
                        ></input>
                    </div>
                </div></div>
                <div style={{ display: flightNoName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{flightNoSwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={flightNoSwitchId}
                                    label=""
                                    defaultChecked={flightNoEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                        props.textComponentSetEnabled(flightNoSwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        closeFlightNoName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={flightNoTextStatus}
                                type="text"
                                id="flightNo"
                                className="form-control"
                                onChange={(e) => {
                                    
                                    props.textComponentSave(e.target.value, flightNoSwitchId)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: yieldName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{yieldSwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={yieldSwitchId}
                                    label=""
                                    defaultChecked={yieldEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                        props.textComponentSetEnabled(yieldSwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        closeYieldName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={yieldTextStatus}
                                type="text"
                                id="yield"
                                className="form-control"
                                onChange={(e) => {
                                    
                                    props.textComponentSave(e.target.value, yieldSwitchId)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: serviceRecoveryName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{serviceRecoverySwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={serviceRecoverySwitchId}
                                    label=""
                                    defaultChecked={serviceRecoveryEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                        props.textComponentSetEnabled(serviceRecoverySwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        closeServiceRecoveryName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={serviceRecoveryTextStatus}
                                type="text"
                                id="serviceRecovery"
                                className="form-control"
                                onChange={(e) => {
                                    props.textComponentSave(e.target.value, serviceRecoverySwitchId)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: queuedBookingsName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{queuedBookingsSwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={queuedBookingsSwitchId}
                                    label=""
                                    defaultChecked={queuedBookingsEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                        props.textComponentSetEnabled(queuedBookingsSwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        closeQueuedBookingsName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={queuedBookingsTextStatus}
                                type="text"
                                id="queuedBookings"
                                className="form-control"
                                onChange={(e) => {
                                    
                                    props.textComponentSave(e.target.value, queuedBookingsSwitchId)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: weightName }}>
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{weightSwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={weightSwitchId}
                                    label=""
                                    defaultChecked={weightEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                        props.textComponentSetEnabled(weightSwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        closeWeightName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={weightTextStatus}
                                type="text"
                                id="weight"
                                className="form-control"
                                onChange={(e) => {
                                    
                                    props.textComponentSave(e.target.value, weightSwitchId)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: volumeName }}>
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{volumeSwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={volumeSwitchId}
                                    label=""
                                    defaultChecked={volumeEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                        props.textComponentSetEnabled(volumeSwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        closeVolumeName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={volumeTextStatus}
                                type="text"
                                id="volume"
                                className="form-control"
                                onChange={(e) => {
                                   
                                    props.textComponentSave(e.target.value, volumeSwitchId)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: aircraftName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{aircraftSwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={aircraftSwitchId}
                                    label=""
                                    defaultChecked={aircraftEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                        props.textComponentSetEnabled(aircraftSwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        closeAircraftName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={aircraftTextStatus}
                                type="text"
                                id="aircraft"
                                className="form-control"
                                onChange={(e) => {
                                    props.textComponentSave(e.target.value, aircraftSwitchId)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: aircraftClassificationName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{aircraftClassificationSwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={aircraftClassificationSwitchId}
                                    label=""
                                    defaultChecked={aircraftClassificationEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                        props.textComponentSetEnabled(aircraftClassificationSwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        closeAircraftClassificationName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={aircraftClassificationTextStatus}
                                type="text"
                                id="aircraftClassification"
                                className="form-control"
                                onChange={(e) => {
                                    
                                    props.textComponentSave(e.target.value, aircraftClassificationSwitchId)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: flightTypeName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{flightTypeSwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={flightTypeSwitchId}
                                    label=""
                                    defaultChecked={flightTypeEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                        props.textComponentSetEnabled(flightTypeSwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        closeFlightTypeName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={flightTypeTextStatus}
                                type="text"
                                id="flightType"
                                className="form-control"
                                onChange={(e) => {
                                   
                                    props.textComponentSave(e.target.value, flightTypeSwitchId)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: flightStatusName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{flightStatusSwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={flightStatusSwitchId}
                                    label=""
                                    defaultChecked={flightStatusEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                        props.textComponentSetEnabled(flightStatusSwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        closeFlightStatusName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={flightStatusTextStatus}
                                type="text"
                                id="flightStatus"
                                className="form-control"
                                onChange={(e) => {
                                   
                                    props.textComponentSave(e.target.value, flightStatusSwitchId)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: segmentStatusName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{segmentStatusSwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={segmentStatusSwitchId}
                                    label=""
                                    defaultChecked={segmentStatusEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                        props.textComponentSetEnabled(segmentStatusSwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        closeSegmentStatusName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={segmentStatusTextStatus}
                                type="text"
                                id="segmentStatus"
                                className="form-control"
                                onChange={(e) => {
                                  
                                    props.textComponentSave(e.target.value, segmentStatusSwitchId)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: milestoneStatusName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{milestoneStatusSwitchId}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={milestoneStatusSwitchId}
                                    label=""
                                    defaultChecked={milestoneStatusEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                        props.textComponentSetEnabled(milestoneStatusSwitchId,e.target.checked)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        closeMilestoneStatusName();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={milestoneStatusTextStatus}
                                type="text"
                                id="milestoneStatus"
                                className="form-control"
                                onChange={(e) => {
                                   
                                    props.textComponentSave(e.target.value, milestoneStatusSwitchId)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return <div></div>
    }

}