import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
    this.handleError = this.handleError.bind(this);
  }

  componentDidCatch(err) {
    console.error(err);
    this.setState({ hasError: true });
  }

  handleError() {
    this.setState({ hasError: false });
    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.35)',
              zIndex: 25,
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              background: '#eee',
              maxWidth: '450px',
              margin: '30px',
              borderRadius: '10px',
              padding: '30px',
              paddingBottom: '45px',
              transform: 'translate(-50%,-50%)',
              zIndex: 100,
            }}
          >
            <h2>Oops!</h2>
            <p>Something went wrong!</p>
            <button onClick={this.handleError}>Go back?</button>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
