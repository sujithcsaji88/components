import React,{Component} from 'react';

class QueuedBookingEdit extends Component{

    getValue() {
		if (this) {
            const { sr, volume} = this;
            if (sr && volume) {
              return { sr: sr.value, volume: volume.value};
              }
          }
        }

        render(){
            const { value, onUpdate, ...rest } = this.props;
            return [
                <input
                    {...rest}
                    key='queuedBookingSr'
                    defaultValue={value.sr}
                    ref={(node) => (this.sr = node)}
                    type='text'
                    style={{ width: "100%", marginBottom: "10px" }}
                >
                </input>,
                <input
                    {...rest}
                    key='queuedBookingVolume'
                    defaultValue={value.volume}
                    ref={(node) => (this.volume = node)}
                    type='text'
                    style={{ width: "100%", marginBottom: "10px" }}
                >
                </input>,
            ];
        }
}

export default QueuedBookingEdit