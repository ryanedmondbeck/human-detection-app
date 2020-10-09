import axios from 'axios'; 
import React,{Component} from 'react'; 
const API_KEY = process.env.REACT_APP_COMPUTER_VISION_API_KEY;

class App extends Component { 
	state = { 
		// Initially, no file is selected 
		selectedFile: null,
		isClick: false,
		isPerson: false,
		isFileSelected: false
	}; 

	// Select a file 
	onFileChange = event => { 
		this.setState({ selectedFile: event.target.files[0] }); 
		this.setState({ isFileSelected: true, isClick: false});
	}; 
	
	// After file is uploaded, click Submit
	onSubmit = () => { 
		if (this.state.isFileSelected) {
			// Create an object of formData
			const formData = new FormData(); 
			// Update the formData object 
			formData.append( 
				"myFile", 
				this.state.selectedFile, 
				this.state.selectedFile.name 
			); 
			
			// Details of the uploaded file 
			// console.log(this.state.selectedFile); 

			this.setState({isPerson: false});

			// Define API request
			const data = this.state.selectedFile;
			const url = 'https://centralus.api.cognitive.microsoft.com/vision/v3.0/detect';
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/octet-stream',
					'Ocp-Apim-Subscription-Key': API_KEY
				},
				data: data,
				url: url,
			}
			// Request made to the Computer Vision API
			axios(options)
			.then(response => { 
				// console.log(response);
				for (let i = 0; i < response.data.objects.length; i++) {
					console.log(response.data.objects[i].object);
					if (response.data.objects[i].object === 'person') {
						this.setState({isPerson: true});
					}
				}
				console.log(this.state.isPerson);
				this.setState({ isClick: true });
			})
			.catch(error => {
				console.log(error.response)
			});	
		}
		else {
			console.log("Upload a file before clicking submit.")
		}
	};

	render() { 
		const renderResult = () => {
			if (this.state.isClick) {
				if (this.state.isPerson ) {
					return <p>There IS a person in the image.</p>;
				}
				else  {
					return <p>There is NOT a person in the image.</p>;
				}
			}
		}
		return ( 
			<div> 
				<h3> 
				Choose a file, then click Submit to check if there is a person in the image.
				</h3> 
				<div> 
					<input type="file" onChange={this.onFileChange} /> 
					<button onClick={this.onSubmit}>Submit</button> 
					{renderResult()}
				</div> 
			</div> 
		); 
	};
};

export default App; 
