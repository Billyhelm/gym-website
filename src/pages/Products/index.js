import React, {Component} from 'react'
import './styles.scss'
import ProductCard from './../../components/Card'
import SearchPrice from './../../SortFunctions/index'
import VerticalSearch from './../../components/VerticalSearch'
import Checkbox from './../../components/forms/Checkbox'
import FormInput from '../../components/forms/FormInput'
import Categories from './../../components/forms/Categories'
import Gyms from './../../components/forms/Gyms'
import Gender from './../../components/forms/Gender'

class Products extends Component {

    state = {
        products: null,
        sortTerm: null,
        searchTerm: '',
        filterTerm: '',
        filterGym: '',
        gender: ''
    }

    componentDidMount() {
        fetch('http://localhost:3000/products').then(res=>res.json())
        .then(data => this.setState({products: data}))

        this.setState({gender: this.props.props.location.state ? this.props.props.location.state.gender : ''})
    }

    handleGender = (e) => {
        this.setState({gender: e})
    }
    
    handleSort = (term) => {
        this.setState({sortTerm: term})
    }

    handleSearch = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleFilter = (cat) => {
        this.setState({filterTerm: cat})
    }

    handleGym = (gym) => {
        this.setState({filterGym: gym})
    }

    sortPrice = (products) => {
        if (this.state.sortTerm === "HighLow"){
            return products.sort((a, b) => b.price - a.price) 
        } else if (this.state.sortTerm === "LowHigh"){
            return products.sort((a, b) => a.price - b.price) 
        }
        return products.sort((a,b) => a.id-b.id)
    }

    gymSort = (products) => {
        const {filterGym} = this.state
        console.log(filterGym)
        let gyms = products.filter(product => product.gyms.some(gym => gym.name.includes(filterGym)))
        // console.log(gyms)
        return gyms 
    }

    genderSort = products => {
        return products.filter(product => product.gender.includes(this.state.gender))
    }

    filteredProducts = () => {
        let sorted = this.sortPrice(this.state.products).filter(product => product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        sorted = sorted.filter(product => product.categories[0].name.toLowerCase().includes(this.state.filterTerm.toLowerCase()))
        return this.genderSort(this.gymSort(sorted))
    }
    render(){ 


        const {products} = this.state
        return (
<>
            <div className='sidebar' >
                <VerticalSearch>
                    <h2>Search For Item</h2>
                    <FormInput
                            type='text'
                            name='search'
                            placeholder="Search"
                            onChange={this.handleSearch}
                         />
                    <br/>
                    <Checkbox handleSort={this.handleSort}/>
                    <br/>
                    <Categories handleFilter={this.handleFilter}/>
                    <br/>
                    <Gyms handleGym={this.handleGym}/>
                    <br/>
                    <Gender handleGender={this.handleGender}/>
                </VerticalSearch>

            </div>
        <div className='productContainer'>
               
            <h1>
                Products
            </h1>

            <div className='ui grid link cards'> 
            {products && this.filteredProducts().map(product => {
                return(
                    <ProductCard product={product} />
                )
            })}
            </div>
        </div>
</>
        )

    }
}

export default Products