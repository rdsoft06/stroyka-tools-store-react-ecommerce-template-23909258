// react
import { Component } from 'react';

// third-party
import PropTypes from 'prop-types';


class AsyncAction extends Component {
    canceled = false;

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    componentWillUnmount() {
        this.canceled = true;
    }

    run = () => {
        const { action } = this.props;
        const { loading } = this.state;

        if (loading || !action) {
            return;
        }

        this.setState({ loading: true });

        action().then(() => {
            if (this.canceled) {
                return;
            }

            this.setState({ loading: false });
        });
    };

    render() {
        const { render } = this.props;
        const { loading } = this.state;

        if (render) {
            return render({ run: this.run, loading });
        }

        return null;
    }
}

AsyncAction.propTypes = {
    action: PropTypes.func,
    render: PropTypes.func,
};

export default AsyncAction;
