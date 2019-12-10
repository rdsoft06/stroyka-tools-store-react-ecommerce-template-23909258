// react
import React, { Component } from 'react';

// third-party
import classNames from 'classnames';
import Slick from 'react-slick';


class SlickWithPreventSwipeClick extends Component {
    constructor(props) {
        super(props);

        this.state = {
            preventClick: false,
        };
    }

    componentDidMount() {
        if (!this.element) {
            return;
        }

        this.element.addEventListener('mousedown', this.onMousedown);
    }

    componentWillUnmount() {
        if (!this.element) {
            return;
        }

        this.element.removeEventListener('mousedown', this.onMousedown);
    }

    setRef = (ref) => {
        this.element = ref;
    };

    onMousedown = (event) => {
        const downX = event.screenX;
        const downY = event.screenY;

        const onMousemove = (moveEvent) => {
            const { preventClick } = this.state;

            if (preventClick) {
                return;
            }

            const distance = Math.sqrt(
                (Math.abs(downX - moveEvent.screenX) ** 2)
                + (Math.abs(downY - moveEvent.screenY) ** 2),
            );

            if (distance > 15) {
                this.setState({ preventClick: true });
            }
        };
        const onMouseup = () => {
            this.setState({ preventClick: false });

            document.removeEventListener('mousemove', onMousemove);
            document.removeEventListener('mouseup', onMouseup);
        };

        document.addEventListener('mousemove', onMousemove);
        document.addEventListener('mouseup', onMouseup);
    };

    render() {
        const { children, forwardRef, ...otherProps } = this.props;
        const { preventClick } = this.state;

        const classes = classNames('slick-prevent-click', {
            'slick-prevent-click--active': preventClick,
        });

        return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
                className={classes}
                onMouseDown={this.onMousedown}
                ref={this.setRef}
            >
                <Slick {...otherProps} ref={forwardRef}>
                    {children}
                </Slick>
            </div>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <SlickWithPreventSwipeClick forwardRef={ref} {...props} />
));
