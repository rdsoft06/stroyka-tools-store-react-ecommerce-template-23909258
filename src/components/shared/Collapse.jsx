// react
import { Component } from 'react';

// third-party
import PropTypes from 'prop-types';


class Collapse extends Component {
    componentDidMount() {
        if (!this.content) {
            return;
        }

        const { open } = this.props;

        this.content.addEventListener('transitionend', this.handleTransitionEnd);

        if (open === true) {
            this.expand(true);
        }
        if (open === false) {
            this.collapse(true);
        }
    }

    componentDidUpdate() {
        const { open } = this.props;

        if (typeof open === 'boolean') {
            if (open) {
                this.expand();
            } else {
                this.collapse();
            }
        }
    }

    componentWillUnmount() {
        if (!this.content) {
            return;
        }

        this.content.removeEventListener('transitionend', this.handleTransitionEnd);
    }

    handleTransitionEnd = (event) => {
        if (this.content && event.propertyName === 'height') {
            this.content.style.height = '';
        }
    };

    handleToggle = () => {
        const { toggleClass } = this.props;

        if (!this.item || !this.content || !toggleClass) {
            return;
        }

        if (this.item.classList.contains(toggleClass)) {
            this.collapse();
        } else {
            this.expand();
        }
    };

    setItemRef = (ref) => {
        this.item = ref;
    };

    setContentRef = (ref) => {
        this.content = ref;
    };

    expand(immediate = false) {
        const { toggleClass } = this.props;

        if (!this.item || !this.content || !toggleClass) {
            return;
        }

        if (immediate) {
            this.item.classList.add(toggleClass);
            this.content.style.height = '';
        } else {
            const startHeight = this.content.getBoundingClientRect().height;

            this.item.classList.add(toggleClass);

            const endHeight = this.content.getBoundingClientRect().height;

            this.content.style.height = `${startHeight}px`;
            this.content.getBoundingClientRect(); // force reflow
            this.content.style.height = `${endHeight}px`;
        }
    }

    collapse(immediate = false) {
        const { toggleClass } = this.props;

        if (immediate) {
            this.item.classList.remove(toggleClass);
            this.content.style.height = '';
        } else {
            const startHeight = this.content.getBoundingClientRect().height;

            this.content.style.height = `${startHeight}px`;
            this.item.classList.remove(toggleClass);

            this.content.getBoundingClientRect(); // force reflow
            this.content.style.height = '';
        }
    }

    render() {
        const { render } = this.props;

        if (render) {
            return render({
                toggle: this.handleToggle,
                setItemRef: this.setItemRef,
                setContentRef: this.setContentRef,
            });
        }

        return null;
    }
}

Collapse.propTypes = {
    /** class that will be applied to this.item when opened */
    toggleClass: PropTypes.string,
    /** render function with arguments: toggle, setItemRef, setContentRef */
    render: PropTypes.func,
    /** if specified, the component will behave as a stateless component */
    open: PropTypes.bool,
};

export default Collapse;
