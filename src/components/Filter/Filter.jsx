import PropTypes from 'prop-types';
import {Input, Label} from './Filter.styled'

export const Filter = ({value, onChange}) => {
    return(
        <div>
            <Label>Find contacts by name
                <Input
                autoComplete="off"
                type="text"
                name="name"
                value={value}
                onChange={onChange}
                />
            </Label>
        </div>
    )
}

Filter.protoType = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};