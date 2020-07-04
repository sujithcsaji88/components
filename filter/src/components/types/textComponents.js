import React, { Component } from 'react';
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
export default class TextComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingProfileValue,
            flightGroupValue,
            flightNoValue, yieldValue,
            serviceRecoveryValue,
            weightValue, volumeValue,
            aircraftValue, queuedBookingsValue,
            aircraftClassificationValue,
            flightTypeValue,
            flightStatusValue,
            segmentStatusValue,
            milestoneStatusValue,
            bookingProfileName: "none",
            flightGroupName: "none",
            flightNoName: "none",
            yieldName: "none",
            serviceRecoveryName: "none",
            weightName: "none",
            volumeName: "none",
            aircraftName: "none",
            queuedBookingsName: "none",
            aircraftClassificationName: "none",
            flightTypeName: "none",
            flightStatusName: "none",
            segmentStatusName: "none",
            milestoneStatusName: "none",
            bookingProfileTextStatus: true,
            flightGroupTextStatus: true,
            flightNoTextStatus: true,
            yieldTextStatus: true,
            serviceRecoveryTextStatus: true,
            weightTextStatus: true,
            volumeTextStatus: true,
            aircraftTextStatus: true,
            queuedBookingsTextStatus: true,
            aircraftClassificationTextStatus: true,
            flightTypeTextStatus: true,
            flightStatusTextStatus: true, segmentStatusTextStatus: true,
            milestoneStatusTextStatus: true, bookingProfileEnabled,
            flightGroupEnabled, flightNoEnabled, yieldEnabled,
            serviceRecoveryEnabled, weightEnabled, volumeEnabled,
            aircraftEnabled, queuedBookingsEnabled,
            aircraftClassificationEnabled, flightTypeEnabled,
            flightStatusEnabled, segmentStatusEnabled,
            milestoneStatusEnabled, bookingProfileSwitchId: '',
            flightGroupSwitchId: '', flightNoSwitchId: '', yieldSwitchId: '',
            serviceRecoverySwitchId: '', weightSwitchId: '', volumeSwitchId: '',
            aircraftSwitchId: '', queuedBookingsSwitchId: '',
            aircraftClassificationSwitchId: '', flightTypeSwitchId: '',
            flightStatusSwitchId: '', segmentStatusSwitchId: '',
            milestoneStatusSwitchId: ''
        }
    }

    componentDidMount = (props) => {
        // Set the name state when only a particular attribute in the array is passed as props
        if (textComponentArray.includes(props.name)) {
            setName(props.name)
        }
        if (props.name === bookingProfile) {
            setBookingProfileEnabled(props.enabled)
            setBookingProfileName("")
            setBookingProfileSwitchId(bookingProfile)
            setBookingProfileValue("")
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
    render() {
        if (bookingProfileSwitchId === bookingProfile || flightGroupSwitchId === flightGroup || flightNoSwitchId === flightNo || yieldSwitchId === yielD || serviceRecoverySwitchId === serviceRecovery || queuedBookingsSwitchId === queuedBookings || weightSwitchId === weight || volumeSwitchId === volume || aircraftSwitchId === aircraft || aircraftClassificationSwitchId === aircraftClassification || flightTypeSwitchId === flightType || flightStatusSwitchId === flightStatus || segmentStatusSwitchId === segmentStatus || milestoneStatusSwitchId === milestoneStatus) {
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
                                        handleBookingProfileValue(e.target.value);
                                        props.textComponentSave(e.target.value, bookingProfileSwitchId);
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
                                    defaultValue={flightGroupValue}
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
                                        defaultChecked={flightNoEnabled}
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
                                    defaultValue={flightNoValue}
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
                                        defaultChecked={yieldEnabled}
                                        onClick={(e) => {
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
                                    defaultValue={yieldValue}
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
                                        defaultChecked={serviceRecoveryEnabled}
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
                                    defaultValue={serviceRecoveryValue}
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
                                        defaultChecked={queuedBookingsEnabled}
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
                                    defaultValue={queuedBookingsValue}
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
                                        defaultChecked={weightEnabled}
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
                                    defaultValue={weightValue}
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
                                        defaultChecked={volumeEnabled}
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
                                    defaultValue={volumeValue}
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
                                        defaultChecked={aircraftEnabled}
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
                                    defaultValue={aircraftValue}
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
                                        defaultChecked={aircraftClassificationEnabled}
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
                                    defaultValue={aircraftClassificationValue}
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
                                        defaultChecked={flightTypeEnabled}
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
                                    defaultValue={flightTypeValue}
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
                                        defaultChecked={flightStatusEnabled}
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
                                    defaultValue={flightStatusValue}
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
                                        defaultChecked={segmentStatusEnabled}
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
                                    defaultValue={segmentStatusValue}
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
                                        defaultChecked={milestoneStatusEnabled}
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
                                    defaultValue={milestoneStatusValue}
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
            <div></div>
        }
    }
}
