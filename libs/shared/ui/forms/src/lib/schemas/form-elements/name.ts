import { Field } from '../../helpers/fields';

let startTyping = true;

export const NAME = (disabled) => {
    const templateOptions = {
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
        disabled: disabled
    };

    return {
        ...Field.input(
            'name',
            {
                ...templateOptions
            }
        )
    };
};
