import React, {Component} from 'react'
import EditForm from '../../components/EditForm'


class EditProduct extends Component {
    state = {
        name: '',
        color: '',
        gender: '',
        price: '',
        image: '',
        description: '',
        id: ''
    }

    componentDidMount(){
        const id = this.props.props.match.params.id
        fetch(`http://localhost:3000/products/${id}`).then(res=>res.json()).then(data=>{
            const {name, color, gender, price, image, description} = data
            this.setState({
                name, color, gender, price, image, description, id
            })
        })
    }
    render(){
        return(
            <div>
                <EditForm props={this.props.props}/>
            </div>
        )
    }
}

export default EditProduct