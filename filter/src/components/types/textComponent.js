import React, { useState, useEffect } from 'react';
import { BOOKING_PROFILE, FLIGHT_GROUP, FLIGHT_NO, YEILD, SERVICE_RECOVERY, WEIGHT, VOLUME, AIRCRAFT, QUEUED_BOOKINGS, AIRCRAFT_CLASSIFICATION, FLIGHT_TYPE, MILESTONE_STATUS, FLIGHT_STATUS, SEGMENT_STATUS } from "../../constants/filtertypeconstants";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";


export default function TextComponent(props) {
    const [bookingProfileName, setBookingProfileName] = useState("none");
    const [flightGroupName, setFlightGroupName] = useState("none");
    const [flightNoName, setFlightNoName] = useState("none")
    const [yieldName, setYieldName] = useState("none");
    const [serviceRecoveryName, setServiceRecoveryName] = useState("none")
    const [weightName, setWeightName] = useState("none");
    const [volumeName, setVolumeName] = useState("none");
    const [airCraftName, setAirCraftName] = useState("none");
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
    const [airCraftTextStatus, setAirCraftTextStatus] = useState(true)
    const [queuedBookingsTextStatus, setQueuedBookingsTextStatus] = useState(true)
    const [aircraftClassificationTextStatus, setAircraftClassificationTextStatus] = useState(true)
    const [flightTypeTextStatus, setFlightTypeTextStatus] = useState(true)
    const [flightStatusTextStatus, setflightStatusTextStatus] = useState(true)
    const [segmentStatusTextStatus, setSegmentStatusTextStatus] = useState(true)
    const [milestoneStatusTextStatus, setMilestoneStatusTextStatus] = useState(true)
    const [bookingProfileEnabled, setBookingProfileEnabled] = useState();
    const [flightGroupEnabled, setFlightGroupEnabled] = useState();
    const [flightNoEnabled, setFlightNoEnabled] = useState();
    const [yieldEnabled, setYieldEnabled] = useState()
    const [serviceRecoveryEnabled, setServiceRecoveryEnabled] = useState()
    const [weightEnabled, setWeightEnabled] = useState()
    const [volumeEnabled, setVolumeEnabled] = useState()
    const [airCraftEnabled, setAirCraftEnabled] = useState()
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
    const [airCraftSwitchId, setAirCraftSwitchId] = useState('')
    const [queuedBookingsSwitchId, setQueuedBookingsSwitchId] = useState('')
    const [aircraftClassificationSwitchId, setAircraftClassificationSwitchId] = useState('')
    const [flightTypeSwitchId, setFlightTypeSwitchId] = useState('')
    const [flightStatusSwitchId, setFlightStatusSwitchId] = useState('')
    const [segmentStatusSwitchId, setSegmentStatusSwitchId] = useState('')
    const [milestoneStatusSwitchId, setMilestoneStatusSwitchId] = useState('')
    useEffect(
        () => {
            if (props.name === BOOKING_PROFILE) {
                setBookingProfileEnabled(props.enabled)
                setBookingProfileName("")
                setBookingProfileSwitchId(BOOKING_PROFILE)
            }
            if (props.name === FLIGHT_GROUP) {
                setFlightGroupEnabled(props.enabled)
                setFlightGroupName("");
                setFlightGroupSwitchId(FLIGHT_GROUP)
            }
            if (props.name === FLIGHT_NO) {
                setFlightNoEnabled(props.enabled)
                setFlightNoName("");
                setFlightNoSwitchId(FLIGHT_NO)
            }
            if (props.name === YEILD) {
                setYieldEnabled(props.enabled)
                setYieldName("");
                setYieldSwitchId(YEILD)
            }
            if (props.name === SERVICE_RECOVERY) {
                setServiceRecoveryEnabled(props.enabled)
                setServiceRecoveryName("");
                setServiceRecoverySwitchId(SERVICE_RECOVERY)
            }
            if (props.name === QUEUED_BOOKINGS) {
                setQueuedBookingsEnabled(props.enabled)
                setQueuedBookingsName("");
                setQueuedBookingsSwitchId(QUEUED_BOOKINGS)
            }
            if (props.name === WEIGHT) {
                setWeightEnabled(props.enabled)
                setWeightName("");
                setWeightSwitchId(WEIGHT)
            }
            if (props.name === VOLUME) {
                setVolumeEnabled(props.enabled)
                setVolumeName("");
                setVolumeSwitchId(VOLUME)
            }
            if (props.name === AIRCRAFT) {
                setAirCraftEnabled(props.enabled)
                setAirCraftName("");
                setAirCraftSwitchId(AIRCRAFT)
            }
            if (props.name === AIRCRAFT_CLASSIFICATION) {
                setAircraftClassificationEnabled(props.enabled)
                setAircraftClassificationName("");
                setAircraftClassificationSwitchId(AIRCRAFT_CLASSIFICATION)
            }
            if (props.name === FLIGHT_TYPE) {
                setFlightTypeEnabled(props.enabled)
                setFlightTypeName("");
                setFlightTypeSwitchId(FLIGHT_TYPE)
            }
            if (props.name === FLIGHT_STATUS) {
                setFlightStatusEnabled(props.enabled)
                setFlightStatusName("");
                setFlightStatusSwitchId(FLIGHT_STATUS)
            }
            if (props.name === SEGMENT_STATUS) {
                setSegmentStatusEnabled(props.enabled)
                setSegmentStatusName("");
                setSegmentStatusSwitchId(SEGMENT_STATUS)
            }
            if (props.name === MILESTONE_STATUS) {
                setMilestoneStatusEnabled(props.enabled)
                setMilestoneStatusName("");
                setMilestoneStatusSwitchId(MILESTONE_STATUS)
            }
        }
        , [props]);
        
    const enableSwitchChange = (e) => {
        if (e.target.id === BOOKING_PROFILE) {
            setBookingProfileEnabled(e.target.checked);
            if (!bookingProfileEnabled) {
                setBookingProfileTextStatus(false);
            } else {
                setBookingProfileTextStatus(true);
            }
        }
        else if (e.target.id === FLIGHT_GROUP) {
            setFlightGroupEnabled(e.target.checked);
            if (!flightGroupEnabled) {
                setFlightGroupTextStatus(false);
            } else {
                setFlightGroupTextStatus(true);
            }
        }
        else if (e.target.id === FLIGHT_NO) {
            setFlightNoEnabled(e.target.checked);
            if (!flightNoEnabled) {
                setFlightNoTextStatus(false);
            } else {
                setFlightNoTextStatus(true);
            }
        }
        else if (e.target.id === YEILD) {
            setYieldEnabled(e.target.checked);
            if (!yieldEnabled) {
                setYieldTextStatus(false);
            } else {
                setYieldTextStatus(true);
            }
        }
        else if (e.target.id === SERVICE_RECOVERY) {
            setServiceRecoveryEnabled(e.target.checked);
            if (!serviceRecoveryEnabled) {
                setServiceRecoveryTextStatus(false);
            } else {
                setServiceRecoveryTextStatus(true);
            }
        }
        else if (e.target.id === QUEUED_BOOKINGS) {
            setQueuedBookingsEnabled(e.target.checked);
            if (!queuedBookingsEnabled) {
                setQueuedBookingsTextStatus(false);
            } else {
                setQueuedBookingsTextStatus(true);
            }
        }
        else if (e.target.id === WEIGHT) {
            setWeightEnabled(e.target.checked);
            if (!weightEnabled) {
                setWeightTextStatus(false);
            } else {
                setWeightTextStatus(true);
            }
        }
        else if (e.target.id === VOLUME) {
            setVolumeEnabled(e.target.checked);
            if (!volumeEnabled) {
                setVolumeTextStatus(false);
            } else {
                setVolumeTextStatus(true);
            }
        }
        else if (e.target.id === AIRCRAFT) {
            setAirCraftEnabled(e.target.checked);
            if (!airCraftEnabled) {
                setAirCraftTextStatus(false);
            } else {
                setAirCraftTextStatus(true);
            }
        }
        else if (e.target.id === AIRCRAFT_CLASSIFICATION) {
            setAircraftClassificationEnabled(e.target.checked);
            if (!aircraftClassificationEnabled) {
                setAircraftClassificationTextStatus(false);
            } else {
                setAircraftClassificationTextStatus(true);
            }
        }
        else if (e.target.id === FLIGHT_TYPE) {
            setFlightTypeEnabled(e.target.checked);
            if (!flightTypeEnabled) {
                setFlightTypeTextStatus(false);
            } else {
                setFlightTypeTextStatus(true);
            }
        }
        else if (e.target.id === FLIGHT_STATUS) {
            setFlightStatusEnabled(e.target.checked);
            if (!flightStatusEnabled) {
                setflightStatusTextStatus(false);
            } else {
                setflightStatusTextStatus(true);
            }
        }
        else if (e.target.id === SEGMENT_STATUS) {
            setSegmentStatusEnabled(e.target.checked);
            if (!segmentStatusEnabled) {
                setSegmentStatusTextStatus(false);
            } else {
                setSegmentStatusTextStatus(true);
            }
        }
        else if (e.target.id === MILESTONE_STATUS) {
            setMilestoneStatusEnabled(e.target.checked);
            if (!milestoneStatusEnabled) {
                setMilestoneStatusTextStatus(false);
            } else {
                setMilestoneStatusTextStatus(true);
            }
        }
    }
    if (bookingProfileSwitchId === BOOKING_PROFILE || flightGroupSwitchId === FLIGHT_GROUP || flightNoSwitchId === FLIGHT_NO || yieldSwitchId === YEILD || serviceRecoverySwitchId === SERVICE_RECOVERY || queuedBookingsSwitchId === QUEUED_BOOKINGS || weightSwitchId === WEIGHT || volumeSwitchId === VOLUME || airCraftSwitchId === AIRCRAFT || aircraftClassificationSwitchId === AIRCRAFT_CLASSIFICATION || flightTypeSwitchId === FLIGHT_TYPE || flightStatusSwitchId === FLIGHT_STATUS || segmentStatusSwitchId === SEGMENT_STATUS || milestoneStatusSwitchId === MILESTONE_STATUS) {
        return (
            <div>
                <div style={{ display: bookingProfileName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{BOOKING_PROFILE}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    label=""
                                    id={BOOKING_PROFILE}
                                    defaultChecked={bookingProfileEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e);
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={(e) => {
                                        props.closeTextComponent();
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={bookingProfileTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: flightGroupName }} ><div className="filter__input">
                    <div className="filter__input-title">
                        <div className="filter__label">
                            <span>{FLIGHT_GROUP}</span>
                        </div>
                        <div className="filter__control">
                            <Form.Check
                                type="switch"
                                id={flightGroupSwitchId}
                                label=""
                                defaultChecked={flightGroupEnabled}
                                onClick={(e) => {
                                    enableSwitchChange(e)
                                }}
                            />
                            <FontAwesomeIcon
                                icon={faTimes}
                                type="button"
                                onClick={() => {
                                    console.log("close click")
                                }}
                            />
                        </div>
                    </div>
                    <div className="displayFlex">
                        <input
                            disabled={flightGroupTextStatus}
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                                console.log(e.target.value)
                            }}
                        ></input>
                    </div>
                </div></div>
                <div style={{ display: flightNoName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{FLIGHT_NO}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={flightNoSwitchId}
                                    label=""
                                    defaultChecked={flightNoEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        console.log("close click")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={flightNoTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: yieldName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{YEILD}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={yieldSwitchId}
                                    label=""
                                    defaultChecked={yieldEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        console.log("close click")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={yieldTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: serviceRecoveryName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{SERVICE_RECOVERY}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={serviceRecoverySwitchId}
                                    label=""
                                    defaultChecked={serviceRecoveryEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        console.log("close click")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={serviceRecoveryTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: queuedBookingsName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{QUEUED_BOOKINGS}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={queuedBookingsSwitchId}
                                    label=""
                                    defaultChecked={queuedBookingsEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        console.log("close click")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={queuedBookingsTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: weightName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{WEIGHT}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={weightSwitchId}
                                    label=""
                                    defaultChecked={weightEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        console.log("close click")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={weightTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: volumeName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{VOLUME}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={volumeSwitchId}
                                    label=""
                                    defaultChecked={volumeEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        console.log("close click")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={volumeTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: airCraftName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{AIRCRAFT}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={airCraftSwitchId}
                                    label=""
                                    defaultChecked={airCraftEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        console.log("close click")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={airCraftTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: aircraftClassificationName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{AIRCRAFT_CLASSIFICATION}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={aircraftClassificationSwitchId}
                                    label=""
                                    defaultChecked={aircraftClassificationEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        console.log("close click")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={aircraftClassificationTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: flightTypeName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{FLIGHT_TYPE}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={flightTypeSwitchId}
                                    label=""
                                    defaultChecked={flightTypeEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        console.log("close click")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={flightTypeTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: flightStatusName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{FLIGHT_STATUS}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={flightStatusSwitchId}
                                    label=""
                                    defaultChecked={flightStatusEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        console.log("close click")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={flightStatusTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: segmentStatusName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{SEGMENT_STATUS}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={segmentStatusSwitchId}
                                    label=""
                                    defaultChecked={segmentStatusEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        console.log("close click")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={segmentStatusTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
                <div style={{ display: milestoneStatusName }} >
                    <div className="filter__input">
                        <div className="filter__input-title">
                            <div className="filter__label">
                                <span>{MILESTONE_STATUS}</span>
                            </div>
                            <div className="filter__control">
                                <Form.Check
                                    type="switch"
                                    id={milestoneStatusSwitchId}
                                    label=""
                                    defaultChecked={milestoneStatusEnabled}
                                    onClick={(e) => {
                                        enableSwitchChange(e)
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    type="button"
                                    onClick={() => {
                                        console.log("close click")
                                    }}
                                />
                            </div>
                        </div>
                        <div className="displayFlex">
                            <input
                                disabled={milestoneStatusTextStatus}
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    console.log(e.target.value)
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