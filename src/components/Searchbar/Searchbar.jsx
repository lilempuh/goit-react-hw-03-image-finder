import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  Searchbarr,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      toast.error('Enter the name you are looking for!');
      return;
    }
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <Searchbarr>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autocomplete="off"
            value={this.state.name}
            onChange={this.handleChange}
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbarr>
    );
  }
}
