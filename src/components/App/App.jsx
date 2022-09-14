import { Component } from 'react';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Searchbar from '../Searchbar/Searchbar';
import ApiImages from '../../servis/Api';
import Modal from '../Modal/Modal';
import Error from '../Error/Error';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';

class App extends Component {
  state = {
    search: '',
    items: [],
    page: 1,
    error: null,
    status: 'idle',
    showModal: false,
    bigImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.search;
    const nextName = this.state.search.trim();
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: 'penting' });

      if (nextPage === 1) {
        this.setState({ items: [] });
      }

      this.searchGallery();
    }
    if (nextPage > 1) {
      this.scroll();
    }
  }
  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  searchGallery = () => {
    const { search, page } = this.state;

    ApiImages(search, page)
      .then(data => {
        this.setState(prevState => ({
          items: [...prevState.items, ...data.hits],
          status: 'resolved',
        }));
        if (data.hits.length === 0) {
          this.setState({
            status: 'rejected',
            error: 'Sorry, there are no images matching your search query.',
          });
          return;
        }
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };
  handleFormSubmit = search => {
    this.setState({ search, page: 1, items: [] });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = image => {
    this.setState({
      showModal: true,
      bigImage: image,
    });
  };

  closeModal = () => {
    this.setState({ showModal: false, bigImage: '' });
  };
  render() {
    const { search, error, status, items, bigImage, showModal } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'penting' && <Loader />}
        {status === 'rejected' && <Error message={error} />}
        {status === 'resolved' && (
          <ImageGallery images={items} onImageClick={this.openModal} />
        )}
        {items.length !== 0 && status === 'resolved' && (
          <Button onClick={this.onLoadMore} />
        )}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={bigImage} alt={search} />
          </Modal>
        )}
        <ToastContainer position="top-center" autoClose={3000} />
      </Container>
    );
  }
}
export default App;
