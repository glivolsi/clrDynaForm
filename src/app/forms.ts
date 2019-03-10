import { ControlBase } from "src/dynamicform/controls/controlBase";
import { DropdownControl } from 'src/dynamicform/controls/control-dropdown';
import { TextboxControl } from 'src/dynamicform/controls/control-textbox';

export const testform: ControlBase<any>[] = [

    new DropdownControl({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
            { key: 'solid', value: 'Solid' },
            { key: 'great', value: 'Great' },
            { key: 'good', value: 'Good' },
            { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
    }),

    new TextboxControl({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
    }),

    new TextboxControl({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
    })
];
