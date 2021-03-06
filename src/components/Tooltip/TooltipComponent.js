import React from 'react';
import { Tooltip } from 'reactstrap';
import PropTypes from 'prop-types';

class TooltipItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            tooltipOpen: false
        };
    }

    static propTypes = {
        booking: PropTypes.array.isRequired,
    };

    toggleTooltip() {
        this.setState({ tooltipOpen: !this.state.tooltipOpen });
    }

    render() {
        const { booking } = this.props;

        return (
            <div className="disp-inline-block">
                {
                    (booking.consignment_label_link.length > 0) ?
                        <a href="#" className="dark-blue warning" id={'error-tooltip' + booking.id}>
                            <i className="icon icon-warning"></i>
                        </a>
                        :
                        <a>
                            <i className="icon icon-printer transparent"></i>
                        </a>
                }
                <Tooltip placement="right" isOpen={this.state.tooltipOpen} target={'error-tooltip' + booking.id} toggle={() => this.toggleTooltip()} className='tooltipitem'>
                    {booking.error_details}
                </Tooltip>
                &nbsp;&nbsp;{booking.b_status}&nbsp;&nbsp;
            </div>
        );
    }
}

export default TooltipItem;