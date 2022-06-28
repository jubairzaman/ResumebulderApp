import React, { useRef } from 'react';
import Modal from '@mui/material/Modal';


class Upload extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            file: null,
            open: false,
            errorMessage: ""

        }
        this.handleChange = this.handleChange.bind(this)
        this.inputRef = React.createRef();;
    }

    handleChange(event) {
        let url = "";
        const name = event?.target?.files[0]?.name;
        if (name != null && name !== "") {
            const lastDot = name.lastIndexOf('.');
            const fileName = name.substring(0, lastDot);
            const ext = name.substring(lastDot + 1).toLowerCase();
            if (ext == "jpg" || ext == "jpeg" || ext == "png") {
                url = URL.createObjectURL(event.target.files[0])
            } else {
                console.log("File type not Supported")
                this.inputRef.current.value = ""
                this.setState({
                    open: true,
                    errorMessage: "File Is Not An Valid Image"
                })
            }
        } else {
            this.setState({
                open: true,
                errorMessage: "Invalid File Type"
            })
            this.inputRef.current.value = ""
        }

        this.setState({
            file: url
        })
    }


    render() {
        return (
            <div>
                <input type="file" onChange={this.handleChange} ref={this.inputRef} />
                <img className='' src={this.state.file} />

                {/* Modal */}

                <Modal
                    open={this.open}

                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div>
                        File Is Not An Valid Image
                    </div>
                </Modal>

            </div>
        );
    }
}


export default Upload;

