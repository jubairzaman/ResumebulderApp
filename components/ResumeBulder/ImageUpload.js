import React, { useRef } from 'react';
import Modal from '@mui/material/Modal';
import BasicModal from '../BasicModal';


class ImageUpload extends React.Component {


    constructor(props) {

        super(props)
        this.state = {
            file: "",
            open: false,
            errorMessage: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.clearImage = this.clearImage.bind(this)
        this.inputRef = React.createRef();
        this.modalRef = React.createRef();
    }

    async handleChange(event) {

        let url = "";
        let errorMessage = ""
        const name = event?.target?.files[0]?.name;
        if (name != null && name !== "") {
            const lastDot = name.lastIndexOf('.');
            const fileName = name.substring(0, lastDot);
            const ext = name.substring(lastDot + 1).toLowerCase();
            if (ext == "jpg" || ext == "jpeg" || ext == "png") {
                url = URL.createObjectURL(event.target.files[0])
            } else {
                this.inputRef.current.value = ""
                errorMessage = "File Is Not An Valid Image"

            }
        } else {
            errorMessage = "Invalid File Type"
            this.inputRef.current.value = ""
        }

        if (this.props.onChange) {
            this.props.onChange(url)
        }

        this.setState({
            file: url,
            errorMessage: errorMessage
        })

        if (errorMessage !== "") {
            this.modalRef.current.childMethod()
        }
    }
    clearImage() {
        this.setState({
            file: "",
            errorMessage: ""
        })
        if (this.props.onChange) {
            this.props.onChange("")
        }
    }

    render() {
        return (
            <div>
                {this.state.file === "" ?
                    <div className='flex flex-col'>
                        <span>&nbsp;</span>
                        <label className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" htmlFor="file_input">Upload file</label>
                        <input className="hidden" id="file_input" type="file" onChange={this.handleChange} ref={this.inputRef} />
                    </div> :
                    <div className='relative'>
                        <img className='aspect-square w-32 ' src={this.state.file} />
                        <span className='absolute top-0 right-0 p-2 bg-red-100' onClick={this.clearImage}>x</span>
                    </div>
                }
                <BasicModal ref={this.modalRef} small={true}>
                    <div className='w-full'>
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <span className="block sm:inline">{this.state.errorMessage}</span>
                        </div>
                    </div>
                </BasicModal>

            </div>
        );
    }
}


export default ImageUpload;

