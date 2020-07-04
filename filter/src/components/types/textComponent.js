import React, { useState, useEffect } from 'react';
import { BOOKING_PROFILE, FLIGHT_GROUP, FLIGHT_NO, YEILD, SERVICE_RECOVERY, WEIGHT, VOLUME, AIRCRAFT, QUEUED_BOOKINGS, AIRCRAFT_CLASSIFICATION, FLIGHT_TYPE, MILESTONE_STATUS, FLIGHT_STATUS, SEGMENT_STATUS } from "../../constants/filtertypeconstants";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import filterData from "../../stubs/FilterData.json";

let textComponentArray = [];
let applyFilterArray = [];
let status = false;
let bookingProfile, flightGroup, flightNo, yielD, serviceRecovery, weight, volume, aircraft, queuedBookings, aircraftClassification, flightType, flightStatus, segmentStatus, milestoneStatus;
filterData.filter.forEach(item => {
    if (item.name === BOOKING_PROFILE) {
        bookingProfile = BOOKING_PROFILE;
        textComponentArray.push(bookingProfile);
    }
    else if (item.name === FLIGHT_GROUP) {
        flightGroup = FLIGHT_GROUP;
        textComponentArray.push(flightGroup);
    }
    else if (item.name === FLIGHT_NO) {
        flightNo = FLIGHT_NO;
        textComponentArray.push(flightNo);
    }
    else if (item.name === YEILD) {
        yielD = YEILD;
        textComponentArray.push(yielD);
    }
    else if (item.name === SERVICE_RECOVERY) {
        serviceRecovery = SERVICE_RECOVERY;
        textComponentArray.push(serviceRecovery);
    }
    else if (item.name === WEIGHT) {
        weight = WEIGHT;
        textComponentArray.push(weight);
    }
    else if (item.name === VOLUME) {
        volume = VOLUME;
        textComponentArray.push(volume);
    }
    else if (item.name === AIRCRAFT) {
        aircraft = AIRCRAFT;
        textComponentArray.push(aircraft);
    }
    else if (item.name === QUEUED_BOOKINGS) {
        queuedBookings = QUEUED_BOOKINGS;
        textComponentArray.push(queuedBookings);
    }
    else if (item.name === AIRCRAFT_CLASSIFICATION) {
        aircraftClassification = AIRCRAFT_CLASSIFICATION;
        textComponentArray.push(aircraftClassification);
    }
    else if (item.name === FLIGHT_TYPE) {
        flightType = FLIGHT_TYPE;
        textComponentArray.push(flightType);
    }
    else if (item.name === FLIGHT_STATUS) {
        flightStatus = FLIGHT_STATUS;
        textComponentArray.push(flightStatus);
    }
    else if (item.name === SEGMENT_STATUS) {
        segmentStatus = SEGMENT_STATUS;
        textComponentArray.push(segmentStatus);
    }
    else if (item.name === MILESTONE_STATUS) {
        milestoneStatus = MILESTONE_STATUS;
        textComponentArray.push(milestoneStatus);
    }
})
export default function TextComponent(props) {

    const [bookingProfileValue, setBookingProfileValue] = useState();
    const [flightGroupValue, setFlightGroupValue] = useState();
    const [flightNoValue, setFlightNoValue] = useState()
    const [yieldValue, setYieldValue] = useState();
    const [serviceRecoveryValue, setServiceRecoveryValue] = useState()
    const [weightValue, setWeightValue] = useState();
    const [volumeValue, setVolumeValue] = useState();
    const [aircraftValue, setAircraftValue] = useState();
    const [queuedBookingsValue, setQueuedBookingsValue] = useState();
    const [aircraftClassificationValue, setAircraftClassificationValue] = useState()
    const [flightTypeValue, setFlightTypeValue] = useState();
    const [flightStatusValue, setFlightStatusValue] = useState();
    const [segmentStatusValue, setSegmentStatusValue] = useState()
    const [milestoneStatusValue, setMilestoneStatusValue] = useState()
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
    const [bookingProfileEnabled, setBookingProfileEnabled] = useState(false);
    const [flightGroupEnabled, setFlightGroupEnabled] = useState(false);
    const [flightNoEnabled, setFlightNoEnabled] = useState(false);
    const [yieldEnabled, setYieldEnabled] = useState(false)
    const [serviceRecoveryEnabled, setServiceRecoveryEnabled] = useState(false)
    const [weightEnabled, setWeightEnabled] = useState(false)
    const [volumeEnabled, setVolumeEnabled] = useState(false)
    const [aircraftEnabled, setAircraftEnabled] = useState(false)
    const [queuedBookingsEnabled, setQueuedBookingsEnabled] = useState(false)
    const [aircraftClassificationEnabled, setAircraftClassificationEnabled] = useState(false)
    const [flightTypeEnabled, setFlightTypeEnabled] = useState(false)
    const [flightStatusEnabled, setFlightStatusEnabled] = useState(false)
    const [segmentStatusEnabled, setSegmentStatusEnabled] = useState(false)
    const [milestoneStatusEnabled, setMilestoneStatusEnabled] = useState(false)
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
                setBookingProfileName("")
                setBookingProfileSwitchId(bookingProfile)
            }
            if (props.name === flightGroup) {
                setFlightGroupName("");
                setFlightGroupSwitchId(flightGroup)
            }
            if (props.name === flightNo) {
                setFlightNoName("");
                setFlightNoSwitchId(flightNo)
            }
            if (props.name === yielD) {
                setYieldName("");
                setYieldSwitchId(yielD)
            }
            if (props.name === serviceRecovery) {
                setServiceRecoveryName("");
                setServiceRecoverySwitchId(serviceRecovery)
            }
            if (props.name === queuedBookings) {
                setQueuedBookingsName("");
                setQueuedBookingsSwitchId(queuedBookings)
            }
            if (props.name === weight) {
                setWeightName("");
                setWeightSwitchId(weight)
            }
            if (props.name === volume) {
                setVolumeName("");
                setVolumeSwitchId(volume)
            }
            if (props.name === aircraft) {
                setAircraftName("");
                setAircraftSwitchId(aircraft)
            }
            if (props.name === aircraftClassification) {
                setAircraftClassificationName("");
                setAircraftClassificationSwitchId(aircraftClassification)
            }
            if (props.name === flightType) {
                setFlightTypeName("");
                setFlightTypeSwitchId(flightType)
            }
            if (props.name === flightStatus) {
                setFlightStatusName("");
                setFlightStatusSwitchId(flightStatus)
            }
            if (props.name === segmentStatus) {
                setSegmentStatusName("");
                setSegmentStatusSwitchId(segmentStatus)
            }
            if (props.name === milestoneStatus) {
                setMilestoneStatusName("");
                setMilestoneStatusSwitchId(milestoneStatus)
            }
        }
        , [props.name]);

    useEffect(
        () => {
            if (props.filterInfoToShow !== undefined) {
                applyFilterArray = []
                props.filterInfoToShow.forEach(item => {
                    if (textComponentArray.includes(item.column)) {
                        applyFilterArray.push(item.column);
                    }
                })
                if (applyFilterArray.length > 0) {
                    status = true;
                }
                if (status === true) {
                    props.filterInfoToShow.forEach(item => {
                        if (item.column === bookingProfile) {
                            setBookingProfileName("")
                            setBookingProfileSwitchId(bookingProfile);
                            setBookingProfileValue(item.value);
                            setBookingProfileEnabled(true);
                            setBookingProfileTextStatus(false)
                            props.textComponentSave(item.value, bookingProfile)
                        }
                        else if (item.column === flightGroup) {
                            setFlightGroupName("")
                            setFlightGroupSwitchId(flightGroup);
                            setFlightGroupValue(item.value)
                            setFlightGroupEnabled(true);
                            setFlightGroupTextStatus(false)
                            props.textComponentSave(item.value, flightGroup)
                        }
                        else if (item.column === flightNo) {
                            setFlightNoName("")
                            setFlightNoValue(item.value)
                            setFlightNoSwitchId(flightNo)
                            setFlightNoEnabled(true);
                            setFlightNoTextStatus(false)
                            props.textComponentSave(item.value, flightNo)
                        }
                        else if (item.column === yielD) {
                            setYieldValue(item.value)
                            setYieldName("")
                            setYieldSwitchId(yielD)
                            setYieldEnabled(true);
                            setYieldTextStatus(false)
                            props.textComponentSave(item.value, yielD)
                        }
                        else if (item.column === queuedBookings) {
                            setQueuedBookingsValue(item.value)
                            setQueuedBookingsName("")
                            setQueuedBookingsSwitchId(queuedBookings)
                            setQueuedBookingsEnabled(true);
                            setQueuedBookingsTextStatus(false)
                            props.textComponentSave(item.value, queuedBookings)
                        }
                        else if(item.column === serviceRecovery){
                            setServiceRecoveryValue(item.value)
                            setServiceRecoveryName("")
                            setServiceRecoverySwitchId(serviceRecovery)
                            setServiceRecoveryEnabled(true);
                            setServiceRecoveryTextStatus(false)
                            props.textComponentSave(item.value, serviceRecovery)
                        }
                        else if(item.column === aircraft){
                            setAircraftValue(item.value)
                            setAircraftName("")
                            setAircraftSwitchId(aircraft)
                            setAircraftEnabled(true);
                            setAircraftTextStatus(false)
                            props.textComponentSave(item.value, aircraft)
                        }
                        else if(item.column === aircraftClassification){
                            setAircraftClassificationValue(item.value)
                            setAircraftClassificationName("")
                            setAircraftClassificationSwitchId(aircraftClassification)
                            setAircraftClassificationEnabled(true);
                            setAircraftClassificationTextStatus(false)
                            props.textComponentSave(item.value, aircraftClassification)
                        }
                        else if(item.column === weight){
                            setWeightValue(item.value)
                            setWeightName("")
                            setWeightSwitchId(weight)
                            setWeightEnabled(true);
                            setWeightTextStatus(false)
                            props.textComponentSave(item.value, weight)
                        }
                        else if(item.column === volume){
                            setVolumeValue(item.value)
                            setVolumeName("")
                            setVolumeSwitchId(volume)
                            setVolumeEnabled(true);
                            setVolumeTextStatus(false)
                            props.textComponentSave(item.value, volume)
                        }
                        else if(item.column === flightType){
                            setFlightTypeValue(item.value)
                            setFlightTypeName("")
                            setFlightTypeSwitchId(flightType)
                            setFlightTypeEnabled(true);
                            setFlightTypeTextStatus(false)
                            props.textComponentSave(item.value, flightType)
                        }
                        else if(item.column === flightStatus){
                            setFlightStatusValue(item.value)
                            setFlightStatusName("")
                            setFlightStatusSwitchId(flightStatus)
                            setFlightStatusEnabled(true);
                            setFlightStatusTextStatus(false)
                            props.textComponentSave(item.value, flightStatus)
                        }
                        else if(item.column === segmentStatus){
                            setSegmentStatusValue(item.value)
                            setSegmentStatusName("")
                            setSegmentStatusSwitchId(segmentStatus)
                            setSegmentStatusEnabled(true);
                            setSegmentStatusTextStatus(false)
                            props.textComponentSave(item.value, segmentStatus)
                        }
                        else if(item.column === milestoneStatus){
                            setMilestoneStatusValue(item.value)
                            setMilestoneStatusName("")
                            setMilestoneStatusSwitchId(milestoneStatus)
                            setMilestoneStatusEnabled(true);
                            setMilestoneStatusTextStatus(false)
                            props.textComponentSave(item.value, milestoneStatus)
                        }

                   })                  
}
            }
            //props.clearFilterInfoToShow();
        }
        , []);
// All functions below manage the enabled attribute
const enableSwitchChange = (e) => {
    if (e.target.id === bookingProfile) {
        setBookingProfileEnabled(e.target.checked);
        setBookingProfileTextStatus(!e.target.checked)
    }
    else if (e.target.id === flightGroup) {
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

//function to set the value of all the corresponding fields
const handleBookingProfileValue = (value) => {
    setBookingProfileValue(value);
}
const handleFlightGroupValue = (value) => {
    setFlightGroupValue(value);

}
const handleFlightNoValue = (value) => {
    setFlightNoValue(value);

}
const handleYieldValue = (value) => {
    setYieldValue(value);

}
const handleServiceRecoveryValue = (value) => {
    setServiceRecoveryValue(value);

}
const handleQueuedBookingsValue = (value) => {
    setQueuedBookingsValue(value);

}
const handleWeightValue = (value) => {
    setWeightValue(value);

}
const handleVolumeValue = (value) => {
    setVolumeValue(value);

}
const handleAircraftValue = (value) => {
    setAircraftValue(value);

}
const handleAircraftClassificationValue = (value) => {
    setAircraftClassificationValue(value);

}
const handleFlightTypeValue = (value) => {
    setFlightTypeValue(value);

}
const handleFlightStatusValue = (value) => {
    setFlightStatusValue(value);

}
const handleSegmentStatusValue = (value) => {
    setSegmentStatusValue(value);

}
const handleMilestoneStatusValue = (value) => {
    setMilestoneStatusValue(value);

}


// Below are respective closing component event handlers
const closeBookingProfileName = () => {
    props.clearTextComponentName(bookingProfileSwitchId);
    setBookingProfileName("none");
    setBookingProfileEnabled(false);
    //setBookingProfileSwitchId(bookingProfileSwitchId);
    setBookingProfileTextStatus(true);
    setBookingProfileValue("")
    // document.getElementById("bookingProfile").value = "";
    // document.getElementById(bookingProfileSwitchId).checked = '';
}
const closeFlightGroupName = () => {
    props.clearTextComponentName(flightGroupSwitchId);
    setFlightGroupName("none");
    setFlightGroupEnabled(false);
    //setFlightGroupSwitchId('');
    setFlightGroupTextStatus(true)
    setFlightGroupValue('');
}
const closeFlightNoName = () => {
    props.clearTextComponentName(flightNoSwitchId);
    setFlightNoName("none");
    setFlightNoEnabled(false);
    //setFlightNoSwitchId('');
    setFlightNoTextStatus(true)
    setFlightNoValue('')
}
const closeYieldName = () => {
    props.clearTextComponentName(yieldSwitchId);
    setYieldName("none");
    setYieldEnabled(false);
    //setYieldSwitchId('');
    setYieldTextStatus(true)
    setYieldValue('');
}
const closeQueuedBookingsName = () => {
    props.clearTextComponentName(queuedBookingsSwitchId);
    setQueuedBookingsName("none");
    setQueuedBookingsEnabled(false);
    //setQueuedBookingsSwitchId('');
    setQueuedBookingsTextStatus(true)
    setQueuedBookingsValue('')
}

const closeServiceRecoveryName = () => {
    props.clearTextComponentName(serviceRecoverySwitchId);
    setServiceRecoveryName("none");
    setServiceRecoveryEnabled(false);
    //setServiceRecoverySwitchId('');
    setServiceRecoveryTextStatus(true)
    setServiceRecoveryValue('')
}
const closeVolumeName = () => {
    props.clearTextComponentName(volumeSwitchId);
    setVolumeName("none");
    setVolumeEnabled(false);
    //setVolumeSwitchId('');
    setVolumeTextStatus(true)
    setVolumeValue('');
}
const closeWeightName = () => {
    props.clearTextComponentName(weightSwitchId);
    setWeightName("none");
    setWeightEnabled(false);
    //setWeightSwitchId('');
    setWeightTextStatus(true)
    setWeightValue('');
}
const closeAircraftName = () => {
    props.clearTextComponentName(aircraftSwitchId);
    setAircraftName("none");
    setAircraftEnabled(false);
    //setAircraftSwitchId('');
    setAircraftTextStatus(true)
    setAircraftValue('');
}
const closeAircraftClassificationName = () => {
    props.clearTextComponentName(aircraftClassificationSwitchId);
    setAircraftClassificationName("none");
    setAircraftClassificationEnabled(false);
    //setAircraftClassificationSwitchId('');
    setAircraftClassificationTextStatus(true);
    setAircraftClassificationValue('')
}
const closeFlightTypeName = () => {
    props.clearTextComponentName(flightTypeSwitchId);
    setFlightTypeName("none")
    setFlightTypeEnabled(false);
    //setFlightTypeSwitchId('');
    setFlightTypeTextStatus(true)
    setFlightTypeValue('');
}
const closeFlightStatusName = () => {
    props.clearTextComponentName(flightStatusSwitchId);
    setFlightStatusName("none");
    setFlightStatusEnabled(false);
    //setFlightStatusSwitchId('');
    setFlightStatusTextStatus(true)
    setFlightStatusValue('');
}
const closeSegmentStatusName = () => {
    props.clearTextComponentName(segmentStatusSwitchId);
    setSegmentStatusName("none");
    setSegmentStatusEnabled(false);
    //setSegmentStatusSwitchId('');
    setSegmentStatusTextStatus(true);
    setSegmentStatusValue('');
}
const closeMilestoneStatusName = () => {
    props.clearTextComponentName(milestoneStatusSwitchId);
    setMilestoneStatusName("none");
    setMilestoneStatusEnabled(false);
    //setMilestoneStatusSwitchId('');
    setMilestoneStatusTextStatus(true);
    setMilestoneStatusValue('');
}
if (name != undefined || applyFilterArray.length > 0) {
    return (
        <div>
            <div style={{ display: bookingProfileName }} >
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
                                checked={bookingProfileEnabled}
                                onChange={(e) => {
                                    enableSwitchChange(e);
                                    props.textComponentSetEnabled(bookingProfileSwitchId, e.target.checked);
                                }}
                            >
                            </Form.Check>
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
                            value={bookingProfileValue}
                            onChange={(e) => {
                                handleBookingProfileValue(e.target.value)
                                props.textComponentSave(e.target.value, bookingProfileSwitchId)
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
                                checked={flightGroupEnabled}
                                onChange={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(flightGroupSwitchId, e.target.checked)
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
                            value={flightGroupValue}
                            onChange={(e) => {
                                handleFlightGroupValue(e.target.value)
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
                                checked={flightNoEnabled}
                                onChange={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(flightNoSwitchId, e.target.checked)
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
                            value={flightNoValue}
                            className="form-control"
                            onChange={(e) => {
                                handleFlightNoValue(e.target.value)
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
                                checked={yieldEnabled}
                                onChange={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(yieldSwitchId, e.target.checked)
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
                            value={yieldValue}
                            onChange={(e) => {
                                handleYieldValue(e.target.value)
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
                                checked={serviceRecoveryEnabled}
                                onClick={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(serviceRecoverySwitchId, e.target.checked)
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
                            value={serviceRecoveryValue}
                            onChange={(e) => {
                                handleServiceRecoveryValue(e.target.value)
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
                                checked={queuedBookingsEnabled}
                                onClick={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(queuedBookingsSwitchId, e.target.checked)
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
                            value={queuedBookingsValue}
                            onChange={(e) => {
                                handleQueuedBookingsValue(e.target.value)
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
                                checked={weightEnabled}
                                onClick={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(weightSwitchId, e.target.checked)
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
                            value={weightValue}
                            onChange={(e) => {
                                handleWeightValue(e.target.value)
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
                                checked={volumeEnabled}
                                onClick={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(volumeSwitchId, e.target.checked)
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
                            value={volumeValue}
                            className="form-control"
                            onChange={(e) => {
                                handleVolumeValue(e.target.value);
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
                                checked={aircraftEnabled}
                                onClick={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(aircraftSwitchId, e.target.checked)
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
                            value={aircraftValue}
                            className="form-control"
                            onChange={(e) => {
                                handleAircraftValue(e.target.value);
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
                                checked={aircraftClassificationEnabled}
                                onClick={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(aircraftClassificationSwitchId, e.target.checked)
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
                            value={aircraftClassificationValue}
                            className="form-control"
                            onChange={(e) => {
                                handleAircraftClassificationValue(e.target.value);
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
                                checked={flightTypeEnabled}
                                onClick={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(flightTypeSwitchId, e.target.checked)
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
                            value={flightTypeValue}
                            className="form-control"
                            onChange={(e) => {
                                handleFlightTypeValue(e.target.value);
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
                                checked={flightStatusEnabled}
                                onClick={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(flightStatusSwitchId, e.target.checked)
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
                            value={flightStatusValue}
                            className="form-control"
                            onChange={(e) => {
                                handleFlightStatusValue(e.target.value);
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
                                checked={segmentStatusEnabled}
                                onClick={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(segmentStatusSwitchId, e.target.checked)
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
                            value={segmentStatusValue}
                            className="form-control"
                            onChange={(e) => {
                                handleSegmentStatusValue(e.target.value);
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
                                checked={milestoneStatusEnabled}
                                onClick={(e) => {
                                    enableSwitchChange(e)
                                    props.textComponentSetEnabled(milestoneStatusSwitchId, e.target.checked)
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
                            value={milestoneStatusValue}
                            className="form-control"
                            onChange={(e) => {
                                handleMilestoneStatusValue(e.target.value);
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